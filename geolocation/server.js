var http = require('http');
var fs = require('fs');

const port = 8080;
const hostName = '127.0.0.1';

http.createServer(function (req, res) {
    fs.readFile('geolocation.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
  }).listen(port, hostName, () => {
    console.log(`Server is running at ${hostName}:${port}`)
  });