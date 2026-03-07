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

// Full 24-week roadmap (6 topics per week = 144 study days).
// Topics are intentionally unique and progress from fundamentals to advanced MERN.
const weeklyRoadmap = [
  // Weeks 1-2: HTML + CSS fundamentals
  [
    "Internet basics and how websites work",
    "HTML document structure and semantic tags",
    "Links, images, lists, and tables",
    "Forms, inputs, labels, and validation basics",
    "CSS syntax, selectors, and the cascade",
    "Colors, spacing, fonts, and typography basics",
  ],
  [
    "CSS box model in detail",
    "Display, positioning, and z-index",
    "Flexbox fundamentals",
    "CSS Grid fundamentals",
    "Building a multi-section static webpage",
    "Mini project: personal profile website",
  ],

  // Weeks 3-4: advanced CSS + responsive design
  [
    "Advanced selectors and pseudo-classes",
    "Pseudo-elements and reusable UI patterns",
    "CSS transitions and basic animations",
    "Transform and keyframe animation practice",
    "Responsive design principles",
    "Media queries for mobile, tablet, desktop",
  ],
  [
    "Mobile-first layout strategy",
    "Responsive navbar and card layouts",
    "Accessible color contrast and spacing",
    "CSS variables for theme systems",
    "Mini project: responsive landing page",
    "Refactor styles for maintainability",
  ],

  // Weeks 5-6: JavaScript fundamentals
  [
    "JavaScript syntax and variables",
    "Data types and operators",
    "Conditionals and switch statements",
    "Loops and iteration patterns",
    "Functions, parameters, and return values",
    "Scope and hoisting basics",
  ],
  [
    "Arrays and common array methods",
    "Objects and property access",
    "Template literals and string methods",
    "ES6 destructuring and spread",
    "Error handling basics with try/catch",
    "Mini project: JavaScript calculator",
  ],

  // Weeks 7-8: DOM + browser APIs
  [
    "DOM tree fundamentals",
    "Selecting elements with query selectors",
    "Reading and updating text/content",
    "Working with classes and styles via JS",
    "Creating/removing elements dynamically",
    "Event listeners and event object basics",
  ],
  [
    "Form handling with JavaScript",
    "Keyboard and mouse events",
    "LocalStorage fundamentals",
    "Date and time in JavaScript",
    "Mini project: JavaScript todo app",
    "Refactor todo app with reusable functions",
  ],

  // Weeks 9-10: Git + workflow
  [
    "Git basics: init, add, commit",
    "Branching and merging basics",
    "Resolving merge conflicts",
    "GitHub repositories and remotes",
    "Pull requests and code review workflow",
    "Writing clear commit messages",
  ],
  [
    "README and project documentation",
    "Issue tracking and task planning",
    "Debugging workflow and browser devtools",
    "Using npm and package.json",
    "Mini project: team-style feature branch workflow",
    "Polish existing projects with better structure",
  ],

  // Weeks 11-14: React fundamentals + hooks
  [
    "React overview and component mindset",
    "JSX syntax and rendering",
    "Function components and props",
    "Component composition patterns",
    "Local component state with useState",
    "Handling events in React",
  ],
  [
    "Rendering lists and keys",
    "Controlled components and forms",
    "Conditional rendering patterns",
    "Lifting state up",
    "Mini project: React todo app setup",
    "Enhance React todo app with filters",
  ],
  [
    "useEffect fundamentals",
    "Effect cleanup and dependencies",
    "Fetching APIs in React",
    "Loading and error UI states",
    "React folder structure best practices",
    "Reusable custom hooks basics",
  ],
  [
    "React Router fundamentals",
    "Nested routes and navigation",
    "Global state with Context API",
    "Performance basics with memoization",
    "Mini project: multi-page React app",
    "React app cleanup and deployment prep",
  ],

  // Weeks 15-18: Node.js + Express
  [
    "Node.js runtime and modules",
    "CommonJS vs ES modules",
    "npm scripts and environment setup",
    "Building a basic HTTP server",
    "Express setup and routing",
    "Route params and query strings",
  ],
  [
    "Express middleware concept",
    "Request body parsing and validation",
    "REST API design basics",
    "HTTP status codes and responses",
    "Postman or REST client testing",
    "Mini project: Express CRUD API",
  ],
  [
    "Authentication concepts and sessions",
    "JWT basics for APIs",
    "Password hashing with bcrypt",
    "Protected routes and authorization",
    "Error handling middleware",
    "API structure with controllers/services",
  ],
  [
    "Environment variables and config",
    "Logging and monitoring basics",
    "Security basics (CORS, helmet, rate limit)",
    "File uploads and static assets",
    "API versioning strategy",
    "Mini project: production-ready REST API",
  ],

  // Weeks 19-21: MongoDB + integration
  [
    "Database concepts and NoSQL basics",
    "MongoDB documents and collections",
    "CRUD operations in MongoDB",
    "Mongoose models and schemas",
    "Validation in Mongoose",
    "Connecting Node API to MongoDB",
  ],
  [
    "Relationships and data modeling",
    "Populate and references",
    "Indexing basics and query performance",
    "Aggregation pipeline basics",
    "Pagination and filtering",
    "Mini project: API with MongoDB integration",
  ],
  [
    "Transactions and consistency basics",
    "Data migration patterns",
    "Backup and restore basics",
    "Designing scalable schema patterns",
    "Testing DB-backed API endpoints",
    "Refactor backend with better data layer",
  ],

  // Weeks 22-23: full MERN projects
  [
    "Plan full MERN project requirements",
    "Set up monorepo or fullstack structure",
    "Connect React frontend to Express API",
    "Implement auth flow frontend + backend",
    "Build core features for MERN todo app",
    "Integrate validations and error states",
  ],
  [
    "Build MERN blog content models",
    "Create CRUD pages for posts",
    "Add comments and user interactions",
    "Optimize UX and loading states",
    "Prepare production build and deployment",
    "Mini project: deploy full MERN app",
  ],

  // Week 24: portfolio + deployment
  [
    "Select and review best projects",
    "Write clear project case studies",
    "Build portfolio website structure",
    "Add polished UI and responsive design",
    "Deploy portfolio and custom domain setup",
    "Final review and 6-month retrospective",
  ],
];

