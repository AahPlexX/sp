import assert from "node:assert/strict";
import test from "node:test";
import { courses } from "../src/data/courses.js";
import { assertValidCourseCatalog, validateCourseCatalog } from "../src/lib/courseValidation.js";

function makeCourse(overrides = {}) {
  return {
    id: "valid-course",
    area: "Business",
    label: "Strategy",
    title: "Valid course",
    summary: "A complete course record for validation.",
    level: "Foundation",
    lessons: [{ title: "Valid lesson", body: ["A complete lesson paragraph."], note: "A complete lesson note." }],
    ...overrides
  };
}

test("the production course catalog is valid", () => {
  assert.deepEqual(validateCourseCatalog(courses), []);
  assert.doesNotThrow(() => assertValidCourseCatalog(courses));
});

test("the validator reports missing required course data", () => {
  const issues = validateCourseCatalog([{ id: "", area: "Business", lessons: [] }]);

  assert.ok(issues.some((issue) => issue.includes("courses[0].id")));
  assert.ok(issues.some((issue) => issue.includes("courses[0].title")));
  assert.ok(issues.some((issue) => issue.includes("courses[0].lessons")));
});

test("the validator reports duplicate identifiers and unsupported areas", () => {
  const issues = validateCourseCatalog([
    makeCourse(),
    makeCourse({ id: "valid-course", area: "Unapproved" })
  ]);

  assert.ok(issues.some((issue) => issue.includes("duplicates")));
  assert.ok(issues.some((issue) => issue.includes("area must be one of")));
});

test("the validator reports incomplete lesson content", () => {
  const issues = validateCourseCatalog([
    makeCourse({ lessons: [{ title: "", body: [""], note: "" }] })
  ]);

  assert.ok(issues.some((issue) => issue.includes("lessons[0].title")));
  assert.ok(issues.some((issue) => issue.includes("lessons[0].body")));
  assert.ok(issues.some((issue) => issue.includes("lessons[0].note")));
});

test("the assertion includes every validation issue", () => {
  assert.throws(
    () => assertValidCourseCatalog([{ id: "", area: "Business", lessons: [] }]),
    /courses\[0\]\.id[\s\S]*courses\[0\]\.lessons/
  );
});
