import { default as checkVersion } from "./check-version";

const args: Array<string> = process.argv.slice(2);

switch (args[0]) {
  case "--check":
  case "-c":
  case "--c": {
    let processExit: boolean = false;
    if ("--no-exit" === args[1]) {
      processExit = false;
    } else if ("--ci" === args[2] || "--ci" === args[1]) {
      processExit = true;
    }

    checkVersion(processExit);
    break;
  }
  default:
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", "Error:", `Unknown argument: ${args[0]}`);
    process.exit(1);
}

console.log("this gets run after the switch statement");