// Legacy topics from the first version. We use this list to safely migrate old auto-generated
// topics to the new full roadmap while keeping user notes/completion data intact.
const legacyTopicTracks = [
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
  weeklyChart: document.getElementById("weeklyChart"),
  toggleAllWeeksBtn: document.getElementById("toggleAllWeeksBtn"),
};

init();

function init() {
  validateRoadmapShape();
  loadState();
  applyTheme();
  renderQuoteOfTheDay();
  renderPlanner();
  renderHeatmap();
  renderWeeklyChart();
  updateDashboard();
  bindGlobalEvents();
  updateToggleAllButtonLabel();
}

function validateRoadmapShape() {
  const has24Weeks = weeklyRoadmap.length === TOTAL_WEEKS;
  const eachWeekHas6Days = weeklyRoadmap.every((weekTopics) => weekTopics.length === STUDY_DAYS_PER_WEEK);

  if (!has24Weeks || !eachWeekHas6Days) {
    throw new Error("Roadmap must have 24 weeks with 6 topics each.");
  }
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
    header.innerHTML = `
      <span class="week-title"><span class="week-arrow">▶</span> Week ${week}</span>
      <span>Day ${weekStart} - Day ${weekEnd}</span>
    `;

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

  updateToggleAllButtonLabel();
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
    renderWeeklyChart();

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

// Weekly chart is a simple HTML/CSS bar chart with one bar per week.
function renderWeeklyChart() {
  elements.weeklyChart.innerHTML = "";

  for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
    const completed = getCompletedDaysInWeek(week);
    const wrap = document.createElement("div");
    wrap.className = "week-bar-wrap";

    const bar = document.createElement("div");
    bar.className = "week-bar";
    // Max height is 100px for 6 completed study days.
    bar.style.height = `${(completed / STUDY_DAYS_PER_WEEK) * 100}px`;
    bar.title = `Week ${week}: ${completed}/${STUDY_DAYS_PER_WEEK} study days completed`;

    const label = document.createElement("span");
    label.className = "week-bar-label";
    label.textContent = String(week);

    wrap.append(bar, label);
    elements.weeklyChart.appendChild(wrap);
  }
}

