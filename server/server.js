
var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

// ...
// Incoming Request
//   If (valid url)
//     convert url to file system address
//     load file
//     send response with contents of file
//
//   else
//     respond with 404 not found
//
var server = http.createServer(function (request, response) {
    console.log("request at: " + request.method + " url: " + request.url);

    if (request.method === "GET") {
        if (request.url === "/" || request.url === "/index.html") {
            var addy = (request.url === "/") ? "/index.html" : request.url;
            var filename = path.join(__dirname, "../web/" + addy);

            fs.readFile(filename, "utf8", function(err, data) {
                if (err) {
                    response.writeHead(500);
                    response.end(JSON.stringify(err));
                }
                else {
                    var content = data.toString();

                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(content, "utf-8");
                    response.end();
                }
            });
        }

        else if (request.url === "/about.html") {
            var addy = request.url;
            var filename = path.join(__dirname, "../web/" + addy);

            fs.readFile(filename, "utf8", function(err, data) {
                if (err) {
                    response.writeHead(500);
                    response.end(JSON.stringify(err));
                }
                else {
                    var content = data.toString();

                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(content, "utf-8");
                    response.end();
                }
            });
        }

        else if (request.url === "/contact.html") {
            var addy = request.url;
            var filename = path.join(__dirname, "../web/" + addy);
            fs.readFile(filename, "utf8", function(err, data) {
                if (err) {
                    response.writeHead(404);
                    response.end(JSON.stringify(err));
                }
                else {
                    var content = data.toString();

                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(content, "utf-8");
                    response.end();
                }
            });
        }

        else if (request.url === "/style.css") {
            var addy = request.url;
            var filename = path.join(__dirname, "../web/" + addy);

            fs.readFile(filename, "utf8", function(err,data) {
                if (err) {
                    response.writeHead(404);
                    response.end(JSON.stringify(err));
                }
                else {
                    var content = data.toString();

                    response.writeHead(200, { "Content-Type": "text/css" });
                    response.write(content, "utf8");
                    response.end();
                }
            });
        }

        else if (request.url === "/scripts.js") {
            var addy = request.url;
            var filename = path.join(__dirname, "../web/" + addy);

            fs.readFile(filename, "utf8", function(err,data) {
                if (err) {
                    response.writeHead(404);
                    response.end(JSON.stringify(err));
                }
                else {
                    var content = data.toString();

                    response.writeHead(200, { "Content-Type": "application/javascript" });
                    response.write(content, "utf8");
                    response.end();
                }
            });
        }

        else {
            response.end("", "", 404);
        }
    }

    else if (request.method === "POST") {
        console.log("POST received");
        var data = "";

        request.on("data", function(chunk) {
            data += chunk;
        });

        request.on("end", function() {
            response.end("received " + data + ", right back at yas1", 200);
        })
    }

    else {
        response.end("", "", 405);
    }
});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
