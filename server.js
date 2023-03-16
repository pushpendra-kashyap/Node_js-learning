const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Route is running');
  } else if (req.url === '/hello') {
    res.end('Hello Programmer!');
  } else if (req.url === '/home') {
    res.end('this is Home Page');
  } else {
    res.end('Invalid Route');
  }
});

server.listen(8000);
