"use strict";

process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiHttp = require("chai-http");
var request = require("request");
var server = require("../server/server-intro-4.js");

var should = chai.should();
var expect = require("chai").expect;

chai.use(chaiHttp);

"use strict";

var host = "http://127.0.0.1:3000";

describe("pages.", function () {
  it("homepage should load successfully.", function (done) {
    request
      .get(host + "/", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html");
        expect(body).include("Hello from NodeJS");
        done();
      });
  });

  it("/index.html should load successfully.", function (done) {
    request
      .get(host + "/index.html", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html");
        expect(body).include("Hello from NodeJS");
        done();
      });
  });

  it("/about.html should load successfully.", function (done) {
    request
      .get(host + "/about.html", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html");
        expect(body).include("About NodeJS");
        done();
      });
  });

  it("/contact.html should load successfully.", function (done) {
    request
      .get(host + "/contact.html", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "text/html");
        expect(body).include("Hello from NodeJS");
        done();
      });
  });

  it("/scripts.js should load successfully.", function (done) {
    request
      .get(host + "/scripts.js", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(response).to.have.header("content-Type", "application/javascript");
        expect(body).include("local JS file works");
        done();
      });
  });

  it("/style.css should load successfully.", function (done) {
    request.get(host + "/style.css", function (err, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(response).to.have.header("content-Type", "text/css");
      expect(body).include("#main");
      done();
    });
  });

  it("/invalid.html should return 404.", function (done) {
    request
      .get(host + "/invalid.html", function (err, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it("any POST should echo back.", function (done) {
    var message = "ehlo";

    request
      .post(
        { url: host + "/index.html",
          body: message,
          headers: { "content-Type": "text/plain" }
        },
        function (err, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(message);
          done();
        }
      );
  });

  it("unsupported method should return 405.", function (done) {
    request
      .put(host + "/index.html", function (err, response, body) {
        expect(response.statusCode).to.equal(405);
        done();
      });
  });
});