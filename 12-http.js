const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }

  if (req.url === "/about") {
    res.end("this is about page");
  }

  if (req.url === "/contact") {
    res.end("this is contact page ");
  }

  res.end(`<h1>oops!</h1>
<p>We can't seem to find the page</p>
<a href="/">back home</a>`);
});

server.listen(5000);
