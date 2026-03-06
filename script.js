const TOTAL_WEEKS = 24;
const STUDY_DAYS_PER_WEEK = 6;
const TOTAL_DAYS = TOTAL_WEEKS * STUDY_DAYS_PER_WEEK;
const START_DATE = new Date("2026-01-01T00:00:00");

// Milestones map day number -> project name.
const milestones = {
  14: "Profile Website",
  28: "Bootstrap Landing Page",
  42: "JavaScript Calculator",
  54: "JavaScript Todo App",
  72: "React Todo App",
  90: "Movie Search App",
  108: "Node REST API",
  126: "Full MERN Todo App",
  138: "MERN Blog",
  144: "Portfolio Website",
};

// Simple topic generator keeps content beginner-friendly and deterministic.
const topicTracks = [
  "HTML fundamentals",
  "CSS layout & flex/grid",
  "JavaScript basics",
  "DOM manipulation",
  "Git/GitHub workflow",
  "Mini project building",
  "React concepts",
  "Node + Express APIs",
  "MongoDB practice",
  "MERN integration",
  "Testing and debugging",
  "Portfolio polishing",
];

const quotes = [
  "Small consistent effort beats occasional intensity.",
  "Focus on progress, not perfection.",
  "Every bug you fix is a lesson earned.",
  "Discipline builds results even when motivation drops.",
  "Keep shipping: tiny wins create big momentum.",
  "Show up today, your future self will thank you.",
  "Your roadmap works only when you do.",
  "Learn, build, reflect, repeat.",
];

const storageKey = "mernStudyPlannerState-v1";

// App state is centralized in one plain object for clarity.
let state = {
  days: {},
  reflections: {},
  collapsedWeeks: {},
  darkMode: false,
  streak: { current: 0, longest: 0 },
};

const elements = {
  weeksContainer: document.getElementById("weeksContainer"),
  progressCount: document.getElementById("progressCount"),
  remainingCount: document.getElementById("remainingCount"),
  completionPct: document.getElementById("completionPct"),
  currentStreak: document.getElementById("currentStreak"),
  longestStreak: document.getElementById("longestStreak"),
  currentWeek: document.getElementById("currentWeek"),
  nextMilestone: document.getElementById("nextMilestone"),
  nextMilestoneLabel: document.getElementById("nextMilestoneLabel"),
  progressBar: document.getElementById("progressBar"),
  heatmap: document.getElementById("heatmap"),
  darkModeBtn: document.getElementById("darkModeBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importInput: document.getElementById("importInput"),
  goToTodayBtn: document.getElementById("goToTodayBtn"),
  saveIndicator: document.getElementById("saveIndicator"),
  quoteText: document.getElementById("quoteText"),
  studyRowTemplate: document.getElementById("studyRowTemplate"),
};

init();

function init() {
  loadState();
  applyTheme();
  renderQuoteOfTheDay();
  renderPlanner();
  renderHeatmap();
  updateDashboard();
  bindGlobalEvents();
}

function renderQuoteOfTheDay() {
  const dayIndex = Math.floor((Date.now() - START_DATE.getTime()) / 86400000);
  const quoteIndex = Math.abs(dayIndex) % quotes.length;
  elements.quoteText.textContent = quotes[quoteIndex];
}

// Render function creates the full 24-week planner from state every time.
function renderPlanner() {
  elements.weeksContainer.innerHTML = "";
  const todayStudyDay = getTodayStudyDayNumber();

  for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
    const weekCard = document.createElement("article");
    weekCard.className = "week-card";
    if (state.collapsedWeeks[week]) weekCard.classList.add("collapsed");

    const header = document.createElement("button");
    header.type = "button";
    header.className = "week-header";
    const weekStart = (week - 1) * STUDY_DAYS_PER_WEEK + 1;
    const weekEnd = week * STUDY_DAYS_PER_WEEK;
    header.innerHTML = `<span>Week ${week}</span><span>Day ${weekStart} - Day ${weekEnd}</span>`;

    header.addEventListener("click", () => {
      state.collapsedWeeks[week] = !state.collapsedWeeks[week];
      saveState();
      renderPlanner();
    });

    const body = document.createElement("div");
    body.className = "week-body";

    for (let dayOfWeek = 1; dayOfWeek <= STUDY_DAYS_PER_WEEK; dayOfWeek += 1) {
      const dayNumber = (week - 1) * STUDY_DAYS_PER_WEEK + dayOfWeek;
      const dayInfo = getDay(dayNumber);
      const row = buildDayRow(dayInfo, dayNumber, todayStudyDay);
      body.appendChild(row);
    }

    body.appendChild(buildRestDay());
    body.appendChild(buildReflectionBox(week));

    weekCard.append(header, body);
    elements.weeksContainer.appendChild(weekCard);
  }
}

