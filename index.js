const http = require("http");
const url = require("url");
const fs = require("fs");
http
  .createServer(function (req, res) {
    const pageUrl = url.parse(req.url, true);
    const filename = "." + pageUrl.pathname + ".html";
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("./404.html", (err, data) => {
          res.write(data);
          res.end();
        });
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
