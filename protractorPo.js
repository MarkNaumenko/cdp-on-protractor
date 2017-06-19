/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const protractorSuperPo = require('./protractorSuperPo');

class protractorPo extends protractorSuperPo{
    constructor () {
        super();
        this.getBrandNewQuote = element(by.css('a.fancy-button--purple[data-ng-href*="new-journey"]'));
    }
}

module.exports = protractorPo;
