'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      try {
        if (req.body.text === '') {
          throw new Error('text empty')
        }
        if (!req.body.text || !req.body.locale) {
          throw new Error('missing fields');
        }

        let translation = translator.translate(req.body.text, req.body.locale);
        res.json({ 'text': req.body.text, 'translation': translation })
      }
      catch (err) {
        let errMsg;
        switch (err.message) {
          case 'invalid language':
            errMsg = 'Invalid value for locale field';
            break;
          case 'text empty':
            errMsg = 'No text to translate';
            break;
          case 'missing fields':
            errMsg = 'Required field(s) missing';
            break;
          default:
            errMsg = 'Something went wrong'
        }
        res.json({ 'error': errMsg })
      }
    });

};
