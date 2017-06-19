/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

class Birth {
    constructor() {
        this.birth = ''
    }

    getOptionLabel(element, value) {
        return `${element} option[label*='${value}']`;
    }

    getLabelFor(element, value) {
        return `${element} label[for*='${value}']`;
    }
}

module.exports = Birth;