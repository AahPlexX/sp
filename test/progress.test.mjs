import assert from "node:assert/strict";
import test from "node:test";
import { getCourseProgress, readProgress, toggleLessonProgress } from "../src/lib/progress.js";

const storageKey = "sp-institute-completed-lessons-v3";

function withStorage(initialValue, callback) {
  const originalDescriptor = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  const values = new Map([[storageKey, initialValue]]);

  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem(key) {
        return values.get(key) ?? null;
      },
      setItem(key, value) {
        values.set(key, value);
      }
    }
  });

  try {
    return callback(values);
  } finally {
    if (originalDescriptor) {
      Object.defineProperty(globalThis, "localStorage", originalDescriptor);
    } else {
      delete globalThis.localStorage;
    }
  }
}

const sampleCourse = {
  id: "sample-course",
  lessons: [{}, {}, {}]
};

test("readProgress restores only an object-shaped stored value", () => {
  withStorage(JSON.stringify({ "sample-course:0": true }), () => {
    assert.deepEqual(readProgress(), { "sample-course:0": true });
  });

  withStorage("[]", () => {
    assert.deepEqual(readProgress(), {});
  });

  withStorage("not-json", () => {
    assert.deepEqual(readProgress(), {});
  });
});

test("toggleLessonProgress persists without mutating the prior state", () => {
  withStorage("{}", (values) => {
    const previous = { "sample-course:0": true };
    const completed = toggleLessonProgress(previous, "sample-course", 1);

    assert.deepEqual(previous, { "sample-course:0": true });
    assert.deepEqual(completed, { "sample-course:0": true, "sample-course:1": true });
    assert.deepEqual(JSON.parse(values.get(storageKey)), completed);

    const reopened = toggleLessonProgress(completed, "sample-course", 1);
    assert.deepEqual(reopened, { "sample-course:0": true });
  });
});

test("getCourseProgress reports completed lessons and percentage", () => {
  assert.deepEqual(
    getCourseProgress(sampleCourse, { "sample-course:0": true, "sample-course:2": true }),
    { completed: 2, total: 3, percent: 67 }
  );

  assert.deepEqual(
    getCourseProgress(sampleCourse, {}),
    { completed: 0, total: 3, percent: 0 }
  );
});
