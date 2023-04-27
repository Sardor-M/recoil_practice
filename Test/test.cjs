var assert = require("assert");
var webdriver = require("selenium-webdriver");
require("geckodriver");
var chrome = require("selenium-webdriver/chrome");
var path = require("path");
const serverUri = "http://127.0.0.1:5173";
const appTitle = "recoil_practice";
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

function logTitle() {
  return new Promise((resolve, reject) => {
    browser.getTitlle().then(function (title) {
      resolve(title);
    });
  });
}

it("should have the correct title", function () {
  browser.get(serverUri);
  browser
    .findElement({ id: "title" })
    .click()
    .then(function () {
      return new Promise((resolve, reject) => {
        browser
          .then(logTitle)
          .then((title) => {
            assert.equal(title, appTitle);
            resolve();
          })
          .catch((err) => reject(err));
      });
    });
});
