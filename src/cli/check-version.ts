/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import { execSync } from "child_process";
import { logger } from ".";
const checkVersion = (processExit: boolean): void => {
  const patchMessage = `There is a new patch version of validatees, please update your validatees to the latest version.`;
  const minorMessage = `There is a new minor version of validatees, please update your validatees to the latest version.`;
  const majorMessage = `There is a new major version of validatees, please update your validatees to the latest version.`;
  let processExitCode: number = 0;
  try {
    logger("Checking for new version of validatees...", "34", "Info");
    const npmVersion: string = execSync("npm view validatees version").toString().trim() || "1.0.0";
    const localVersionJSON = require("../../package.json");
    const localVersion: string = localVersionJSON?.version || "0.0.0";
    if (localVersion === "0.0.0") {
      throw new Error("Local version is 0.0.0");
    }
    const split = npmVersion.split(".");
    const pkgSplit = localVersion.split(".");
    if (split[0] > pkgSplit[0] || split[1] > pkgSplit[1] || split[2] > pkgSplit[2]) {
      logger("New version of validatees is available.", "34", "Info");
      if (split[0] > pkgSplit[0]) {
        throw new Error(majorMessage);
      } else if (split[1] > pkgSplit[1]) {
        throw new Error(minorMessage);
      } else if (split[2] > pkgSplit[2]) {
        throw new Error(patchMessage);
      }
      throw new Error("Please update your version of validatees");
    }
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", "Your version of validatees is up to date.");
    processExitCode = 0;
  } catch (error: any) {
    if (error.message === "Local version is 0.0.0") {
      console.error(
        "\x1b[1m\x1b[31m%s\x1b[0m",
        "Error:",
        "Validatees is not installed. Please run 'npm install validatees' to install it.",
      );
      processExitCode = 1;
    } else if (error.message === "Please update your version of validatees") {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    } else if (
      error.message === "Cannot find module 'child_process'" ||
      error.message === "Cannot find module 'fs'" ||
      error.message === "Cannot find module 'path'"
    ) {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", "Please run this script with node.");
      processExitCode = 1;
    } else if (error.message === majorMessage) {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    } else if (error.message === minorMessage) {
      console.error("\x1b[1m\x1b[33m%s\x1b[0m", "Warning:", error.message);
      processExitCode = 1;
    } else if (error.message === patchMessage) {
      console.error("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", error.message);
      processExitCode = 0;
    } else {
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", error.message);
      processExitCode = 1;
    }
  }
  if (true === processExit) {
    logger("Done executing, exiting...", "34", "Info");
    return process.exit(processExitCode);
  } else {
    logger("Done executing, waiting...", "34", "Info");
  }
};

export default checkVersion;
