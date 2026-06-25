const storageKey = "sp-institute-completed-lessons-v3";

export function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

export function getCourseProgress(course, progress) {
  const completed = course.lessons.reduce(
    (total, _, index) => total + Number(Boolean(progress[`${course.id}:${index}`])),
    0
  );

  return {
    completed,
    total: course.lessons.length,
    percent: Math.round((completed / course.lessons.length) * 100)
  };
}

export function toggleLessonProgress(progress, courseId, lessonIndex) {
  const next = { ...progress };
  const key = `${courseId}:${lessonIndex}`;

  if (next[key]) {
    delete next[key];
  } else {
    next[key] = true;
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(next));
  } catch {
    // The study view remains usable if browser storage is unavailable.
  }

  return next;
}
