const courses = [
  {
    id: "strategy-systems",
    area: "Business",
    label: "Strategy",
    title: "Business Strategy: From Choices to Action",
    summary: "Learn to turn a broad business aim into a set of clear choices, priorities, and measures that guide day-to-day work.",
    length: "6 lessons",
    level: "Foundation",
    lessons: [
      { title: "A strategy begins with a choice", body: ["A business cannot put the same energy into every possible customer, product, location, and improvement at once. A useful direction starts by deciding where effort will be concentrated and what will not receive the same attention.", "That decision gives people a shared basis for judging new work. Instead of asking whether an idea sounds promising in isolation, they can ask whether it supports the chosen direction."], note: "A direction is useful when it helps a team decline work that would pull attention away from the result it is trying to create." },
      { title: "Turn a direction into operating priorities", body: ["A direction only becomes practical when it changes what people do. Priorities name the small number of results that deserve deliberate attention during a defined period.", "Each priority needs a visible owner, a measure that can be checked, and a regular point where progress is discussed. Without those parts, a priority remains a statement of hope."], note: "A priority becomes manageable when a person can explain what progress would look like before beginning the work." },
      { title: "Use measures to learn, not to decorate", body: ["A measure is a fact that helps people see whether work is moving in the intended direction. It can show speed, cost, quality, reliability, or another result that matters to the chosen direction.", "A number by itself does not explain why something happened. Teams need to pair the number with observation, discussion, and a decision about the next action."], note: "Choose measures that change a decision, not measures that only make a report look complete." }
    ]
  },
  {
    id: "operating-rhythm",
    area: "Business",
    label: "Operations",
    title: "Operating Rhythm for Reliable Teams",
    summary: "Build a repeatable cadence for decisions, handoffs, review, and improvement without adding unnecessary meetings.",
    length: "5 lessons",
    level: "Foundation",
    lessons: [
      { title: "Reliable work needs a visible rhythm", body: ["When work arrives unpredictably, people often respond with more messages, more meetings, and more urgent requests. That can make activity feel high while making outcomes less reliable.", "A working rhythm gives recurring work a known place to be reviewed, decided, and handed forward. It reduces the amount of time people spend guessing where information belongs."], note: "The purpose of a rhythm is not to fill calendars. It is to make important work easier to see and move." },
      { title: "Separate decisions from updates", body: ["An update tells others what has happened. A decision chooses what should happen next. Treating both as the same kind of conversation makes meetings longer and leaves responsibility unclear.", "Before a recurring discussion, name which items need a decision and which items only need to be recorded. The group can then spend its limited time where judgment is needed."], note: "A meeting with no stated decision can often be replaced by a written update." },
      { title: "Review the system, not just the latest result", body: ["A recent success or failure can be useful evidence, but it is only one event. Looking for repeated patterns helps a team understand whether the way work is arranged is helping or hurting the result.", "Reviewing the system means examining the handoffs, information, timing, and choices that repeatedly shape the work. That opens more useful improvements than blaming the person closest to a problem."], note: "A durable improvement changes the conditions that produce the result, not only the response to one result." }
    ]
  },
  {
    id: "javascript-foundations",
    area: "Programming",
    label: "JavaScript",
    title: "JavaScript: Building Clear Browser Behavior",
    summary: "Understand how a web page receives information, makes decisions, changes what people see, and responds to actions.",
    length: "8 lessons",
    level: "Foundation",
    lessons: [
      { title: "A web page can react to an action", body: ["A web page can contain parts that a person can press, type into, or choose. A browser can notice one of those actions and run instructions in response.", "Those instructions can read information from the page, decide what should happen, and change a part of the page. This is how a static document becomes an interactive tool."], note: "Keep each response close to the action it supports so a future reader can trace what happens without searching through unrelated work." },
      { title: "Store one piece of information with a clear name", body: ["An interactive page often needs to remember a small fact while it is open, such as a selected course, a search phrase, or the number of completed lessons.", "Giving that fact a clear name prevents it from being confused with another fact. A good name describes what the information represents, not the temporary way it is displayed."], note: "Clear names reduce mistakes because they let a reader understand purpose before following the surrounding instructions." },
      { title: "Change the page from current information", body: ["A page stays consistent when its visible content is produced from the information it currently holds. When the information changes, the page can be rebuilt or the affected part can be updated.", "This approach prevents one part of the screen from saying one thing while another part still reflects an older state."], note: "Before changing what a person sees, decide which stored fact is the source of truth for that part of the page." }
    ]
  },
  {
    id: "html-meaning",
    area: "Programming",
    label: "HTML",
    title: "HTML: Meaningful Structure for the Web",
    summary: "Learn how a browser and assistive technology understand the purpose of content before visual styling is added.",
    length: "6 lessons",
    level: "Foundation",
    lessons: [
      { title: "Structure gives information a job", body: ["A page is more useful when its parts describe what they are for. A page title, a main area, a list, a button, and a link each give a browser and a person different information about purpose.", "Choosing a part based on purpose creates a stronger foundation than choosing it only because it can be styled to look a certain way."], note: "Build the meaning of the page first. Visual design can then reinforce that meaning instead of having to replace it." },
      { title: "A heading creates a map", body: ["Long pages become hard to scan when every line looks equally important. Headings create a visible map by showing the major subjects and the smaller subjects inside them.", "The order of headings should follow the order of ideas. That lets a reader move through the page without guessing which information belongs together."], note: "A heading should introduce the content that follows it, rather than repeating decorative wording." },
      { title: "Use real controls for real actions", body: ["A person should be able to use a page with a keyboard, touch, or a pointing device. Real links and buttons already carry the expected behavior for these actions.", "Replacing them with ordinary visual containers can remove that behavior unless it is rebuilt carefully. Using the right control avoids creating an unnecessary accessibility problem."], note: "When something changes the current page, use a button. When it takes someone to another location, use a link." }
    ]
  },
  {
    id: "css-layout",
    area: "Programming",
    label: "CSS",
    title: "CSS Layout: Responsive Interfaces Without Guesswork",
    summary: "Create layouts that adapt to narrow and wide screens while keeping text readable and controls reachable.",
    length: "7 lessons",
    level: "Foundation",
    lessons: [
      { title: "A layout needs room to adapt", body: ["A screen can be narrow, wide, tall, short, zoomed, or shown with larger text. A layout that depends on one fixed width can break when any of those conditions change.", "Responsive layout starts by allowing groups of content to wrap, shrink, grow, or stack when space changes. The page becomes resilient because it is responding to available room instead of one expected device."], note: "Treat a screen size as a condition to respond to, not as a fixed target to imitate." },
      { title: "Keep reading comfortable at every width", body: ["Text that is too small is difficult to read. Text that grows without a limit can also become difficult to scan. A useful layout lets text grow within a lower and upper boundary.", "The same principle applies to the width of a reading column. Limiting extremely long lines reduces the effort required to find the next line of text."], note: "Good responsive design protects the lower limit and upper limit of readability at the same time." },
      { title: "Arrange groups before positioning details", body: ["A page is easier to maintain when the main groups are arranged with a layout system that understands available space. Individual nudges should be reserved for small details, not used to hold the whole page together.", "Start with the page sections, then the groups inside each section, then the individual pieces. This order makes it easier to see which rule is responsible for a layout change."], note: "When a layout breaks, inspect the containing group first before changing the item inside it." }
    ]
  },
  {
    id: "python-data-work",
    area: "Programming",
    label: "Python",
    title: "Python: Practical Work With Data",
    summary: "Use clear instructions to turn a collection of records into useful, repeatable information for a business decision.",
    length: "7 lessons",
    level: "Foundation",
    lessons: [
      { title: "A record holds related facts", body: ["A record keeps facts that belong together. A customer record might hold a name, a date, and a purchase amount. A collection is made from many records of the same general kind.", "Keeping related facts together makes it possible to ask consistent questions across the collection without rebuilding the information every time."], note: "Start by naming what one record represents before deciding how to analyze many records." },
      { title: "Turn a question into repeatable steps", body: ["A useful analysis begins with a question that can be checked. For example, a team may want to know which service takes the longest or which location has the highest number of delayed orders.", "The answer becomes dependable when the same steps can be repeated on new information. That means being clear about what is included, what is excluded, and how a result is calculated."], note: "A repeatable method is more valuable than one result because it can be checked when the information changes." },
      { title: "Make the result understandable", body: ["A correct result is not enough when the people making decisions cannot see what it means. The output should state what was measured, the period covered, and any important limitation.", "Presenting those details protects a decision from being based on a number that has lost its context."], note: "Every useful result answers both what happened and how the result should be interpreted." }
    ]
  },
  {
    id: "full-stack-systems",
    area: "Programming",
    label: "Full Stack",
    title: "Full-Stack Systems: One Product, Connected Parts",
    summary: "See how a person-facing interface, trusted data, and a service that coordinates them work together as one product.",
    length: "9 lessons",
    level: "Intermediate",
    lessons: [
      { title: "One product can have several responsibilities", body: ["A modern web product often needs one part that a person sees and uses, another part that stores long-term information, and another part that decides whether a request is allowed and how information should move.", "Keeping these responsibilities clear helps prevent private information from being treated like ordinary page text and helps each part be changed without breaking the whole product."], note: "A visible page is only one part of a product when the product needs accounts, shared data, or protected actions." },
      { title: "A request needs a trusted path", body: ["When a person asks to view or change saved information, the product needs to know who is asking and whether that person is allowed to perform the action. The request should be checked before private information is returned or changed.", "This path is important because browser code is visible to the person using the browser. Private rules and secrets must not be placed there."], note: "A trustworthy system treats the browser as a place to request work, not as the place that decides every permission." },
      { title: "Shared progress requires shared storage", body: ["Progress that lives only in one browser cannot automatically appear on a phone, tablet, and laptop. For that to happen, the progress must be connected to an identified person and saved in a shared service.", "The same service then returns the current progress when that person uses another device. This is the boundary between a static learning site and an account-based learning product."], note: "Cross-device continuity is a product capability that requires identity and shared storage, not only a visual dashboard." }
    ]
  }
];

