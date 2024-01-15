const fs = require("fs/promises");
const path = require("path");

async function readMovie() {
  const filePath = path.join(__dirname, "movie.txt");
  const text = await fs.readFile(filePath, "utf-8");
  console.log("🚀 ~ readMovie ~ filePath:", filePath);
  console.log("🚀 ~ readMovie ~ text:", text);
  console.log(text);
}
module.exports = { readMovie };
