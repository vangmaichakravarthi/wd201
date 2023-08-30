/*const http = require("http");
const fs = require("fs");

fs.readFile("home.html", (err, home) => {
  console.log(home.toString());
});

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  http
    .createServer((request, response) => {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(home);
      response.end();
    })
    .listen(2000);
});
*/
const http = require("http")
const fs = require("fs")

const z = require("minimist");
const fmz=z(process.argv.slice(2))


//const port = process.env.PORT || 3000

let homeContent = ""
let projectContent = ""
let registrationContent = ""
let registerindexContent = ""

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err
  }
  registrationContent = registration
})

fs.readFile("registerindex.js", (err, registerindex) => {
  if (err) {
    throw err
  }
  registerindexContent = registerindex
})

http
  .createServer((request, response) => {
    let url = request.url
    response.writeHeader(200, { "Content-Type": "text/html" })
    switch (url) {
      case "/project":
        response.write(projectContent)
        response.end()
        break;
      case "/registration":
        response.write(registrationContent)
        response.end()
        break;
      case "/registerindex":
        response.write(registerindexContent)
        response.end()
        break;
      default:
        response.write(homeContent)
        response.end()
        break;
    }
  })
  .listen(fmz.port)

