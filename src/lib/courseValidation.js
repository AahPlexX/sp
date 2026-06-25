const allowedAreas = new Set(["Business", "Programming"]);
const requiredCourseFields = ["id", "area", "label", "title", "summary", "level"];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateCourseCatalog(catalog) {
  const issues = [];

  if (!Array.isArray(catalog)) {
    return ["Course catalog must be an array."];
  }

  if (catalog.length === 0) {
    issues.push("Course catalog must contain at least one course.");
  }

  const courseIds = new Set();

  catalog.forEach((course, courseIndex) => {
    const path = `courses[${courseIndex}]`;

    if (!course || typeof course !== "object" || Array.isArray(course)) {
      issues.push(`${path} must be an object.`);
      return;
    }

    requiredCourseFields.forEach((field) => {
      if (!isNonEmptyString(course[field])) {
        issues.push(`${path}.${field} must be a non-empty string.`);
      }
    });

    if (isNonEmptyString(course.id)) {
      if (courseIds.has(course.id)) {
        issues.push(`${path}.id duplicates "${course.id}".`);
      }
      courseIds.add(course.id);
    }

    if (isNonEmptyString(course.area) && !allowedAreas.has(course.area)) {
      issues.push(`${path}.area must be one of: ${[...allowedAreas].join(", ")}.`);
    }

    if (!Array.isArray(course.lessons) || course.lessons.length === 0) {
      issues.push(`${path}.lessons must be a non-empty array.`);
      return;
    }

    course.lessons.forEach((lesson, lessonIndex) => {
      const lessonPath = `${path}.lessons[${lessonIndex}]`;

      if (!lesson || typeof lesson !== "object" || Array.isArray(lesson)) {
        issues.push(`${lessonPath} must be an object.`);
        return;
      }

      if (!isNonEmptyString(lesson.title)) {
        issues.push(`${lessonPath}.title must be a non-empty string.`);
      }

      if (!Array.isArray(lesson.body) || lesson.body.length === 0 || lesson.body.some((paragraph) => !isNonEmptyString(paragraph))) {
        issues.push(`${lessonPath}.body must be a non-empty array of non-empty strings.`);
      }

      if (!isNonEmptyString(lesson.note)) {
        issues.push(`${lessonPath}.note must be a non-empty string.`);
      }
    });
  });

  return issues;
}

export function assertValidCourseCatalog(catalog) {
  const issues = validateCourseCatalog(catalog);

  if (issues.length > 0) {
    throw new Error(`Course catalog validation failed:\n- ${issues.join("\n- ")}`);
  }
}