function updateDashboard() {
  const completed = countCompletedDays();
  const remaining = TOTAL_DAYS - completed;
  const percent = Math.round((completed / TOTAL_DAYS) * 100);
  const weekFromProgress = getCurrentWeekFromProgress();

  recalculateStreaks();

  elements.progressCount.textContent = `${completed} / ${TOTAL_DAYS}`;
  elements.remainingCount.textContent = String(remaining);
  elements.completionPct.textContent = `${percent}%`;
  elements.currentStreak.textContent = String(state.streak.current);
  elements.longestStreak.textContent = String(state.streak.longest);
  elements.currentWeek.textContent = `Week ${weekFromProgress}`;
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

  elements.toggleAllWeeksBtn.addEventListener("click", () => {
    const currentlyAllCollapsed = areAllWeeksCollapsed();

    // If all are collapsed, expand all. Otherwise collapse all.
    for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
      state.collapsedWeeks[week] = !currentlyAllCollapsed;
    }

    saveState();
    updateToggleAllButtonLabel();
    renderPlanner();
  });

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
        initializeCollapsedWeeks();
        saveState();
        applyTheme();
        renderPlanner();
        renderHeatmap();
        renderWeeklyChart();
        updateDashboard();
        updateToggleAllButtonLabel();
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
    const roadmapTopic = getRoadmapTopicForDay(day);

    if (!state.days[day]) {
      state.days[day] = {
        topic: roadmapTopic,
        completed: false,
        notes: "",
      };
      continue;
    }

    // Migrate old auto-generated repeating topics to the new full roadmap topics.
    if (isLegacyGeneratedTopic(state.days[day].topic, day)) {
      state.days[day].topic = roadmapTopic;
    }
  }

  initializeCollapsedWeeks();
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

// Current week is based on completed study days, not calendar date.
function getCurrentWeekFromProgress() {
  const completedDays = countCompletedDays();
  const rawWeek = Math.floor(completedDays / STUDY_DAYS_PER_WEEK) + 1;
  return Math.min(Math.max(rawWeek, 1), TOTAL_WEEKS);
}

function getRoadmapTopicForDay(dayNumber) {
  const weekIndex = Math.floor((dayNumber - 1) / STUDY_DAYS_PER_WEEK);
  const dayIndex = (dayNumber - 1) % STUDY_DAYS_PER_WEEK;
  return weeklyRoadmap[weekIndex][dayIndex];
}

function isLegacyGeneratedTopic(topic, dayNumber) {
  const weekNumber = Math.ceil(dayNumber / STUDY_DAYS_PER_WEEK);
  const expectedLegacyPrefix = `Week ${weekNumber}: `;

  if (!topic.startsWith(expectedLegacyPrefix)) return false;

  return legacyTopicTracks.some((legacyTopic) => topic === `${expectedLegacyPrefix}${legacyTopic}`);
}

function getCompletedDaysInWeek(week) {
  let completed = 0;
  const start = (week - 1) * STUDY_DAYS_PER_WEEK + 1;
  const end = week * STUDY_DAYS_PER_WEEK;

  for (let day = start; day <= end; day += 1) {
    if (getDay(day).completed) completed += 1;
  }

  return completed;
}

// By default all weeks are collapsed except the current progress week.
function initializeCollapsedWeeks() {
  const keys = Object.keys(state.collapsedWeeks);
  const hasAllWeekKeys = keys.length === TOTAL_WEEKS;
  if (hasAllWeekKeys) return;

  const currentWeek = getCurrentWeekFromProgress();
  for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
    state.collapsedWeeks[week] = week !== currentWeek;
  }

  saveState();
}

function areAllWeeksCollapsed() {
  for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
    if (!state.collapsedWeeks[week]) return false;
  }
  return true;
}

function updateToggleAllButtonLabel() {
  elements.toggleAllWeeksBtn.textContent = areAllWeeksCollapsed()
    ? "Expand All Weeks"
    : "Collapse All Weeks";
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
