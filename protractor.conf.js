/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';
require('chromedriver');

exports.config = {
    params: {
        defaultTimeOut: 5000
    },
    getPageTimeout: 10000,
    allScriptsTimeout: 25000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    multiCapabilities: [
      {
        browserName: process.env.BROWSER,
        chromeOptions: {
          args: [process.env.VIEW]
        }
      }
    ],
    specs: [
      'spec.js'
    ]
};
