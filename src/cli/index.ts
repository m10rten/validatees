#! /usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

import { default as isFalsy } from "../lib/types/isFalsy";
import { default as checkVersion } from "./check-version";
import { default as help } from "./help";
import { default as shell } from "./shell";

const args: Array<string> = process.argv.slice(2);

const includes = (args: Array<string>, cmds: string[]): boolean => {
  return cmds.some((c) => args.includes(c));
};

const includesHelp: boolean = includes(args, ["--help", "-help", "--h", "-h"]);
const includesExit: boolean = includes(args, ["--exit", "-exit", "--e", "-e"]);
const includesCI: boolean = includes(args, ["--ci", "-ci"]);
const includesShell: boolean = includes(args, ["--shell", "-shell", "--s", "-s"]);
const includesVerbose: boolean = includes(args, ["--verbose", "-verbose", "--vb", "-vb"]);

export const logger = (msg: string, color: string, tag: string): void => {
  if (includesVerbose) {
    console.info(`\x1b[1m\x1b[${color}m%s\x1b[0m`, `${tag}:`, msg);
  }
};

if (true === includesShell && args[0] !== "--help" && args[0] !== "-help" && args[0] !== "--h" && args[0] !== "-h") {
  if (true === includesHelp) {
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextShell());
    process.exit(0);
  }
  logger("Starting shell mode...", "34", "Info");
  shell();
} else {
  switch (
    args[0] // always switch the first parameter given, which is the main command to run.
  ) {
    case "--check":
    case "-c":
    case "--c":
    case "-check": {
      let processExit: boolean = false;
      if (true === includesHelp) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextCheckVersion());
        process.exit(0);
      } else if (true === includesExit) {
        processExit = true;
      }
      if (true === includesCI) {
        processExit = true;
      }

      logger("Staring check version...", "34", "Info");
      checkVersion(processExit);
      break;
    }
    case "--help":
    case "-help":
    case "--h":
    case "-h": {
      if (true === includesExit) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextExit());
        process.exit(0);
      } else if (true === includesCI) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextCI());
        process.exit(0);
      } else if (true === includesShell) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextShell());
        process.exit(0);
      } else if (true === includesVerbose) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextVerbose());
        process.exit(0);
      }
      console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getGlobalHelpText());
      break;
    }
    case "--version":
    case "-version":
    case "--v":
    case "-v": {
      if (true === includesHelp) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextVersion());
        process.exit(0);
      }
      logger("Getting installed version...", "34", "Info");
      const packageJson = require("../../package.json");
      console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", `Installed version: ${packageJson.version}`);
      logger("Done getting installed version.", "34", "Info");
      break;
    }
    case "--update":
    case "-update":
    case "--u":
    case "-u": {
      if (true === includesHelp) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextUpdate());
        process.exit(0);
      }
      logger("Starting update...", "34", "Info");
      const packageJson = require("../../package.json");
      console.info(
        "\x1b[1m\x1b[33m%s\x1b[0m",
        "Warning:",
        `'Update' command not yet implemented. Current version: ${packageJson.version}`,
      );
      logger("Done updating", "34", "Info");
      break;
    }
    default:
      if (isFalsy(args[0])) {
        console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getGlobalHelpText());
        process.exit(0);
      }
      console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", `Unknown argument: ${args[0]}`);
      process.exit(1); // stops the process, no return needed.
  }

  process.exit(0); // stops the process, end of cli.
} // don't stop the process, shell mode.
