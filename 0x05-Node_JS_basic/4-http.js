const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.statusCode = 200;
  res.end();
});

app.listen(port, (err) => {
  if (err) {
    console.log('error: ', err);
  }
});