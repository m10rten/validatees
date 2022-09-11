/* eslint-disable no-console */
import { execSync, spawn } from "child_process";
import repl from "repl";
import checkVersion from "./check-version";
import help from "./help";

const main = () => {
  checkVersion(false);
  const child = spawn("node");
  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
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
      shell.close();
    } else if (line === "?help") {
      console.info("\x1b[1m\x1b[32m%s\x1b[0m", "Info:", help.getHelpTextInShell());
    }
  });
  shell.on("exit", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
  shell.prompt();
};

export default main;
