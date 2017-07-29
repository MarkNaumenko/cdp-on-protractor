/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

var PageFactory = function (page) {
  var pages = {
    'page1': po,
    'page2': po2,
    'superPage': superP
  };
  if (!pages[page]) {
    throw new Error('Wrong page name: ' + pages[page]);
  }
  return new pages[page]();
};

const po = require('./protractorPo.js'),
  po2 = require('./protractorPo2'),
  superP = require('./protractorSuperPo'),
  page1 = PageFactory('page1'),
  page2 = PageFactory('page2'),
  superPage = PageFactory('superPage'),
  EC = protractor.ExpectedConditions;
let page;

describe('CDP Home Task - Protractor Framework Usage', () => {

  beforeAll(() => {
    browser.get('http://www.ci1-cms.gb.moneysupermarket.com/car-insurance/');
  });

  afterAll(() => {
    // browser.navigate().refresh();
  });

  beforeEach(() => {
    return browser.getCurrentUrl().then((url) => {
      if (url.includes('high')) {
        console.log('high');
        return page = page1;
      }
      if (url.includes('about')) {
        console.log('about');
        return page = page2;
      }
      else {
        console.log('other');
        return page = superPage;
      }
    });
  });

  afterEach(() => {
    //switching logic depends on page
    return browser.getCurrentUrl().then((url) => {
      if (url.includes('high')) {
        return page2.continue.click();
      }
    });
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

  it('Mandatory fields filling on the LandingPage', () => {
    browser.executeScript('window.scrollTo(0, 100)');
    page.getBrandNewQuote.click();
  });

  it('Mandatory fields filling on the HighImpactPage', () => {
    page.postcode.sendKeys('BB1 1BB');
    page.carRegNumber.sendKeys('MF15MYC');
    page.addressSelectorFrankie.click();
    page.findCarButton.click();
    page.dayOfBirth.sendKeys('01');
    page.monthOfBirth.sendKeys('01');
    page.yearOfBirth.sendKeys('1980');
    page.howLongHeldLicenceYear3.click();
    page.howLongHeldLicenceMonths5.click();
    page.medicalConditionsFalse.click();
    page.drivingOtherCarsFalse.click();
    page.hadOffencesNo.click();
    page.yearsNoClaimsDiscount2.click();
    page.policyStartDateTomorrow.click();
  });

  it('Mandatory fields filling on the AboutTheCarPage', () => {
    page.startDrivingCarMonth.click();
    page.startDrivingCarYear.click();
    page.areYouRegisteredKeeper.click();
    page.milesPerYear.sendKeys(8000);
    page.overnightLocation.click();
    page.daytimeLocation.click();
    page.policyHolderName.sendKeys("test");
    page.policyHolderSurname.sendKeys("tester");
    // page2.emailField.sendKeys("GENERATE");
    // page2.confirmEmail.sendKeys("GENERATE");
    // page2.passwordField.sendKeys("GENERATE");
    // page2.confirmPassword.sendKeys("GENERATE");
    // page.gender.click();
    // page.maritalStatus.click();
    // page.hasChildrenUnder16.click();
    // page.homeOwner.click();
    // page.occupationField.sendKeys("Xe");
    // page.businessSectorField.sendKeys("Ed");
    // page.rememberForNinetyDays.click();
    // page.twoCompanyCallMe.click();
    // browser.sleep(10000);
  });

});
