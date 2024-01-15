const fs = require("fs/promises");

const filePath = "./newData.txt";
const fileOperation = async ({ action }) => {
  switch (action) {
    case "read":
      const result = await fs.readFile(filePath, "utf-8");

      console.log(result);
      break;
    case "add":
      const add = await fs.appendFile(filePath, "brathers");
      console.log(add);
      break;

    case "replace":
      const replace = await fs.writeFile(filePath, "corner is the");
      console.log(replace);
      break;

    case "rename":
      const rename = await fs.rename(filePath, "newData.txt");
      console.log(rename);
      break;

    case "delete":
      const deleteFile = await fs.unlink(filePath);
      console.log(deleteFile);
      break;
    default:
      console.log("unknown action");
      break;
  }
};
// fileOperation({ action: "read" });
// fileOperation({ action: "add" });
// fileOperation({ action: "replace" });
// fileOperation({ action: "rename" });
fileOperation({ action: "delete" });
