const http = require("http");
const fs = require("fs");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2)); // Parse command-line arguments

let homeContent = "";
let projectContent = "";
let projecContent = "";
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  projecContent = registration;
});
const port = args.port || 5001; // Use the supplied port or default to 3006

const server = http.createServer((request, response) => {
  let url = request.url;
  response.setHeader("Content-Type", "text/html");

  switch (url) {
    
    case "/project":
        response.write(projectContent);
      
        break;
        case "/registration":
        response.write(projecContent);
       
        break;
      default:
        response.write(homeContent);
      
        break;
  }

  response.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

