//This is simple code completion project to learn about how to create a new file

//Implement the functions in index.js file,

//You are given a boilerplate of node-express code where you will simply have to write function to create a new file, function definition is already given, with parameters.
//writeFile will create a file with given name and content. (Do not change the function name and the paramenters)

//The function will create the file with the name myfile.txt and the content of the file will we Newton School.

const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent);
};

module.exports = { writeFile };