function buildDayRow(dayInfo, dayNumber, todayStudyDay) {
  const fragment = elements.studyRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".study-row");
  row.dataset.dayNumber = dayNumber;

  const dayNumberEl = fragment.querySelector(".day-number");
  const todayBadge = fragment.querySelector(".today-badge");
  const checkbox = fragment.querySelector(".day-checkbox");
  const topicText = fragment.querySelector(".topic-text");
  const notes = fragment.querySelector(".day-notes");

  dayNumberEl.textContent = `Day ${dayNumber}`;
  if (milestones[dayNumber]) {
    const milestoneTag = document.createElement("span");
    milestoneTag.className = "milestone-tag";
    milestoneTag.innerHTML = `<span class="star">★</span> ${milestones[dayNumber]}`;
    dayNumberEl.appendChild(milestoneTag);
    row.classList.add("milestone-row");
  }

  if (dayNumber === todayStudyDay) {
    row.classList.add("today");
    todayBadge.hidden = false;
    row.id = "todayRow";
  }

  checkbox.checked = Boolean(dayInfo.completed);
  topicText.textContent = dayInfo.topic;
  notes.value = dayInfo.notes || "";

  // Checkbox listener updates completion and then refreshes summary widgets.
  checkbox.addEventListener("change", () => {
    dayInfo.completed = checkbox.checked;
    saveState();
    recalculateStreaks();
    updateDashboard();
    renderHeatmap();

    if (dayInfo.completed && milestones[dayNumber]) {
      fireMilestoneConfetti();
    }
  });

  // Notes listener auto-saves on each input for instant persistence.
  notes.addEventListener("input", () => {
    dayInfo.notes = notes.value;
    saveState();
    showSaved("Notes auto-saved");
  });

  return row;
}

function buildRestDay() {
  const rest = document.createElement("div");
  rest.className = "rest-day";
  rest.innerHTML = "<strong>Rest Day:</strong> Recover, review, and prepare for next week.";
  return rest;
}

function buildReflectionBox(week) {
  const reflection = document.createElement("section");
  reflection.className = "reflection-box";
  const current = state.reflections[week] || {};

  reflection.innerHTML = `
    <h4>Weekly Reflection</h4>
    <div class="reflection-grid">
      <label>
        <span>What did I learn this week?</span>
        <textarea class="reflection-input" data-field="learned" rows="2">${escapeHTML(
          current.learned || ""
        )}</textarea>
      </label>
      <label>
        <span>What problems did I face?</span>
        <textarea class="reflection-input" data-field="problems" rows="2">${escapeHTML(
          current.problems || ""
        )}</textarea>
      </label>
      <label>
        <span>What will I improve next week?</span>
        <textarea class="reflection-input" data-field="improve" rows="2">${escapeHTML(
          current.improve || ""
        )}</textarea>
      </label>
    </div>
  `;

  reflection.querySelectorAll(".reflection-input").forEach((input) => {
    input.addEventListener("input", () => {
      if (!state.reflections[week]) state.reflections[week] = {};
      state.reflections[week][input.dataset.field] = input.value;
      saveState();
      showSaved("Reflection saved");
    });
  });

  return reflection;
}

function renderHeatmap() {
  // Heatmap generation creates 144 cells mapped to each study day.
  elements.heatmap.innerHTML = "";

  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    const dayData = getDay(day);
    const cell = document.createElement("div");
    cell.className = "heat-cell";

    if (dayData.completed) {
      cell.classList.add(milestones[day] ? "milestone" : "completed");
    }

    cell.title = `Day ${day} • ${dayData.topic} • ${dayData.completed ? "Completed" : "Not completed"}`;
    elements.heatmap.appendChild(cell);
  }
}

function updateDashboard() {
  const completed = countCompletedDays();
  const remaining = TOTAL_DAYS - completed;
  const percent = Math.round((completed / TOTAL_DAYS) * 100);
  const todayStudyDay = getTodayStudyDayNumber();

  recalculateStreaks();

  elements.progressCount.textContent = `${completed} / ${TOTAL_DAYS}`;
  elements.remainingCount.textContent = String(remaining);
  elements.completionPct.textContent = `${percent}%`;
  elements.currentStreak.textContent = String(state.streak.current);
  elements.longestStreak.textContent = String(state.streak.longest);
  elements.currentWeek.textContent = `Week ${Math.min(Math.max(Math.ceil(todayStudyDay / STUDY_DAYS_PER_WEEK), 1), TOTAL_WEEKS)}`;
  elements.progressBar.style.width = `${percent}%`;
  document
    .querySelector(".progress-track")
    .setAttribute("aria-valuenow", String(completed));

  const next = getNextMilestone(completed);
  elements.nextMilestone.textContent = next ? `Day ${next.day}` : "All done 🎉";
  elements.nextMilestoneLabel.textContent = next ? next.label : "Every milestone completed";
}

