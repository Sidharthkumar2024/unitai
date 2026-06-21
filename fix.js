const fs = require("fs");

// Read globals.css and strip out the broken layer block
let globals = fs.readFileSync("src/app/globals.css", "utf8");
const brokenIndex = globals.indexOf("@layer components {");
if (brokenIndex !== -1) {
  // also find any literal \n before it and remove
  globals = globals.substring(0, brokenIndex).replace(/\\n/g, "");
}

// Read old style.css
const legacy = fs.readFileSync("legacy_html/style.css", "utf8");
const legacyLines = legacy.split("\n");
const cssToAppend = legacyLines.slice(132).join("\n");

// Write clean globals.css
fs.writeFileSync("src/app/globals.css", globals + "\n\n@layer components {\n" + cssToAppend + "\n}\n");

console.log("Successfully rebuilt globals.css");
