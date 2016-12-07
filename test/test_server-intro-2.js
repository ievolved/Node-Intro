"use strict";

process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiHttp = require("chai-http");
var request = require("request");
var server = require("../server/server-intro-2.js");

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

  it("/invalid.html should return 404.", function (done) {
    request
      .get(host + "/invalid.html", function (err, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it("unsupported method should return 405.", function (done) {
    request
      .put(host + "/index.html", function (err, response, body) {
        expect(response.statusCode).to.equal(405);
        done();
      });
  });
});