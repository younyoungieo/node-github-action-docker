const http = require('http');

// hello
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
