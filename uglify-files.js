/* eslint-disable @typescript-eslint/no-var-requires */
// find all entries in the dist directory
const fs = require("fs");
const path = require("path");
const files = [];
const subEntries = (entry) => {
  if (fs.lstatSync(entry).isDirectory()) {
    const entries = fs.readdirSync(entry);
    entries.forEach((subEntry) => {
      subEntries(path.join(entry, subEntry));
      // console.log(subEntry);
    });
  } else {
    // skip if the file is a .d.ts file
    if (entry.endsWith(".d.ts")) {
      return;
    }
    console.log(entry);
    files.push(entry);
  }
};
const distDir = path.join(__dirname, "dist");
// if no dist directory exists, exit the script
if (!fs.existsSync(distDir)) {
  console.log("No dist directory found");
  return process.exit(0);
}

const entries = fs.readdirSync(distDir);
console.log(entries);
entries.forEach((entry) => {
  subEntries(path.join(distDir, entry));
});

const uglify = (file) => {
  // remove whitespaces and save the file
  const content = fs.readFileSync(file, "utf8");
  // const minified = content.replace(/\s/g, "");
  // remove only whitespaces when more than one
  const minified = content.replace(/\s{2,}/g, "");
  fs.writeFileSync(file, minified, "utf8");
};

// for each file, run an uglify command
files.forEach((file) => {
  uglify(file);
});
