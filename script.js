const TOTAL_WEEKS = 24;
const STUDY_DAYS_PER_WEEK = 6;
const TOTAL_DAYS = TOTAL_WEEKS * STUDY_DAYS_PER_WEEK;
const START_DATE = new Date("2026-01-01T00:00:00");

// Milestones map day number -> project name.
const milestones = {
  14: "HTML + CSS Basics Checkpoint",
  28: "Bootstrap Foundations Checkpoint",
  42: "JavaScript Fundamentals Checkpoint",
  54: "DOM + Events Checkpoint",
  72: "Loops, Functions, Arrays Checkpoint",
  90: "Objects + Advanced JavaScript Checkpoint",
  108: "React Fundamentals Checkpoint",
  126: "Node + Express + MongoDB Checkpoint",
  138: "MERN Project Milestone",
  144: "Final MERN Capstone + Deployment",
};

// Full 24-week roadmap (6 topics per week = 144 study days).
// This follows the requested Udemy-style section order:
// HTML -> CSS -> Bootstrap -> JavaScript -> DOM -> Events -> Loops -> Functions
// -> Arrays -> Objects -> Advanced JavaScript -> React -> Node.js -> Express
// -> MongoDB -> MERN projects.
const weeklyRoadmap = [
  // Weeks 1-2: HTML basics
  [
    "Course setup and web development roadmap overview",
    "HTML boilerplate, tags, and page structure",
    "Headings, paragraphs, and text formatting",
    "Links, images, and media elements",
    "Lists, tables, and semantic HTML basics",
    "HTML forms and common input types",
  ],
  [
    "Advanced form fields and form validation attributes",
    "Semantic layout tags: header, nav, main, section, footer",
    "HTML accessibility basics (labels, alt, landmarks)",
    "HTML best practices and clean structure",
    "Build a complete multi-section HTML page",
    "HTML recap and section quiz practice",
  ],

  // Weeks 3-4: CSS basics
  [
    "CSS introduction, syntax, and selectors",
    "Colors, units, and typography in CSS",
    "Box model, margin, padding, and border",
    "Display property and positioning basics",
    "Backgrounds, gradients, and visual styling",
    "Styling links, lists, and form controls",
  ],
  [
    "Flexbox fundamentals and alignment",
    "CSS Grid fundamentals and templates",
    "Pseudo-classes and pseudo-elements",
    "Transitions, transforms, and animations",
    "Responsive design with media queries",
    "CSS layout practice and recap",
  ],

  // Weeks 5-6: Bootstrap
  [
    "Bootstrap setup and grid system",
    "Bootstrap containers, rows, and columns",
    "Bootstrap typography and spacing utilities",
    "Bootstrap colors, buttons, and alerts",
    "Bootstrap cards, navbar, and layout sections",
    "Responsive design with Bootstrap breakpoints",
  ],
  [
    "Bootstrap forms and input groups",
    "Bootstrap components: modal, carousel, accordion",
    "Bootstrap icons and helper classes",
    "Customize Bootstrap styles and theme",
    "Build Bootstrap landing page section by section",
    "Bootstrap recap and mini assessment",
  ],

  // Weeks 7-8: JavaScript fundamentals
  [
    "JavaScript intro, console, and script linking",
    "Variables (let, const), naming, and data types",
    "Operators and expressions",
    "String methods and template literals",
    "Type conversion and comparisons",
    "Conditionals (if/else and switch)",
  ],
  [
    "Truthiness, falsiness, and logical operators",
    "Intro to debugging with console and breakpoints",
    "JavaScript coding style and clean code basics",
    "Practice problems for conditionals and operators",
    "Mini JavaScript challenge set",
    "JavaScript fundamentals recap",
  ],

  // Weeks 9-10: DOM and Events
  [
    "DOM tree and browser document model",
    "Selecting elements with querySelector",
    "Updating text, HTML, and attributes",
    "Manipulating classes and inline styles",
    "Creating and removing DOM elements",
    "DOM traversal basics",
  ],
  [
    "Event fundamentals and event object",
    "Click and input events",
    "Keyboard and form submit events",
    "Event bubbling, capturing, and delegation",
    "Default browser behavior and preventDefault",
    "DOM + Events recap exercise",
  ],

  // Weeks 11-14: Loops, Functions, Arrays, Objects
  [
    "Loops: for, while, and do...while",
    "Loop control: break and continue",
    "Nested loops and pattern exercises",
    "Practical looping challenges",
    "Intro to functions and function syntax",
    "Function parameters and return values",
  ],
  [
    "Function expressions and arrow functions",
    "Scope and closures basics",
    "Higher-order functions introduction",
    "Arrays basics and indexing",
    "Array methods: push, pop, shift, unshift",
    "Array iteration with forEach and map",
  ],
  [
    "More array methods: filter, find, reduce",
    "Objects basics and key-value structure",
    "Reading, writing, and deleting object properties",
    "Object methods and this keyword basics",
    "Arrays of objects practice",
    "Functions + Arrays + Objects mixed exercises",
  ],
  [
    "Advanced JavaScript: destructuring",
    "Spread and rest operators",
    "Default params and optional chaining",
    "Promises and async/await introduction",
    "Error handling with try/catch",
    "Advanced JavaScript recap",
  ],

  // Weeks 15-18: Advanced JavaScript and React
  [
    "Closures in depth",
    "Execution context and call stack",
    "Array/object deep copy strategies",
    "Modules and import/export",
    "Fetch API and working with JSON",
    "Mini app: consume a public API",
  ],
  [
    "React intro and setup",
    "JSX and component structure",
    "Props and reusable components",
    "State with useState",
    "Handling events in React",
    "Conditional rendering and lists",
  ],
  [
    "Forms in React (controlled components)",
    "useEffect and side effects",
    "Fetching data in React",
    "React hooks practice project",
    "Component folder organization",
    "React fundamentals recap",
  ],
  [
    "React Router basics",
    "Route params and navigation",
    "Lifting state and shared state patterns",
    "Context API basics",
    "Build a complete React feature module",
    "React section completion quiz",
  ],

  // Weeks 19-21: Node.js, Express, MongoDB
  [
    "Node.js runtime and REPL",
    "Node modules and npm packages",
    "Built-in modules: fs, path, http",
    "Create a basic Node HTTP server",
    "Environment variables and config",
    "Node.js fundamentals recap",
  ],
  [
    "Express intro and app setup",
    "Express routing and route handlers",
    "Middleware fundamentals",
    "REST API basics with Express",
    "Request validation and error handling",
    "Build Express CRUD endpoints",
  ],
  [
    "MongoDB basics and NoSQL concepts",
    "Collections, documents, and CRUD",
    "Mongoose schemas and models",
    "Mongoose validations and hooks",
    "Connect Express API to MongoDB",
    "Node + Express + MongoDB recap",
  ],

  // Weeks 22-24: MERN projects
  [
    "MERN architecture and full-stack flow",
    "Set up frontend + backend project structure",
    "Connect React frontend to Express backend",
    "Authentication flow across MERN stack",
    "Build MERN project core features",
    "Handle loading, errors, and protected routes",
  ],
  [
    "MERN project: create content models",
    "MERN project: implement CRUD operations",
    "MERN project: search, filter, and pagination",
    "MERN project: state management refinement",
    "MERN project: testing and bug fixing",
    "MERN project milestone review",
  ],
  [
    "MERN capstone planning and scope",
    "Build capstone frontend modules",
    "Build capstone backend APIs",
    "Integrate MongoDB and deployment configs",
    "Deploy MERN capstone and final QA",
    "Course completion review and next steps",
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
  // Keep a simple data-day attribute for direct day-based queries.
  row.dataset.day = dayNumber;

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
    // 1) Get today's study day number from shared helper.
    const todayDay = getTodayStudyDayNumber();

    // 2) Expand the week first (if collapsed), then re-render so the row is visible.
    const todayWeek = Math.ceil(todayDay / STUDY_DAYS_PER_WEEK);
    if (state.collapsedWeeks[todayWeek]) {
      state.collapsedWeeks[todayWeek] = false;
      saveState();
      renderPlanner();
    }

    // 3) Find the row by data-day and smoothly scroll to it.
    const todayRow = document.querySelector(`[data-day="${todayDay}"]`);
    if (todayRow) {
      todayRow.scrollIntoView({ behavior: "smooth", block: "center" });
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
