'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      try {
        let translation = translator.translate(req.body.text, req.body.locale);

        res.json({ 'text' : req.body.text, 'translation': translation})
      }
      catch (err) {
        console.log(err.message)
        res.json({'error' : err.message})
      }
    });

};
