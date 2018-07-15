import fs from "fs";

const text = fs.readFileSync(__dirname + "/textFile.txt", "utf8");

console.log(`Javascript: ${text}`);
