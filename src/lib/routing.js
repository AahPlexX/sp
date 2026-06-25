const validPages = new Set(["home", "catalog", "dashboard", "study"]);

const documentTitles = {
  home: "SP Institute | Professional learning",
  catalog: "Course catalog | SP Institute",
  dashboard: "Study dashboard | SP Institute",
  study: "Study course | SP Institute"
};

export function readRoute(hash = window.location.hash) {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const page = validPages.has(parts[0]) ? parts[0] : "home";
  const lesson = Number(parts[2]);

  return {
    page,
    courseId: parts[1] ?? "",
    lesson: Number.isSafeInteger(lesson) && lesson >= 0 ? lesson : 0
  };
}

export function getDocumentTitle(page) {
  return documentTitles[page] ?? documentTitles.home;
}
