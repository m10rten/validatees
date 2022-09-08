/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const { readFileSync } = require("fs");
const { join } = require("path");
try {
  const packageJson = JSON.parse(readFileSync(join(__dirname, ".", "package.json"), "utf8") || { version: 0 });
  const npmVersion = execSync("npm view validatees version").toString().trim() || 1;
  if (npmVersion >= packageJson.version) {
    throw new Error("Please update your version of validatees");
  }
  return process.exit(0);
} catch (error) {
  return process.exit(1);
}
