#! /usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const { readFileSync } = require("fs");
const { join } = require("path");
try {
  const packageJson = JSON.parse(readFileSync(join(__dirname, ".", "package.json"), "utf8") || { version: 0 });
  const npmVersion = execSync("npm view validatees version").toString().trim() || 1;
  if (npmVersion > packageJson.version) {
    const split = npmVersion.split(".");
    const pkgSplit = packageJson.version.split(".");
    if (split[0] > pkgSplit[0]) {
      throw new Error(
        `There is a new major version of validatees, please update your validatees to the latest version.`,
      );
    } else if (split[1] > pkgSplit[1]) {
      throw new Error(
        `There is a new minor version of validatees, please update your validatees to the latest version.`,
      );
    } else if (split[2] > pkgSplit[2]) {
      throw new Error(
        `There is a new patch version of validatees, please update your validatees to the latest version.`,
      );
    }
    throw new Error("Please update your version of validatees");
  }
  console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", "Your version of validatees is up to date");
  return process.exit(0);
} catch (error) {
  if (error.message === "Please update your version of validatees") {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
    return process.exit(1);
  } else if (
    error.message === "Cannot find module 'child_process'" ||
    error.message === "Cannot find module 'fs'" ||
    error.message === "Cannot find module 'path'"
  ) {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", "Please run this script with node");
    return process.exit(1);
  } else if (
    error.message === "There is a new major version of validatees, please update your validatees to the latest version."
  ) {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
    return process.exit(1);
  } else if (
    error.message === "There is a new minor version of validatees, please update your validatees to the latest version."
  ) {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
    return process.exit(1);
  } else if (
    error.message === "There is a new patch version of validatees, please update your validatees to the latest version."
  ) {
    console.error("\x1b[1m\x1b[33m%s\x1b[0m", "Warning:", error.message);
    return process.exit(1);
  } else {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
    return process.exit(1);
  }
}
