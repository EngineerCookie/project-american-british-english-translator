'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      
    });

  app.route('/test')
  .get((req, res) => {
    let testArr = ['one', 'two.'];
    let regex = new RegExp('^two$');
    testArr[1] = testArr[1].replace(regex, 'three')
    console.log(testArr)
    res.send('testerino');
  })
};