const app = document.querySelector("#app");
const storageKey = "sp-institute-completed-lessons-v1";
let catalogTopic = "All";
let catalogQuery = "";

function icon(name) {
  const icons = {
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    menu: '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    search: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>',
    book: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    clock: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[character]));
}

function getProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    return false;
  }
  return true;
}

function getCourse(id) {
  return courses.find((course) => course.id === id);
}

function courseProgress(course) {
  const progress = getProgress();
  const completed = course.lessons.filter((_, index) => progress[`${course.id}:${index}`]).length;
  return {
    completed,
    total: course.lessons.length,
    percent: Math.round((completed / course.lessons.length) * 100)
  };
}

function progressMarkup(course, compact = false) {
  const progress = courseProgress(course);
  return `
    <div class="progress-track" role="progressbar" aria-label="${escapeHtml(course.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}">
      <span class="progress-value" style="width:${progress.percent}%"></span>
    </div>
    <div class="progress-meta">
      <span>${progress.completed} of ${progress.total} lessons complete</span>
      ${compact ? "" : `<span>${progress.percent}%</span>`}
    </div>`;
}

function courseCard(course) {
  return `
    <article class="course-card">
      <div class="course-card-topline">
        <span class="tag tag-${course.area.toLowerCase()}">${escapeHtml(course.label)}</span>
        <span class="course-length">${escapeHtml(course.length)}</span>
      </div>
      <h3 class="course-title">${escapeHtml(course.title)}</h3>
      <p class="course-summary">${escapeHtml(course.summary)}</p>
      <div class="course-card-footer">
        <span>${escapeHtml(course.level)}</span>
        <a class="text-button" href="#/study/${course.id}/0">Open course ${icon("arrow")}</a>
      </div>
    </article>`;
}

