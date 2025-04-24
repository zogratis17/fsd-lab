const port = 3000;
const http = require('http');
const fs = require('fs');
const httpStatus = require('http-status-codes');

const routeMap = {
  "/": "views/index.html"
};

const server = http.createServer((request, response) => {
  response.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html"
  });

  if (routeMap[request.url]) {
    fs.readFile(routeMap[request.url], (error, data) => {
      if (error) {
        response.writeHead(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR);
        response.end("<h1>Internal Server Error</h1>");
      } else {
        response.write(data);
        response.end();
      }
    });
  } else {
    response.end("<h1>Sorry, page not found</h1>");
  }
});

server.listen(port);
console.log(`The server is listening on port: ${port}`);
