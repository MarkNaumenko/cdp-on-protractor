/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';



class protractorPo {
    constructor () {
        this.getBrandNewQuote = element(by.css('a.fancy-button--purple[data-ng-href*="new-journey"]'));
        this.knownRegnumberfalse = element(by.css('[for="knownRegnumberfalse"]'));
        this.mark = element(by.xpath('.//*[@for="make4"]'));
        this.otherModel = element(by.css('[for="modelOther"]'));
        this.model328 = element(by.css('option[label="328"]'));
        this.manualTransmission = element(by.css('[for="transmission0"]'));
        this.year1997 = element(by.css('option[label="1997 (P, R)"]'));
        this.bodyTypeCoupe = element(by.css('option[label="I COUPE"]'));
        this.findCar = element(by.css('button[id="findCar"]'));
        this.postcode = element(by.css('[name="postcode"]'));
    }
}

module.exports = protractorPo;