function pageShell(page, content) {
  const links = [
    ["home", "Home", "#/home"],
    ["catalog", "Catalog", "#/catalog"],
    ["dashboard", "Study dashboard", "#/dashboard"]
  ];
  return `
    <div class="site-shell">
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="#/home" aria-label="SP Institute home">
            <span class="brand-mark">SP</span>
            <span class="brand-text">SP Institute<small>Professional learning</small></span>
          </a>
          <nav class="primary-nav" id="primary-nav" aria-label="Primary navigation">
            ${links.map(([key, label, href]) => `<a class="nav-link" href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          </nav>
          <div class="header-actions">
            <a class="identity-chip" href="#/dashboard" aria-label="Open study dashboard"><span class="identity-initials">SP</span><span>Study space</span></a>
            <button class="menu-button" type="button" data-action="toggle-menu" aria-label="Open navigation menu" aria-controls="primary-nav" aria-expanded="false">${icon("menu")}</button>
          </div>
        </div>
      </header>
      <main class="page-main" id="main-content">${content}</main>
      <footer class="site-footer">
        <div class="footer-inner">
          <span class="footer-brand">SP Institute</span>
          <span>Read-only professional learning for focused study.</span>
          <nav class="footer-links" aria-label="Footer navigation"><a href="#/catalog">Course catalog</a><a href="#/dashboard">Study dashboard</a></nav>
        </div>
      </footer>
    </div>`;
}

function homePage() {
  const featured = courses.slice(0, 3).map(courseCard).join("");
  return `
    <section class="hero">
      <div class="page-section hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">SP Institute</span>
          <h1 class="display-title" id="page-title" tabindex="-1">Professional learning that respects your attention.</h1>
          <p class="lede">Read structured courses in business and programming at your own pace. Every course is organized for direct study, with clear sections, practical context, and no distractions competing for your time.</p>
          <div class="button-row">
            <a class="button button-primary" href="#/catalog">Explore the catalog ${icon("arrow")}</a>
            <a class="button button-secondary" href="#/dashboard">Open study dashboard</a>
          </div>
        </div>
        <aside class="hero-panel" aria-label="Study overview">
          <div class="panel-topline"><span>Study workspace</span><span class="status-dot">Available</span></div>
          <div class="continue-card">
            <span class="tag tag-business">Business strategy</span>
            <h2>Business Strategy: From Choices to Action</h2>
            <p>Continue with a structured lesson on turning direction into operating priorities.</p>
            <div style="margin-top:1rem">${progressMarkup(courses[0])}</div>
            <div class="button-row"><a class="button button-primary button-small" href="#/study/strategy-systems/0">Start reading ${icon("arrow")}</a></div>
          </div>
          <div class="panel-stat-grid">
            <div class="panel-stat"><strong>${courses.length}</strong><span>Available courses</span></div>
            <div class="panel-stat"><strong>2 areas</strong><span>Business and programming</span></div>
          </div>
        </aside>
      </div>
    </section>
    <section class="page-section">
      <div class="trust-row" aria-label="Learning format">
        <span class="trust-item"><span class="trust-check">✓</span>Read-only learning</span>
        <span class="trust-item"><span class="trust-check">✓</span>Responsive study layout</span>
        <span class="trust-item"><span class="trust-check">✓</span>Clear progress controls</span>
      </div>
      <div class="section-heading mt-section">
        <div><span class="eyebrow">Start here</span><h2 class="section-title" style="margin-top:.6rem">Courses designed for practical use.</h2><p class="lede">Choose a subject, read one lesson at a time, and return to the point where you left off in this browser.</p></div>
        <a class="text-button" href="#/catalog">View all courses ${icon("arrow")}</a>
      </div>
      <div class="course-grid">${featured}</div>
      <div class="metric-grid mt-section" aria-label="Platform capabilities">
        <div class="metric"><strong>Focused</strong><span>One reading experience, without video or assignment workflows.</span></div>
        <div class="metric"><strong>Responsive</strong><span>Layout adapts to phones, tablets, laptops, and larger screens.</span></div>
        <div class="metric"><strong>Expandable</strong><span>Courses use one shared data model so the catalog can grow cleanly.</span></div>
      </div>
      <div class="section-heading mt-section"><div><span class="eyebrow">How it works</span><h2 class="section-title" style="margin-top:.6rem">A calm path through a complex subject.</h2></div></div>
      <div class="path-grid">
        <article class="path-card"><span class="path-number">01</span><h3>Choose a course</h3><p>Browse by subject area or search for a topic that matches the work you need to do.</p></article>
        <article class="path-card"><span class="path-number">02</span><h3>Read with context</h3><p>Move through short, ordered lessons that explain a subject without requiring a live session.</p></article>
        <article class="path-card"><span class="path-number">03</span><h3>Track your place</h3><p>Mark a lesson complete and use the dashboard to return to the next piece of reading.</p></article>
      </div>
    </section>`;
}

function catalogPage() {
  const businessCount = courses.filter((course) => course.area === "Business").length;
  const programmingCount = courses.filter((course) => course.area === "Programming").length;
  return `
    <section class="page-hero"><div class="page-hero-inner"><span class="eyebrow">Course catalog</span><h1 class="page-title" id="page-title" tabindex="-1">Build useful knowledge, one subject at a time.</h1><p class="lede">Browse focused reading courses for business work and modern software development. The catalog is structured to accept new courses without changing the study experience.</p></div></section>
    <section class="page-section">
      <div class="catalog-layout">
        <aside class="catalog-filter" aria-label="Course filters">
          <div><label class="filter-label" for="course-search">Search courses</label><div class="search-wrap"><span class="search-icon">${icon("search")}</span><input class="search-input" id="course-search" type="search" placeholder="Search a subject" autocomplete="off" value="${escapeHtml(catalogQuery)}" /></div></div>
          <div class="filter-group"><span class="filter-label">Subject area</span><div class="filter-options" role="group" aria-label="Filter courses by subject area">
            <button class="filter-option" type="button" data-topic="All" aria-pressed="${catalogTopic === "All"}"><span>All courses</span><span class="filter-count">${courses.length}</span></button>
            <button class="filter-option" type="button" data-topic="Business" aria-pressed="${catalogTopic === "Business"}"><span>Business</span><span class="filter-count">${businessCount}</span></button>
            <button class="filter-option" type="button" data-topic="Programming" aria-pressed="${catalogTopic === "Programming"}"><span>Programming</span><span class="filter-count">${programmingCount}</span></button>
          </div></div>
        </aside>
        <div><div class="catalog-results-header"><h2 class="section-title">Available courses</h2><span class="result-count" id="result-count"></span></div><div class="catalog-course-grid" id="catalog-results"></div></div>
      </div>
    </section>`;
}

function renderCatalogResults() {
  const target = document.querySelector("#catalog-results");
  const count = document.querySelector("#result-count");
  if (!target || !count) return;
  const query = catalogQuery.trim().toLowerCase();
  const matching = courses.filter((course) => {
    const withinTopic = catalogTopic === "All" || course.area === catalogTopic;
    const searchable = `${course.title} ${course.summary} ${course.label} ${course.area}`.toLowerCase();
    return withinTopic && (!query || searchable.includes(query));
  });
  count.textContent = `${matching.length} ${matching.length === 1 ? "course" : "courses"}`;
  target.innerHTML = matching.length ? matching.map(courseCard).join("") : `<div class="empty-state"><div><h2>No courses match that search.</h2><p>Try a different word or choose another subject area.</p></div></div>`;
}

function dashboardPage() {
  const activeCourses = courses.slice(0, 4);
  const totalComplete = courses.reduce((count, course) => count + courseProgress(course).completed, 0);
  const totalLessons = courses.reduce((count, course) => count + course.lessons.length, 0);
  return `
    <section class="page-hero"><div class="page-hero-inner"><span class="eyebrow">Study dashboard</span><h1 class="page-title" id="page-title" tabindex="-1">Your reading, arranged for a clear return.</h1><p class="lede">Open any course, mark lessons when you finish reading, and use this space to see your current progress.</p></div></section>
    <section class="page-section">
      <div class="dashboard-top"><div><h2 class="section-title">Continue studying</h2><p class="lede" style="margin-top:.55rem">Your current browser has ${totalComplete} completed of ${totalLessons} available lessons.</p></div><a class="button button-secondary" href="#/catalog">Browse catalog ${icon("arrow")}</a></div>
      <div class="dashboard-grid">
        <section class="dashboard-panel" aria-labelledby="active-courses-title"><div class="panel-heading"><h2 id="active-courses-title">Courses in your study space</h2><span class="tag">Read only</span></div><div class="learning-list">${activeCourses.map((course) => { const progress = courseProgress(course); const next = Math.min(progress.completed, course.lessons.length - 1); return `<article class="learning-row"><div><h3>${escapeHtml(course.title)}</h3><p>${escapeHtml(course.area)} · ${escapeHtml(course.length)}</p>${progressMarkup(course, true)}</div><a class="button button-secondary button-small" href="#/study/${course.id}/${next}">${progress.completed ? "Continue" : "Start"} ${icon("arrow")}</a></article>`; }).join("")}</div></section>
        <aside class="dashboard-aside"><section class="dashboard-aside-card"><h2>Study format</h2><p>Courses are designed for reading. This site does not use video, teacher-led sessions, graded assignments, social groups, or leaderboard mechanics.</p><div class="availability-list"><span class="availability-item">One consistent study interface</span><span class="availability-item">Native keyboard controls</span><span class="availability-item">Responsive reading width</span></div></section><section class="dashboard-aside-card"><h2>Progress storage</h2><p>This GitHub Pages release stores lesson completion in the browser that is currently in use. A connected account service is required before progress can be shared between devices.</p></section></aside>
      </div>
    </section>`;
}

function studyPage(courseId, requestedLesson) {
  const course = getCourse(courseId);
  if (!course) return `<section class="study-not-found"><h1 id="page-title" tabindex="-1">That course is not available.</h1><p>The link may be outdated, or the course has not been added to this catalog.</p><div class="button-row" style="justify-content:center"><a class="button button-primary" href="#/catalog">Return to catalog</a></div></section>`;
  const lessonIndex = Number.isInteger(requestedLesson) && requestedLesson >= 0 && requestedLesson < course.lessons.length ? requestedLesson : 0;
  const lesson = course.lessons[lessonIndex];
  const progress = getProgress();
  const isComplete = Boolean(progress[`${course.id}:${lessonIndex}`]);
  return `
    <div class="study-layout">
      <aside class="study-sidebar" aria-label="Course lessons">
        <div class="study-course-label"><span class="tag tag-${course.area.toLowerCase()}">${escapeHtml(course.label)}</span><h2>${escapeHtml(course.title)}</h2></div>
        <nav class="lesson-nav" aria-label="Lesson list">${course.lessons.map((item, index) => `<a class="lesson-nav-button${progress[`${course.id}:${index}`] ? " is-complete" : ""}" href="#/study/${course.id}/${index}"${index === lessonIndex ? ' aria-current="step"' : ""}><span class="lesson-index">${progress[`${course.id}:${index}`] ? "✓" : index + 1}</span><span>${escapeHtml(item.title)}</span></a>`).join("")}</nav>
      </aside>
      <article class="study-content">
        <p class="study-crumb"><a href="#/catalog">Catalog</a><span aria-hidden="true">/</span><span>${escapeHtml(course.label)}</span></p>
        <h1 class="study-title" id="page-title" tabindex="-1">${escapeHtml(course.title)}</h1>
        <p class="study-description">${escapeHtml(course.summary)}</p>
        <div class="study-meta"><span>${icon("book")} Lesson ${lessonIndex + 1} of ${course.lessons.length}</span><span>${icon("clock")} Read at your pace</span></div>
        <div class="lesson-paper">
          <p class="lesson-overline">Lesson ${lessonIndex + 1}</p>
          <h2>${escapeHtml(lesson.title)}</h2>
          <div class="lesson-body">${lesson.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
          <aside class="reading-note"><strong>Reading note</strong><p>${escapeHtml(lesson.note)}</p></aside>
          <div class="lesson-actions">
            <span class="completion-status">${isComplete ? "<strong>Completed</strong> in this browser" : "Mark this lesson when you finish reading."}</span>
            <div class="button-row" style="margin-top:0">
              ${lessonIndex > 0 ? `<a class="button button-secondary button-small" href="#/study/${course.id}/${lessonIndex - 1}">Previous</a>` : ""}
              <button class="button ${isComplete ? "button-secondary" : "button-primary"} button-small" type="button" data-action="toggle-complete" data-course-id="${course.id}" data-lesson-index="${lessonIndex}">${isComplete ? "Mark incomplete" : "Mark complete"}</button>
              ${lessonIndex < course.lessons.length - 1 ? `<a class="button button-primary button-small" href="#/study/${course.id}/${lessonIndex + 1}">Next lesson ${icon("arrow")}</a>` : ""}
            </div>
          </div>
        </div>
      </article>
    </div>`;
}

function getRoute() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const page = ["home", "catalog", "dashboard", "study"].includes(parts[0]) ? parts[0] : "home";
  return { page, courseId: parts[1] || "", lesson: Number(parts[2]) };
}

function render() {
  const route = getRoute();
  let content = "";
  if (route.page === "catalog") content = catalogPage();
  else if (route.page === "dashboard") content = dashboardPage();
  else if (route.page === "study") content = studyPage(route.courseId, route.lesson);
  else content = homePage();
  app.innerHTML = pageShell(route.page, content);
  app.setAttribute("aria-busy", "false");
  const titles = { home: "SP Institute | Professional learning", catalog: "Course catalog | SP Institute", dashboard: "Study dashboard | SP Institute", study: "Study course | SP Institute" };
  document.title = titles[route.page];
  if (route.page === "catalog") renderCatalogResults();
  requestAnimationFrame(() => document.querySelector("#page-title")?.focus({ preventScroll: true }));
}

function closeMenu() {
  const menu = document.querySelector("#primary-nav");
  const button = document.querySelector("[data-action='toggle-menu']");
  menu?.classList.remove("is-open");
  button?.setAttribute("aria-expanded", "false");
  if (button) { button.setAttribute("aria-label", "Open navigation menu"); button.innerHTML = icon("menu"); }
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  const topic = event.target.closest("[data-topic]");
  if (topic) {
    catalogTopic = topic.dataset.topic || "All";
    document.querySelectorAll("[data-topic]").forEach((button) => button.setAttribute("aria-pressed", String(button === topic)));
    renderCatalogResults();
    return;
  }
  if (!action) {
    if (event.target.closest("a[href^='#/']")) closeMenu();
    return;
  }
  if (action.dataset.action === "toggle-menu") {
    const menu = document.querySelector("#primary-nav");
    const isOpen = menu?.classList.toggle("is-open");
    action.setAttribute("aria-expanded", String(isOpen));
    action.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    action.innerHTML = isOpen ? icon("close") : icon("menu");
  }
  if (action.dataset.action === "toggle-complete") {
    const courseId = action.dataset.courseId;
    const lessonIndex = Number(action.dataset.lessonIndex);
    const progress = getProgress();
    const key = `${courseId}:${lessonIndex}`;
    if (progress[key]) delete progress[key]; else progress[key] = true;
    saveProgress(progress);
    render();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "course-search") {
    catalogQuery = event.target.value;
    renderCatalogResults();
  }
});

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#/home";
render();
