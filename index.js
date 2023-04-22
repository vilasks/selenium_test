const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require("chromedriver");

(async function helloSelenium() {
  let driver = await new Builder().setChromeOptions(new chrome.Options().headless()).forBrowser('chrome').build();

  await driver.get('https://selenium.dev');
  console.log(await driver.getCurrentUrl())
  console.log("Hello")
  await driver.quit();
})();