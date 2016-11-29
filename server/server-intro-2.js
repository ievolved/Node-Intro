
var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");

var server = http.createServer(function (request, response) {
    console.log("request at: " + request.method + " url: " + request.url);

    if (request.method === "GET") {
        if (request.url === "/" || request.url === "/index.html") {
            response.end("Hello World... Wide Web");
        }

        else {
            response.end("Address not found.", "", 404);
        }
    }

    else {
        response.end("", "", 405);
    }
});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
