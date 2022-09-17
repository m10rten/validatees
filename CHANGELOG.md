## 0.8.2

- Fixed the CI pipeline checks so version can never be the same.

## 0.8.1

- Reverted the tsconfig.json to decrease file size.

# 0.8.0

- Fix incorrectly JS file while being TS file, fixed with #! ts-node.
- Added callbacks for the v-listener class.
- Added `isRegExp` and `isDate` to the 'core'(soon to be) module.
- Updated the documentation accordingly.
- Updated the dev dependencies.

## 0.7.5

- Added verbose option to CLI to print out the full stack trace of actions/errors.

## 0.7.4

- Fix where check version would check on dependencies instead version in the validatees package.json, while it cannot install itself.

## 0.7.3

- Fix where version check was not working correctly.
- Removed uglify-files.js as it was not being used.
- A shell environment is now available to try out the built in functions.
- Updated the check-version to check on the dependencies only.

## 0.7.2

- Fix where `-c -h` would run `--check` instead of `help` for the check command.
- Updated documentation regarding the CLI.
- Now displays the help message when no command is provided instaed of throwing an error.

## 0.7.1

- Fix where version-check is not pushed to NPM due to being in `.npmignore`.

# 0.7.0

- You are now able to run CLI commands using npx.
- Learned a bit about how to use `npx` and how it relates to the package itself.
- Updated the docs accordingly.
- Updated the devDependencies to the latest versions.
- CLI: Added a `--version` flag to the CLI.
- CLI: Added a `--help` flag to the CLI.
- CLI: Added a `--exit` flag to the CLI.
- CLI: Added a `--check` flag to the CLI.

## 0.6.7

- Commit to try to fix `npx validatees-version-check`.
- Remove the uglify since it's not very effective.

## 0.6.6

- Patched the missing export of isValidEmail function.

## 0.6.5

- Made check-version file for checking the version of the package within the CI.
- Uglify function to reduce package size.
- Made some functions easier to use with typescript.
  - TS compiler will not complain when checking isNullish or isFalsy anymore.

## 0.6.4

- Updated the CI files to make use of the correct order, no publish when the tests, lint or build fail.

## 0.6.3

- Updated the readme to display seperately for npm and github.

## 0.6.2

- Patched index file to include `isValidDate` function.

## 0.6.1

- Patched index files to export all functions.

# 0.6.0

- Added `isValidUrl` function.

# 0.5.0

- Added `isValidEmail` function.
- Added `isValidPassword` function.
- Updated docs to navigate in the readme.

# 0.4.0

Due to many updates in previous versions, we skipped 0.4.0 and went straight to 0.5.0.

# 0.3.0

- Added `isUnique` function.
- Added `isExtendable` function.
- Updated documentation accordingly.

# 0.2.0

Due to many updates in previes minor version, we skipped 0.2.0 and went straight to 0.3.0.

## 0.1.2

- Added `isBoolean` function.
- Added `isDate` function.
- Added VListener class validator.

## 0.1.12

- Added `isDeepMatch` function.
- Updated documentation.

# 0.1.0

## Initial release

- Added `isTruthy` function.
- Added `isTruthyExtended` function.
- Added `isNullish` function.
- Added `isString` function.
- Added `isNumber` function.
- Added `isFalsy` function.
- Added `isFalsyExtended` function.
- Added `isSoftMatch` function.
