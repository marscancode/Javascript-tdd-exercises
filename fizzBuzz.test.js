import { fizzBuzz } from "./fizzBuzz.js";
import assert from "node:assert";
import { test, describe } from "node:test";

describe("division by 3", () => {
  test("3 returns fizz", () => {
    assert.equal(fizzBuzz(3), "fizz");
  });
});
