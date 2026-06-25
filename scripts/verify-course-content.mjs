import { courses } from "../src/data/courses.js";
import { assertValidCourseCatalog } from "../src/lib/courseValidation.js";

try {
  assertValidCourseCatalog(courses);
  console.log(`Course catalog verified: ${courses.length} courses, ${courses.reduce((total, course) => total + course.lessons.length, 0)} lessons.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
