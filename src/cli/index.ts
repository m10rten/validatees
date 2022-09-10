#! /usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import { default as checkVersion } from "./check-version";
import { default as help } from "./help";
// import { default as version } from "./version"; //TODO
// import { default as exit } from "./exit"; //TODO
// import { default as validate } from "./validate"; //TODO

const args: Array<string> = process.argv.slice(2);

const includes = (args: Array<string>, cmds: string[]): boolean => {
  return cmds.some((c) => args.includes(c));
};

const includesHelp: boolean = includes(args, ["--help", "-help", "--h", "-h"]);

const includesExit: boolean = includes(args, ["--exit", "-exit", "--e", "-e"]);

// const includesVersion: boolean = includes(args, ["--version", "-version", "--v", "-v"]);

const includesCI: boolean = includes(args, ["--ci", "-ci", "--c", "-c"]);

switch (
  args[0] // always switch the first parameter given, which is the main command to run.
) {
  case "--check":
  case "-c":
  case "--c":
  case "-check": {
    let processExit: boolean = false;
    if (true === includesExit) {
      processExit = false;
    } else if (true === includesCI) {
      processExit = true;
    } else if (true === includesHelp) {
      console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextCheckVersion());
      process.exit(0);
    }

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
    const packageJson = require("../../package.json");
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", `Installed version: ${packageJson.version}`);
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
    const packageJson = require("../../package.json");
    console.info(
      "\x1b[1m\x1b[33m%s\x1b[0m",
      "Warning:",
      `'Update' command not yet implemented. Current version: ${packageJson.version}`,
    );
    break;
  }
  default:
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", `Unknown argument: ${args[0]}`);
    process.exit(1); // stops the process, no return needed.
}

process.exit(0); // stops the process, end of cli.
