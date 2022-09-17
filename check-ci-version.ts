/* eslint-disable no-console */
import { execSync } from "child_process";
import { readFileSync } from "fs";

try {
  const packageJSON = readFileSync("./package.json", "utf8");
  const localVersion = JSON.parse(packageJSON).version;
  const npmVersion = execSync("npm view validatees version").toString().trim() || "1.0.0";
  const split = npmVersion.split(".");
  const pkgSplit = localVersion.split(".");
  console.log(split, pkgSplit);

  if (
    split[0] > pkgSplit[0] ||
    (split[0] >= pkgSplit[0] && split[1] >= pkgSplit[1]) ||
    (split[0] >= pkgSplit[0] && split[1] >= pkgSplit[1] && split[2] >= pkgSplit[2])
  ) {
    if (split[0] > pkgSplit[0]) {
      throw new Error(`This major version is outdated, ${localVersion}`);
    } else if (split[0] >= pkgSplit[0] && split[1] > pkgSplit[1]) {
      throw new Error(`This minor version is outdated on this major version, ${localVersion}`);
    } else if (split[0] >= pkgSplit[0] && split[1] >= pkgSplit[1] && split[2] >= pkgSplit[2]) {
      throw new Error(`This patch version is outdated on this major+minor version, ${localVersion}`);
    } else {
      console.info("Your version of validatees is up to date.");
    }
  }
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
