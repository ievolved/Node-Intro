"use strict";

process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiHttp = require("chai-http");
var request = require("request");
var server = require("../server/server-intro-1.js");

var should = chai.should();
var expect = require("chai").expect;

chai.use(chaiHttp);

"use strict";

var host = "http://127.0.0.1:3000";

describe("page should load for any METHOD, URL.", function () {
  it("homepage should load successfully.", function (done) {
    request
      .get(host + "/", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).include("Hello");
        done();
      });
  });

  it("/index.html should load successfully.", function (done) {
    request
      .get(host + "/index.html", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).include("Hello");
        done();
      });
  });

  it("/about.html should load successfully.", function (done) {
    request
      .get(host + "/about.html", function (err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).include("Hello");
        done();
      });
  });

  it("any POST respond correctly.", function (done) {
    var message = "ehlo";

    request
      .post(
        { url: host + "/index.html",
          body: message,
          headers: { "content-Type": "text/plain" }
        },
        function (err, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).include("Hello");
          done();
        }
      );
  });
});

