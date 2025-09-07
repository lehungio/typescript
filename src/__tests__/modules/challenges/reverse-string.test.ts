import { describe, it, expect, xit } from "@jest/globals";
import { reverse } from "../../../modules/challenges/reverse-string";

describe("Reverse String", () => {
  it("an empty string", () => {
    const expected = "";
    expect(reverse("")).toEqual(expected);
  });

  it("a word", () => {
    const expected = "tobor";
    expect(reverse("robot")).toEqual(expected);
  });

  it("a capitalized word", () => {
    const expected = "nemaR";
    expect(reverse("Ramen")).toEqual(expected);
  });

  it("a sentence with punctuation", () => {
    const expected = `!yrgnuh m'I`;
    expect(reverse(`I'm hungry!`)).toEqual(expected);
  });

  it("a palindrome", () => {
    const expected = "racecar";
    expect(reverse("racecar")).toEqual(expected);
  });
});

describe("Reverse String - Extra tests", () => {
  it("namespace lehungio", () => {
    const expected = "oignuhel";
    expect(reverse("lehungio")).toEqual(expected);
  });
});
