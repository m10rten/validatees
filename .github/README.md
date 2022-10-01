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
- 🐭**Small footprint**: With less then 20kb, you won't even notice.
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

To check if you have the **latest version**, run using `npx`✅:

```bash
# npx
npx validatees-cli --check
```

## Usage

```js
// ES6+ JavaScript CommonsJs
const validatees = require("validatees");
// TypeScript || ES6+ JavaScript module
import validatees from "validatees";
```

### Documentation

- [VListener](#vlistener)
  - [parameters](#parameters)
  - [options](#options-vlistener)
- [CLI](#cli)
  - [installation](#installation-cli)
  - [usage](#usage-cli)
  - [options](#options-cli)
- [types](#types)
  - [isFalsy](#isfalsy)
  - [isFalsyExtended](#isfalsyextended)
  - [isTruthy](#istruthy)
  - [isTruthyExtended](#istruthyextended)
  - [isString](#isstring)
  - [isNumber](#isnumber)
  - [isBoolean](#isboolean-)
- [matchers](#matchers)
  - [isValidEmail](#isvalidemail)
  - [isValidPassword](#isvalidpassword)
    - [options](#options-isvalidpassword)
  - [isValidUrl](#isvalidurl)
  - [isUnique](#isunique)
  - [isSoftMatch](#issoftmatch)
  - [isDeepMatch](#isdeepmatch)

### VListener

Adding validation over your array before your program starts.

#### **parameters**:

- `array`: array to validate.
- `callback`: function to validate each item in the array, must return boolean, can only take 1 parameter(for now!).  
  Use validatees `isTruthy` or `isFalsy` for example.

#### **options-vlistener**:

- `strict`: `boolean`, default: `false`, strict mode; skip push if validation fails in 1 or more items.
- `condition`: `boolean`, default: `true`, condition to validate; check if callback with `condition` is met.

#### **functions**:

- `register`: register listeners for given arrays.
- `remove`: remove listeners for given arrays.

```js
const { VListener } = require("validatees");

const vListener = new VListener();
const arr1 = [];
const arr2 = [{ a: 1 }, { b: 2 }]; // items already added will not be validated.

const customCallback = (value) => {
  ...
}; // create your own callback

const customCallbackWithDefaultValues = (value, checkOnThis = {id:1}) => {
  ...
}; // create your own callback with default values to check against

vListener.register([
  { array: arr1, callback: isTruthy, options: { strict: true } },
  { array: arr2, callback: isFalsyExtended, options: { condition: false } },
  { array: arr2, callback: [isTruthy, customCallback, customCallbackWithDefaultValues], options: { strict: true } },
]);

arr1.push(1); // should be pushed, [1]
arr2.push({ c: 3 }, { d: 4 }, null); // should not be pushed, strict mode is on, [{ a: 1 }, { b: 2 }]
arr1.push(0); // should not be pushed, [1]
arr2.push({}); // should not be pushed, [{ a: 1 }, { b: 2 }]

vListener.remove([{ array: arr1 }]);
arr1.push(0); // can now be pushed again, [1, 0]

vListener.remove([{ array: arr2 }]);
arr2.push({}); // can now be pushed again, [{ a: 1 }, { b: 2 }, {}]
```

### CLI

#### **installation-cli**:

To use the CLI, you can install it globally using `npm` or `yarn`:

```bash
# npm
npm install -g validatees
# yarn
yarn global add validatees
```

#### **usage-cli**:

To use the CLI, run `validatees-cli` in your terminal:

```bash
# npx
npx validatees-cli <args>
# npm & yarn
validatees-cli <args>
```

#### **options-cli**:

- `--help, -help, --h, -h`: show help. </br>
  `validatees-cli --check --help` or `validatees-cli -h` or `validatees-cli --h`
  - Can be used after each of the following flags to show help for that flag.
  - Or can be used to display all the flags and their description.
- `--version, -version, --v, -v`: show the current installed version.
- `--check, -check, --c, -c`: check if the installed version is up to date with the latest version.
- `--exit, -exit, --e, -e`: exit the process after the command execution, default: `false`.
- `--verbose, -verbose, --vb, -vb`: show more information, default: `false`.
- `--ci, -ci`: run in CI mode.
- `--shell, -shell, --s, -s`: open the custom shell to try out the functions.
<!-- - `--update, -update, --u, -u`: update to the latest version. -->

### Types

Type checking can be difficult, but with `validatees` types, it's easy.

#### **isFalsy**:

Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

```js
const { isFalsy } = require("validatees");
isFalsy(0); // true
isFalsy(1); // false
```

#### **isFalsyExtended**:

Made from ['Falsy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).</br>
Also includes Array and object checking.

```js
const { isFalsyExtended } = require("validatees");
isFalsyExtended(1); // false
isFalsyExtended(0); // true
isFalsyExtended([]); // true
isFalsyExtended({}); // true
```

#### **isTruthy**:

Everything not falsy is truthy. </br>
Made from ['Truthy MDN defenition'](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```js
const { isTruthy } = require("validatees");
isTruthy(1); // true
isTruthy(0); // false
```

#### **isTruthyExtended**:

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

#### **isNullish**:

Check if value is null or undefined.

```js
const { isNullish } = require("validatees");
isNullish(null); // true
isNullish(undefined); // true
isNullish(0); // false
```

#### **isString**:

Check if value is a string.

```js
const { isString } = require("validatees");
isString("string"); // true
isString(1); // false
```

#### **isNumber**:

Check if value is a number.

```js
const { isNumber } = require("validatees");
isNumber(1); // true
isNumber(Infinity); // true
isNumber("string"); // false
```

#### **isBoolean**:

Check if value is a boolean.

```js
const { isBoolean } = require("validatees");
isBoolean(true); // true
isBoolean(false); // true
isBoolean("1"); // false
```

#### **isDate**:

Check if value is a date.

```js
const { isDate } = require("validatees");
isDate(new Date()); // true
isDate("1"); // false
```

#### **isRegExp**:

Check if value is a regular expression.

```js
const { isRegExp } = require("validatees");
isRegExp(/test/); // true
isRegExp(new RegExp("test")); // true
isRegExp("1"); // false
```

#### **isExtendable**:

Check if value is extendable for modification.

```js
const { isExtendable } = require("validatees");
isExtendable({}); // true
isExtendable([]); // true

const prevent = {};
Object.preventExtensions(prevent);
isExtendable(obj); // false

const sealed = {};
Object.seal(sealed);
isExtendable(sealed); // false

const frozen = {};
Object.freeze(frozen);
isExtendable(frozen); // false

const frozenArray = [];
Object.freeze(frozenArray);
isExtendable(frozenArray); // false

isExtendable(1 /**anything else then object or array */); // throws error
```

### Matchers

Matchers are functions that check if a value matches a certain pattern or value.

#### **isUnique**:

Check if value is unique in array or object(key mostly).

```js
const { isUnique } = require("validatees");
isUnique([1, 2, 3, 4], 1); // false
isUnique([1, 2, 3, 4], { a: 1 }); // throws error
isUnique({ a: 1, b: 2 }, { a: 1 }); // false
isUnique({ a: 1, b: 2 }, { c: 1 }); // true
```

#### **isSoftMatch**:

Check if two values soft match with each other.

```js
const { isSoftMatch } = require("validatees");
isSoftMatch("string", "STRING"); // true
isSoftMatch("string", "abc"); // false
isSoftMatch(1, 1.0); // true
```

#### **isDeepMatch**:

Check if two values deep match with each other.

```js
const { isDeepMatch } = require("validatees");
isDeepMatch({ a: 1 }, { a: 1 }); // true
isDeepMatch({ a: 1 }, { a: 2 }); // false
isDeepMatch([1, 2, { a: 3 }], [1, 2, { a: 3 }]); // true

// without the await it will return a promise holding the boolean.
await isDeepMatch(Promise.resolve(1), Promise.resolve(1)); // true
```

#### **isValidEmail**:

Check if value is a valid email.

```js
const { isValidEmail } = require("validatees");
isValidEmail("test@test.test"); // true
isValidEmail(""); // false
isValidEmail("test@test"); // false
isValidEmail("test@test.t"); // false
isValidEmail(123); // throws error
```

#### **isValidPassword**:

Check if value is a valid password.

##### **options-isvalidpassword**:

- `minLength`: number, default `8`
- `maxLength`: number, default `32`
- `numbers`: number, default `1`
- `specialChars`: number, default `1`

```js
const { isValidPassword } = require("validatees");
isValidPassword("test"); // false
isValidPassword("te!1", { minLength: 4 }); // true
isValidPassword(123); // throws error
isValidPassword("t", { minLength: 1, numbers: 0, specialChars: 0 }); // true
```

#### **isValidUrl**:

Check if value is a valid url.

> IPV4 and IPV6 are not supported.

```js
const { isValidUrl } = require("validatees");
isValidUrl("https://google.com"); // true
isValidUrl("google.com"); // true
isValidUrl("google"); // false
isValidUrl(123); // throws error
```

#### **isValidDate**:

Check if value is a valid date.
This function takes any input and will parse it to a Date, `-1` and `1` will work because they are valid dates.

```js
const { isValidDate } = require("validatees");
isValidDate(new Date()); // true
isValidDate("1"); //true: because it will be parsed to a date starting from 1970.
isValidDate(-1); //true : because it will be parsed to a date starting from 1970, moving backwards.
isValidDate("string"); // false
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
