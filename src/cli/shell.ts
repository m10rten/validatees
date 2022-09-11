/* eslint-disable no-console */
import { execSync, spawn } from "child_process";
import repl from "repl";
import { logger } from ".";
import checkVersion from "./check-version";
import help from "./help";

const main = () => {
  logger("Starting shell mode...", "34", "Info");
  checkVersion(false);
  logger("Spawning node shell...", "34", "Info");
  const child = spawn("node");
  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);

  logger("Creating repl...", "34", "Info");
  logger("Setting up validatees functions...", "34", "Info");
  const shell = repl.start({
    prompt: "validatees:$ ",
    useColors: true,
    useGlobal: true,
    input: process.stdin,
    output: process.stdout,
  });

  shell.write(
    `const validatees = require('validatees');Object.keys(validatees).forEach((key) => {global[key] = validatees[key];}); \r\n`,
  );
  console.info("version: ", execSync("cd ../../ && npm view validatees version").toString().trim());
  console.info(
    "\x1b[1m\x1b[32m%s\x1b[0m",
    "Info:",
    `Validatees shell is ready.
      Type 'exit' to exit the shell.
      Type '?help' to get help.`,
  );
  shell.on("line", (line) => {
    if (line === "exit" || line === "quit") {
      logger("Recieved exit command...", "34", "Info");
      shell.close();
    } else if (line === "?help") {
      logger("Showing help...", "34", "Info");
      console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextInShell());
    }
  });
  shell.on("exit", () => {
    logger("Exiting shell...", "34", "Info");
    console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Goodbye!", "Thank you for using validatees!");
    return process.exit(0);
  });
  logger("Shell is ready...", "34", "Info");
  shell.prompt();
};

export default main;