// Streak calculation checks each day in order and tracks both current and longest runs.
function recalculateStreaks() {
  let longest = 0;
  let running = 0;

  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    if (getDay(day).completed) {
      running += 1;
      if (running > longest) longest = running;
    } else {
      running = 0;
    }
  }

  let current = 0;
  for (let day = TOTAL_DAYS; day >= 1; day -= 1) {
    if (getDay(day).completed) current += 1;
    else break;
  }

  state.streak = { current, longest };
  saveState();
}

function bindGlobalEvents() {
  elements.darkModeBtn.addEventListener("click", () => {
    state.darkMode = !state.darkMode;
    applyTheme();
    saveState();
  });

  elements.goToTodayBtn.addEventListener("click", () => {
    const todayRow = document.getElementById("todayRow");
    if (todayRow) {
      todayRow.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("Today is outside the 24-week schedule range.");
    }
  });

  elements.exportBtn.addEventListener("click", exportJSON);

  elements.importInput.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!validateImportedState(parsed)) {
          alert("Invalid planner JSON format.");
          return;
        }

        state = parsed;
        saveState();
        applyTheme();
        renderPlanner();
        renderHeatmap();
        updateDashboard();
        showSaved("Import successful");
      } catch {
        alert("Could not parse JSON file.");
      }
    };

    reader.readAsText(file);
    event.target.value = "";
  });
}

function exportJSON() {
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mern-study-planner-progress.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// localStorage helpers keep persistence logic in one place.
function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (validateImportedState(parsed)) {
        state = parsed;
      }
    } catch {
      // Ignore broken data and continue with defaults.
    }
  }

  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    if (!state.days[day]) {
      state.days[day] = {
        topic: `Week ${Math.ceil(day / 6)}: ${topicTracks[(day - 1) % topicTracks.length]}`,
        completed: false,
        notes: "",
      };
    }
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getDay(dayNumber) {
  return state.days[dayNumber];
}

function countCompletedDays() {
  return Object.values(state.days).filter((day) => day.completed).length;
}

function getTodayStudyDayNumber() {
  const now = new Date();
  const diff = Math.floor((new Date(now.toDateString()) - START_DATE) / 86400000);
  if (diff < 0) return 1;
  if (diff >= TOTAL_DAYS) return TOTAL_DAYS;
  return diff + 1;
}

function getNextMilestone(completed) {
  return Object.entries(milestones)
    .map(([day, label]) => ({ day: Number(day), label }))
    .sort((a, b) => a.day - b.day)
    .find((entry) => entry.day > completed);
}

function fireMilestoneConfetti() {
  if (typeof confetti !== "function") return;
  confetti({
    particleCount: 140,
    spread: 80,
    origin: { y: 0.65 },
    colors: ["#d4a700", "#2563eb", "#22c55e"],
  });
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.darkMode ? "dark" : "light");
  elements.darkModeBtn.textContent = state.darkMode ? "Light Mode" : "Dark Mode";
  elements.darkModeBtn.setAttribute("aria-pressed", String(state.darkMode));
}

function showSaved(message) {
  elements.saveIndicator.textContent = message;
  clearTimeout(showSaved.timer);
  showSaved.timer = setTimeout(() => {
    elements.saveIndicator.textContent = "All changes saved";
  }, 1200);
}

function validateImportedState(data) {
  if (!data || typeof data !== "object") return false;
  if (typeof data.days !== "object") return false;
  if (typeof data.reflections !== "object") return false;
  if (typeof data.collapsedWeeks !== "object") return false;
  if (typeof data.darkMode !== "boolean") return false;
  if (!data.streak || typeof data.streak.current !== "number" || typeof data.streak.longest !== "number") {
    return false;
  }

  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    const dayData = data.days[day];
    if (!dayData) return false;
    if (typeof dayData.topic !== "string") return false;
    if (typeof dayData.completed !== "boolean") return false;
    if (typeof dayData.notes !== "string") return false;
  }

  return true;
}

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
