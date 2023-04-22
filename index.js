const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const express = require("express")
const app = express()
require("chromedriver");

async function helloSelenium() {
  let driver = await new Builder().setChromeOptions(new chrome.Options().headless()).forBrowser('chrome').build();

  await driver.get('https://selenium.dev');
  console.log(await driver.getCurrentUrl())
  console.log("Hello")
  await driver.quit();
}
setTimeout(()=>{
    helloSelenium()
    console.log("run hello selenium")
},10000)

app.listen((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("started listening on port 3000")
    }
},3000)