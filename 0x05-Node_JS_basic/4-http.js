const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', 23);
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, (err) => {
  if (err) {
    console.log('error: ', err);
  }
});
