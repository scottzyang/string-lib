// string lib functions

function capitalize(str) {
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords(str) {
  return str.split(" ").map(capitalize).join(" ");
}

function capitalizeHeadline(str) {
  const smallWords = [
    "the",
    "in",
    "a",
    "an",
    "and",
    "but",
    "for",
    "at",
    "by",
    "from",
  ];
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !smallWords.includes(word)) {
        return capitalize(word);
      }
      return word;
    })
    .join(" ");
}

function removeExtraSpaces(str) {
  return str.trim().replace(/\s+/g, " ");
}

function kebobCase(str) {
  return removeExtraSpaces(str)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .split(" ")
    .join("-");
}

function snakeCase(str) {
  return removeExtraSpaces(str)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .split(" ")
    .join("_");
}

function camelCase(str) {
  let words = str.split(" ").map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalize(word.toLowerCase());
  });
  return words.join("");
}

function shift(str, num = 1) {
  return str.slice(num) + str.slice(0, num);
}

function makeHashTag(str) {
  return str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map((word) => `#${capitalize(word)}`);
}

function isEmpty(str) {
  return str.trim().length === 0;
}

module.exports = {
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
};

console.log(capitalize("hello world")); // Hello world
console.log(allCaps("hello world")); // HELLO WORLD
console.log(capitalizeWords("do all the things")); // Do All The Things
console.log(capitalizeHeadline("the most foo in bar")); // The Most Foo in Bar
console.log(removeExtraSpaces("   Hello    world!   ")); // Hello world!
console.log(kebobCase("   Hello    world!   ")); // hello-world
console.log(snakeCase("   Hello    world!   ")); // hello_world
console.log(camelCase("Camel Case")); // camelCase
console.log(shift("Hello World")); // ello WorldH
console.log(shift("foo bar", 3)); //  barfoo
console.log(makeHashTag("Amazing bongo drums for sale")); // ['#Amazing', '#Bongo', '#Drums']
console.log(isEmpty("")); // true
console.log(isEmpty("   ")); // true
console.log(isEmpty("Hello")); // false
