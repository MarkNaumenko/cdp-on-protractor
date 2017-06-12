/**
 * Created by Mark_Naumenko on 6/9/2017.
 */
'use strict';

(async () => {
    require('geckodriver');
const webdriver = require('selenium-webdriver'),
    fs = require('fs'),
    until = webdriver.until,
    driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build(),
    page = require('./po.js');

async function writeScreenShot(data, filename) {
    let stream = fs.createWriteStream(filename);
    await stream.write(new Buffer(data, 'base64'));
    await stream.end();
}

async function click(locator, time = 10000) {
    await driver.wait(until.elementLocated(locator), time);
    await driver.findElement(locator).click();
}

async function input(locator, text, time = 10000) {
    await driver.wait(until.elementLocated(locator), time);
    // await driver.findElement(locator).sendKeys(text); //don't work due to selenium bug
}


    await driver.get('http://devvm/car-insurance/');
    let tab;
        await driver.getAllWindowHandles().then((tabs) => {
        tab = tabs[0];
    });
    await driver.switchTo().window(tab);
    await click(page.getBrandNewQuote);
    await click(page.knownRegnumberfalse);
    await click(page.mark);
    await click(page.otherModel);
    await click(page.model328);
    await click(page.manualTransmission);
    await click(page.year1997);
    await click(page.bodyTypeCoupe);
    await input(page.postcode, 'b');
    await click(page.findCar);
    await driver.sleep(1000);
    console.log('Window height:', await driver.executeScript(`
        return document.body.scrollHeight;
    `));
    await writeScreenShot(await driver.takeScreenshot(), 'foo.png');
    await driver.navigate().refresh();

    console.log(await driver.getCurrentUrl());

    await driver.quit();

})();
