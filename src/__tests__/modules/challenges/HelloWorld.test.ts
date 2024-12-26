import { greet } from "../../../modules/challenges/hello-world";

test("greet function", () => {
  expect(greet("World")).toBe("Hello, World!");
});