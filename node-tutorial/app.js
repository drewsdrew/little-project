const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream('C:/Users/andrew/Desktop/Github repo/little-project/index.html');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log("Listening on port 3000...");
