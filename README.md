# **validatees**

[![Bundle size](https://img.shields.io/bundlephobia/min/validatees/latest?style=for-the-badge&color=3178c6)](https://bundlephobia.com/package/validatees@latest)&nbsp;
![Downloads](https://img.shields.io/npm/dt/validatees?style=for-the-badge)&nbsp;
[![License](https://img.shields.io/npm/l/validatees?style=for-the-badge&color=efb103)](https://github.com/m10rten/validatees/blob/main/LICENSE)&nbsp;
[![Version](https://img.shields.io/npm/v/validatees?style=for-the-badge&color=cb3837&logo=npm)](https://www.npmjs.com/package/validatees)&nbsp;
[![GitHub Repo stars](https://img.shields.io/github/stars/m10rten/validatees?color=E9E9E9&logo=Github&style=for-the-badge)](https://www.github.com/m10rten/validatees)&nbsp;
![GitHub issues](https://img.shields.io/github/issues-raw/m10rten/validatees?label=issues&style=for-the-badge)

Validation package for ES6+, TypeScript and JavaScript(CommonJS and Module) ready.

# Features

- 🚀**Easy to use**: Easy to install in your project.
- ✅**ES6+ && TS**: TypeScript and ES6+ support(JS).
- 🐭**Small footprint**: Less then 5kb package size.
- 📦**No dependencies**: You don't depend on anything else.

# Getting Started

## Installation

To use this package, **install** using `npm`, `yarn` or `pnpm`📥:

```bash
# npm
npm install validatees
# yarn
yarn add validatees
# pnpm
pnpm install validatees
```

## Usage

```js
// ES6+ JavaScript CommonsJs
const validatees = require("validatees");
// TypeScript || ES6+ JavaScript module
import validatees from "validatees";
```

### Types

Type checking can be difficult, but with `validatees` types, it's easy.

**isFalsy**:</br>

Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

```js
const { isFalsy } = require("validatees");
isFalsy(0); // true
isFalsy(1); // false
```

**isFalsyExtended**:</br>

Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).</br>
Also includes Array and object checking.

```js
const { isFalsyExtended } = require("validatees");
isFalsyExtended(1); // false
isFalsyExtended(0); // true
isFalsyExtended([]); // true
isFalsyExtended({}); // true
```

**isTruthy**:</br>

Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```js
const { isTruthy } = require("validatees");
isTruthy(1); // true
isTruthy(0); // false
```

**isTruthyExtended**:</br>

Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
Also includes Array and object checking.

```js
const { isTruthyExtended } = require("validatees");
isTruthyExtended(1); // true
isTruthyExtended(0); // false
isTruthyExtended([]); // false
isTruthyExtended({}); // false
```

**isNullish**:</br>

Check if value is null or undefined.

```js
const { isNullish } = require("validatees");
isNullish(null); // true
isNullish(undefined); // true
isNullish(0); // false
```

**isString**:</br>

Check if value is a string.

```js
const { isString } = require("validatees");
isString("string"); // true
isString(1); // false
```

**isNumber**:</br>

Check if value is a number.

```js
const { isNumber } = require("validatees");
isNumber(1); // true
isNumber(Infinity); // true
isNumber("string"); // false
```

**isBoolean**: </br>

Check if value is a boolean.

```js
const { isBoolean } = require("validatees");
isBoolean(true); // true
isBoolean(false); // true
isBoolean("1"); // false
```

### Matchers

Matchers are functions that check if a value matches a certain pattern or value.

**isSoftMatch**:</br>
Check if two values soft match with each other.

```js
const { isSoftMatch } = require("validatees");
isSoftMatch("string", "STRING"); // true
isSoftMatch("string", "abc"); // false
isSoftMatch(1, 1.0); // true
```

**isDeepMatch**:</br>
Check if two values deep match with each other.

```js
const { isDeepMatch } = require("validatees");
isDeepMatch({ a: 1 }, { a: 1 }); // true
isDeepMatch({ a: 1 }, { a: 2 }); // false
isDeepMatch([1, 2, { a: 3 }], [1, 2, { a: 3 }]); // true

// without the await it will return a promise holding the boolean.
await isDeepMatch(Promise.resolve(1), Promise.resolve(1)); // true
```

# Contributing

Found a bug🦟? or want to suggest a new feature🆕? or just want to help🆘? </br>  
Feel free to open an issue or a pull request.

Contributions are always welcome!🎉

- Fork the project [here](https://github.com/m10rten/validatees/fork).
- Create a new branch like this: `git checkout -b feature/featureName`.
- Commit your changes to your branch: `git commit -m 'Create AwesomeFeature'`⚙️.
- Push your branch: `git push origin feature/featureName`.
- Open a pull request on the `dev` branch [here](https://github.com/m10rten/validatees/pulls)🔃.

📒**Note:** Make sure to add tests for your changes ✅.
