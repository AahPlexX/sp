import { useEffect, useMemo, useState } from "react";
import { courseAreas, courses } from "./data/courses";

const storageKey = "sp-institute-completed-lessons-v3";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
}

function MenuIcon({ close = false }) {
  return close
    ? <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5 5 19" /></svg>
    : <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>;
}

function BookIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>;
}

function ClockIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

function readRoute() {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const page = ["home", "catalog", "dashboard", "study"].includes(parts[0]) ? parts[0] : "home";
  const lesson = Number.parseInt(parts[2], 10);
  return { page, courseId: parts[1] ?? "", lesson: Number.isInteger(lesson) ? lesson : 0 };
}

function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function writeProgress(value) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch {
    // The page remains usable when storage is disabled or unavailable.
  }
}

function getCourseProgress(course, progress) {
  const completed = course.lessons.reduce((total, _, index) => total + Number(Boolean(progress[`${course.id}:${index}`])), 0);
  return { completed, total: course.lessons.length, percent: Math.round((completed / course.lessons.length) * 100) };
}

function ProgressBar({ course, progress, compact = false }) {
  const current = getCourseProgress(course, progress);
  return <>
    <div className="progress-track" role="progressbar" aria-label={`${course.title} progress`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={current.percent}>
      <span className="progress-value" style={{ width: `${current.percent}%` }} />
    </div>
    <div className="progress-meta">
      <span>{current.completed} of {current.total} lessons complete</span>
      {!compact && <span>{current.percent}%</span>}
    </div>
  </>;
}

function CourseCard({ course, progress }) {
  return <article className="course-card">
    <div className="course-card-topline">
      <span className={`tag tag-${course.area.toLowerCase()}`}>{course.label}</span>
      <span className="course-length">{course.lessons.length} lessons</span>
    </div>
    <h3 className="course-title">{course.title}</h3>
    <p className="course-summary">{course.summary}</p>
    <div className="course-card-footer">
      <span>{course.level}</span>
      <a className="text-button" href={`#/study/${course.id}/0`}>Open course <ArrowIcon /></a>
    </div>
  </article>;
}

function Header({ page, menuOpen, onToggleMenu }) {
  const navItems = [["home", "Home"], ["catalog", "Catalog"], ["dashboard", "Study dashboard"]];
  return <header className="site-header">
    <div className="header-inner">
      <a className="brand" href="#/home" aria-label="SP Institute home"><span className="brand-mark">SP</span><span className="brand-text">SP Institute<small>Professional learning</small></span></a>
      <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Primary navigation">
        {navItems.map(([key, label]) => <a key={key} className="nav-link" href={`#/${key}`} aria-current={page === key ? "page" : undefined}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="identity-chip" href="#/dashboard" aria-label="Open study dashboard"><span className="identity-initials">SP</span><span>Study space</span></a>
        <button className="menu-button" type="button" onClick={onToggleMenu} aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`} aria-controls="primary-nav" aria-expanded={menuOpen}><MenuIcon close={menuOpen} /></button>
      </div>
    </div>
  </header>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><span className="footer-brand">SP Institute</span><span>Read-only professional learning for focused study.</span><nav className="footer-links" aria-label="Footer navigation"><a href="#/catalog">Course catalog</a><a href="#/dashboard">Study dashboard</a></nav></div></footer>;
}

function HomePage({ progress }) {
  const featured = courses.slice(0, 3);
  return <>
    <section className="hero">
      <div className="page-section hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">SP Institute</span>
          <h1 className="display-title" id="page-title" tabIndex="-1">Professional learning that respects your attention.</h1>
          <p className="lede">Read structured courses in business and programming at your own pace. Every course is organized for direct study, with clear sections, practical context, and no distractions competing for your time.</p>
          <div className="button-row"><a className="button button-primary" href="#/catalog">Explore the catalog <ArrowIcon /></a><a className="button button-secondary" href="#/dashboard">Open study dashboard</a></div>
        </div>
        <aside className="hero-panel" aria-label="Study overview">
          <div className="panel-topline"><span>Study workspace</span><span className="status-dot">Available</span></div>
          <div className="continue-card">
            <span className="tag tag-business">Business strategy</span>
            <h2>{courses[0].title}</h2>
            <p>Continue with a structured lesson on turning direction into operating priorities.</p>
            <div style={{ marginTop: "1rem" }}><ProgressBar course={courses[0]} progress={progress} /></div>
            <div className="button-row"><a className="button button-primary button-small" href="#/study/strategy-systems/0">Start reading <ArrowIcon /></a></div>
          </div>
          <div className="panel-stat-grid"><div className="panel-stat"><strong>{courses.length}</strong><span>Available courses</span></div><div className="panel-stat"><strong>2 areas</strong><span>Business and programming</span></div></div>
        </aside>
      </div>
    </section>
    <section className="page-section">
      <div className="trust-row" aria-label="Learning format">{["Read-only learning", "Responsive study layout", "Clear progress controls"].map((item) => <span className="trust-item" key={item}><span className="trust-check">✓</span>{item}</span>)}</div>
      <div className="section-heading mt-section"><div><span className="eyebrow">Start here</span><h2 className="section-title" style={{ marginTop: ".6rem" }}>Courses designed for practical use.</h2><p className="lede">Choose a subject, read one lesson at a time, and return to the point where you left off in this browser.</p></div><a className="text-button" href="#/catalog">View all courses <ArrowIcon /></a></div>
      <div className="course-grid">{featured.map((course) => <CourseCard key={course.id} course={course} progress={progress} />)}</div>
      <div className="metric-grid mt-section" aria-label="Platform capabilities">{[["Focused", "One reading experience, without video or assignment workflows."], ["Responsive", "Layout adapts to phones, tablets, laptops, and larger screens."], ["Expandable", "Courses use one shared data model so the catalog can grow cleanly."]].map(([title, copy]) => <div className="metric" key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div>
      <div className="section-heading mt-section"><div><span className="eyebrow">How it works</span><h2 className="section-title" style={{ marginTop: ".6rem" }}>A calm path through a complex subject.</h2></div></div>
      <div className="path-grid">{[["01", "Choose a course", "Browse by subject area or search for a topic that matches the work you need to do."], ["02", "Read with context", "Move through short, ordered lessons that explain a subject without requiring a live session."], ["03", "Track your place", "Mark a lesson complete and use the dashboard to return to the next piece of reading."]].map(([number, title, copy]) => <article className="path-card" key={number}><span className="path-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
  </>;
}

function CatalogPage({ topic, query, progress, onTopicChange, onQueryChange }) {
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return courses.filter((course) => (topic === "All" || course.area === topic) && (!normalized || `${course.title} ${course.summary} ${course.label} ${course.area}`.toLowerCase().includes(normalized)));
  }, [query, topic]);
  return <>
    <section className="page-hero"><div className="page-hero-inner"><span className="eyebrow">Course catalog</span><h1 className="page-title" id="page-title" tabIndex="-1">Build useful knowledge, one subject at a time.</h1><p className="lede">Browse focused reading courses for business work and modern software development. The catalog is structured to accept new courses without changing the study experience.</p></div></section>
    <section className="page-section"><div className="catalog-layout">
      <aside className="catalog-filter" aria-label="Course filters">
        <div><label className="filter-label" htmlFor="course-search">Search courses</label><div className="search-wrap"><span className="search-icon"><SearchIcon /></span><input className="search-input" id="course-search" type="search" placeholder="Search a subject" autoComplete="off" value={query} onChange={(event) => onQueryChange(event.target.value)} /></div></div>
        <div className="filter-group"><span className="filter-label">Subject area</span><div className="filter-options" role="group" aria-label="Filter courses by subject area">{courseAreas.map((area) => { const count = area === "All" ? courses.length : courses.filter((course) => course.area === area).length; return <button className="filter-option" type="button" key={area} onClick={() => onTopicChange(area)} aria-pressed={topic === area}><span>{area === "All" ? "All courses" : area}</span><span className="filter-count">{count}</span></button>; })}</div></div>
      </aside>
      <div><div className="catalog-results-header"><h2 className="section-title">Available courses</h2><span className="result-count">{matches.length} {matches.length === 1 ? "course" : "courses"}</span></div>{matches.length ? <div className="catalog-course-grid">{matches.map((course) => <CourseCard key={course.id} course={course} progress={progress} />)}</div> : <div className="empty-state"><div><h2>No courses match that search.</h2><p>Try a different word or choose another subject area.</p></div></div>}</div>
    </div></section>
  </>;
}

function DashboardPage({ progress }) {
  const totals = courses.reduce((result, course) => { const current = getCourseProgress(course, progress); return { complete: result.complete + current.completed, lessons: result.lessons + current.total }; }, { complete: 0, lessons: 0 });
  return <>
    <section className="page-hero"><div className="page-hero-inner"><span className="eyebrow">Study dashboard</span><h1 className="page-title" id="page-title" tabIndex="-1">Your reading, arranged for a clear return.</h1><p className="lede">Open any course, mark lessons when you finish reading, and use this space to see your current progress.</p></div></section>
    <section className="page-section"><div className="dashboard-top"><div><h2 className="section-title">Continue studying</h2><p className="lede" style={{ marginTop: ".55rem" }}>Your current browser has {totals.complete} completed of {totals.lessons} available lessons.</p></div><a className="button button-secondary" href="#/catalog">Browse catalog <ArrowIcon /></a></div>
      <div className="dashboard-grid"><section className="dashboard-panel" aria-labelledby="active-courses-title"><div className="panel-heading"><h2 id="active-courses-title">Courses in your study space</h2><span className="tag">Read only</span></div><div className="learning-list">{courses.slice(0, 4).map((course) => { const current = getCourseProgress(course, progress); const nextLesson = Math.min(current.completed, course.lessons.length - 1); return <article className="learning-row" key={course.id}><div><h3>{course.title}</h3><p>{course.area} · {course.lessons.length} lessons</p><ProgressBar course={course} progress={progress} compact /></div><a className="button button-secondary button-small" href={`#/study/${course.id}/${nextLesson}`}>{current.completed ? "Continue" : "Start"} <ArrowIcon /></a></article>; })}</div></section>
      <aside className="dashboard-aside"><section className="dashboard-aside-card"><h2>Study format</h2><p>Courses are designed for reading. This site does not use video, teacher-led sessions, graded assignments, social groups, or leaderboard mechanics.</p><div className="availability-list">{["One consistent study interface", "Native keyboard controls", "Responsive reading width"].map((item) => <span className="availability-item" key={item}>{item}</span>)}</div></section><section className="dashboard-aside-card"><h2>Progress storage</h2><p>This GitHub Pages release stores lesson completion in the browser that is currently in use. A connected account service is required before progress can be shared between devices.</p></section></aside></div>
    </section>
  </>;
}

function StudyPage({ courseId, requestedLesson, progress, onToggleComplete }) {
  const course = courses.find((item) => item.id === courseId);
  if (!course) return <section className="study-not-found"><h1 id="page-title" tabIndex="-1">That course is not available.</h1><p>The link may be outdated, or the course has not been added to this catalog.</p><div className="button-row" style={{ justifyContent: "center" }}><a className="button button-primary" href="#/catalog">Return to catalog</a></div></section>;
  const lessonIndex = requestedLesson >= 0 && requestedLesson < course.lessons.length ? requestedLesson : 0;
  const lesson = course.lessons[lessonIndex];
  const completed = Boolean(progress[`${course.id}:${lessonIndex}`]);
  return <div className="study-layout">
    <aside className="study-sidebar" aria-label="Course lessons"><div className="study-course-label"><span className={`tag tag-${course.area.toLowerCase()}`}>{course.label}</span><h2>{course.title}</h2></div><nav className="lesson-nav" aria-label="Lesson list">{course.lessons.map((item, index) => <a className={`lesson-nav-button${progress[`${course.id}:${index}`] ? " is-complete" : ""}`} href={`#/study/${course.id}/${index}`} key={item.title} aria-current={index === lessonIndex ? "step" : undefined}><span className="lesson-index">{progress[`${course.id}:${index}`] ? "✓" : index + 1}</span><span>{item.title}</span></a>)}</nav></aside>
    <article className="study-content"><p className="study-crumb"><a href="#/catalog">Catalog</a><span aria-hidden="true">/</span><span>{course.label}</span></p><h1 className="study-title" id="page-title" tabIndex="-1">{course.title}</h1><p className="study-description">{course.summary}</p><div className="study-meta"><span><BookIcon /> Lesson {lessonIndex + 1} of {course.lessons.length}</span><span><ClockIcon /> Read at your pace</span></div><div className="lesson-paper"><p className="lesson-overline">Lesson {lessonIndex + 1}</p><h2>{lesson.title}</h2><div className="lesson-body">{lesson.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><aside className="reading-note"><strong>Reading note</strong><p>{lesson.note}</p></aside><div className="lesson-actions"><span className="completion-status">{completed ? <><strong>Completed</strong> in this browser</> : "Mark this lesson when you finish reading."}</span><div className="button-row" style={{ marginTop: 0 }}>{lessonIndex > 0 && <a className="button button-secondary button-small" href={`#/study/${course.id}/${lessonIndex - 1}`}>Previous</a>}<button className={`button ${completed ? "button-secondary" : "button-primary"} button-small`} type="button" onClick={() => onToggleComplete(course.id, lessonIndex)}>{completed ? "Mark incomplete" : "Mark complete"}</button>{lessonIndex < course.lessons.length - 1 && <a className="button button-primary button-small" href={`#/study/${course.id}/${lessonIndex + 1}`}>Next lesson <ArrowIcon /></a>}</div></div></div></article>
  </div>;
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [progress, setProgress] = useState(readProgress);
  const [topic, setTopic] = useState("All");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) window.location.hash = "#/home";
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.title = { home: "SP Institute | Professional learning", catalog: "Course catalog | SP Institute", dashboard: "Study dashboard | SP Institute", study: "Study course | SP Institute" }[route.page];
    const frame = window.requestAnimationFrame(() => document.querySelector("#page-title")?.focus({ preventScroll: true }));
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  function toggleComplete(courseId, lessonIndex) {
    setProgress((current) => {
      const next = { ...current };
      const key = `${courseId}:${lessonIndex}`;
      if (next[key]) delete next[key]; else next[key] = true;
      writeProgress(next);
      return next;
    });
  }

  let page;
  if (route.page === "catalog") page = <CatalogPage topic={topic} query={query} progress={progress} onTopicChange={setTopic} onQueryChange={setQuery} />;
  else if (route.page === "dashboard") page = <DashboardPage progress={progress} />;
  else if (route.page === "study") page = <StudyPage courseId={route.courseId} requestedLesson={route.lesson} progress={progress} onToggleComplete={toggleComplete} />;
  else page = <HomePage progress={progress} />;

  return <div className="site-shell"><Header page={route.page} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} /><main className="page-main" id="main-content">{page}</main><Footer /></div>;
}
