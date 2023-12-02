const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  await fs.updateFile(fileName, fileContent);
};

module.exports = updateFile;
