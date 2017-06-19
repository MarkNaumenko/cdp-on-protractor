/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

class Birth {
    constructor() {
        this.birth = ''
    }

    getOptionLabel(element, label) {
        return `${element} option[label*='${label}']`;
    }
}

module.exports = Birth;