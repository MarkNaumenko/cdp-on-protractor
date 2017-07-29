/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

var Birth = function () {
  this.birth = '';
};

Birth.prototype.getOptionLabel = function(element, value) {
  return `${element} option[label*='${value}']`;
};

Birth.prototype.getLabelFor = function(element, value) {
  return `${element} label[for*='${value}']`;
};

module.exports = Birth;