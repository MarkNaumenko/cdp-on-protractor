/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const po = require('./protractorPo.js'),
    po2 = require('./protractorPo2'),
    page = new po(),
    page2 = new po2(),
    EC = protractor.ExpectedConditions;

describe('CDP Home Task - Protractor Framework Usage',() => {

    beforeAll(() => {
        browser.get('https://www.moneysupermarket.com/car-insurance/?source=TIV');
    });

    afterAll(() => {
        // browser.navigate().refresh();
    });

    xit('Open new tab', () => {
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

    xit('Let`s go to the MoneySuperMarket and try to get car insurance, just try :D', () => {
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

    xit('Something else', () => {
        browser.ignoreSynchronization = true; //may be used for non angular apps
        browser.sleep(1000);
        browser.ignoreSynchronization = false;

        browser.wait(EC.invisibilityOf(page.findCar), 10000);
        expect(page.postcode.getAttribute('value')).toEqual('BB11BB');
    });

    it('Mandatory fields filling of the HighImpactPage', () => {
       page.getBrandNewQuote.click();
       page2.postcode.sendKeys('BB1 1BB');
       page2.carRegNumber.sendKeys('MF15MYC');
       page2.addressSelectorFrankie.click();
       page2.findCarButton.click();
       page2.dayOfBirth.sendKeys('01');
       page2.monthOfBirth.sendKeys('01');
       page2.yearOfBirth.sendKeys('1980');
       page2.howLongHeldLicenceYear3.click();
       page2.howLongHeldLicenceMonths5.click();
       page2.medicalConditionsFalse.click();
       page2.drivingOtherCarsFalse.click();
       page2.hadOffencesNo.click();
       page2.yearsNoClaimsDiscount2.click();
       page2.policyStartDateTomorrow.click();
       page2.continue.click();
    });

});
