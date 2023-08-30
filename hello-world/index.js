/*const hello = () => {
    console.log("Hello GitHub!");
  };
  
  hello();
*/

//write new file using fs

/*const fs = require("fs");

fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  }
);
*/
const fs = require("fs");
//read file
/*fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
*/
//append file
/*fs.appendFile("sample.txt", " This is my updated content", (err) => {
  if (err) throw err;
  console.log("File updated!");
});
*/
//rename file
/*fs.rename("sample.txt", "test.txt", (err) => {
  if (err) throw err;
  console.log("File name updated!");
});
*/
//unlink file i.e delete files
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log("File test.txt deleted successfully!");
});
