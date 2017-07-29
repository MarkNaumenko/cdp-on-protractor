/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

const Birth = require('./Birth'),
  inherit = require('./inherit');

var protractorSuperPo = function () {
  this.continue = element(by.css('button[class*="continue"]'));
  this.getBrandNewQuote = element(by.css('a.fancy-button--purple[data-ng-href*="new-journey"]')); //Landing Page
};

inherit(protractorSuperPo, Birth);

module.exports = protractorSuperPo;
