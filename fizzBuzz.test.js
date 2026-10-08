import { fizzBuzz } from "./fizzBuzz.js";
import assert from "node:assert";
import { test, describe } from "node:test";

describe("division by 3", () => {
  test("3 returns fizz", () => {
    assert.equal(fizzBuzz(3), "fizz");
  });
});

describe("division by 5", () => {
  test("5 returns buzz", () => {
    assert.equal(fizzBuzz(5), "buzz");
  });
});

test("10 returns buzz", () => {
  assert.equal(fizzBuzz(10), "buzz");
});

test("95 returns buzz", () => {
  assert.equal(fizzBuzz(95), "buzz");
});
