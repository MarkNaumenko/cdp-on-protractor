/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const po = require('./protractorPo.js'),
    page = new po(),
    EC = protractor.ExpectedConditions;

describe('CDP Home Task - Protractor Framework Usage',() => {

    beforeAll(() => {
        browser.get('http://devvm/car-insurance/');
    });

    afterAll(() => {
        // browser.navigate().refresh();
    });

    it('Open new tab', () => {
        browser.actions()
        .keyDown(protractor.Key.CONTROL)
        .click(page.getBrandNewQuote)
        .keyUp(protractor.Key.CONTROL)
        .perform();

        return browser.getAllWindowHandles().then((windowsId) => {
            return windowsId[1];
        }).then((tabId) => {
            return browser.switchTo().window(tabId);
        });
    });

    it('Let`s go to the MoneySuperMarket and try to get car insurance, just try :D', () => {
        page.knownRegnumberfalse.click();
        page.mark.click();
        page.otherModel.click();
        page.model328.click();
        page.manualTransmission.click();
        page.year1997.click();
        page.bodyTypeCoupe.click();
        page.postcode.sendKeys('BB11BB');
        page.findCar.click();
    });

    it('Something else', () => {
        browser.ignoreSynchronization = true; //may be used for non angular apps
        browser.sleep(1000);
        browser.ignoreSynchronization = false;

        browser.wait(EC.invisibilityOf(page.findCar), 10000);
        expect(page.postcode.getAttribute('value')).toEqual('BB11BB');
    });

});
