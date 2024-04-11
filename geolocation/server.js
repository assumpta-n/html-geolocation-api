const https = require('https');
const fs = require('fs');

const httpsPort = 8080;
const hostName = '127.0.0.1';

const options = {
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt'),
  passphrase:'openserver'
}

const httpsServer = https.createServer(options, (req, res) => {
    fs.readFile('geolocation.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
})

httpsServer.listen(httpsPort, hostName, () => {
  console.log(`Server is running at ${hostName}:${httpsPort}`)
});


