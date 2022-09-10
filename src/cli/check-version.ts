#! /usr/bin/env node
/* eslint-disable no-console */

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

const checkVersion = (processExit: boolean = false): void => {
  let processExitCode: number = 0;
  try {
    const packageJson: { version: number } = JSON.parse(
      readFileSync(join(__dirname, "..", "..", "package.json"), "utf8") || "{ version: 0.0.1 }",
    );
    const npmVersion: string = execSync("npm view validatees version").toString().trim() || "1.0.0";
    const strPackageVersion: string = packageJson.version.toString();
    const numPackageVersion: number = Number(packageJson.version);
    const numNpmVersion: number = Number(npmVersion);
    if (numNpmVersion > numPackageVersion) {
      const split = npmVersion.split(".");
      const pkgSplit = strPackageVersion.split(".");
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
    processExitCode = 0;
  } catch (error: any) {
    if (error.message === "Please update your version of validatees") {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    } else if (
      error.message === "Cannot find module 'child_process'" ||
      error.message === "Cannot find module 'fs'" ||
      error.message === "Cannot find module 'path'"
    ) {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", "Please run this script with node");
      processExitCode = 1;
    } else if (
      error.message ===
      "There is a new major version of validatees, please update your validatees to the latest version."
    ) {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    } else if (
      error.message ===
      "There is a new minor version of validatees, please update your validatees to the latest version."
    ) {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    } else if (
      error.message ===
      "There is a new patch version of validatees, please update your validatees to the latest version."
    ) {
      console.error("\x1b[1m\x1b[33m%s\x1b[0m", "Warning:", error.message);
      processExitCode = 1;
    } else {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    }
  }
  if (true === processExit) {
    return process.exit(processExitCode);
  }
};

export default checkVersion;
