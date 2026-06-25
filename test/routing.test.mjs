import assert from "node:assert/strict";
import test from "node:test";
import { getDocumentTitle, readRoute } from "../src/lib/routing.js";

test("readRoute recognizes supported top-level pages", () => {
  assert.deepEqual(readRoute("#/home"), { page: "home", courseId: "", lesson: 0 });
  assert.deepEqual(readRoute("#/catalog"), { page: "catalog", courseId: "", lesson: 0 });
  assert.deepEqual(readRoute("#/dashboard"), { page: "dashboard", courseId: "", lesson: 0 });
});

test("readRoute parses a valid course and lesson", () => {
  assert.deepEqual(
    readRoute("#/study/javascript-foundations/2"),
    { page: "study", courseId: "javascript-foundations", lesson: 2 }
  );
});

test("readRoute falls back safely for unknown pages and invalid lesson segments", () => {
  assert.deepEqual(readRoute("#/unknown/course/3"), { page: "home", courseId: "course", lesson: 3 });
  assert.equal(readRoute("#/study/css-layout/-1").lesson, 0);
  assert.equal(readRoute("#/study/css-layout/2.5").lesson, 0);
  assert.equal(readRoute("#/study/css-layout/2extra").lesson, 0);
});

test("getDocumentTitle returns a safe fallback title", () => {
  assert.equal(getDocumentTitle("catalog"), "Course catalog | SP Institute");
  assert.equal(getDocumentTitle("missing"), "SP Institute | Professional learning");
});
