const jishoApi = require('unofficial-jisho-api');

const models = require('../models');


jishoApi.searchForPhrase('日').then(result => {
    console.log(result);
  });