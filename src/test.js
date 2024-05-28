const {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
} = require("./index");

test("capitalize", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("allCaps", () => {
  expect(allCaps("hello world")).toBe("HELLO WORLD");
});

test("capitalizeWords", () => {
  expect(capitalizeWords("do all the things")).toBe("Do All The Things");
});

test("capitalizeHeadline", () => {
  expect(capitalizeHeadline("the most foo in bar")).toBe("The Most Foo in Bar");
});

test("removeExtraSpaces", () => {
  expect(removeExtraSpaces("   Hello    world!   ")).toBe("Hello world!");
});

test("kebobCase", () => {
  expect(kebobCase("   Hello    world!   ")).toBe("hello-world");
});

test("snakeCase", () => {
  expect(snakeCase("   Hello    world!   ")).toBe("hello_world");
});

test("camelCase", () => {
  expect(camelCase("Camel Case")).toBe("camelCase");
});

test("shift", () => {
  expect(shift("Hello World")).toBe("ello WorldH");
  expect(shift("foo bar", 3)).toBe(" barfoo");
});

test("makeHashTag", () => {
  expect(makeHashTag("Amazing bongo drums for sale")).toEqual([
    "#Amazing",
    "#Bongo",
    "#Drums",
  ]);
});

test("isEmpty", () => {
  expect(isEmpty("")).toBe(true);
  expect(isEmpty("   ")).toBe(true);
  expect(isEmpty("Hello")).toBe(false);
});
