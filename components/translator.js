const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(string, language) {
        let dictionary_in, dictionary_out, timeFormat;
        
        //Values and parameters setter depending on language selected
        switch (language) { 
            case 'american-to-british':
                dictionary_in = [...Object.keys(americanOnly), ...Object.keys(americanToBritishSpelling), ...Object.keys(americanToBritishTitles)];

                dictionary_out = (word) => {
                    let found = {}, result;

                    found.langOnly = americanOnly[word] || undefined;

                    found.langSpelling = americanToBritishSpelling[word] || undefined;

                    found.langTitle = americanToBritishTitles[word] || undefined;

                    result = Object.values(found).find(values => {
                        return values !== undefined
                    });

                    return result;
                };

                timeFormat = (string) => {
                    let regex = /([\d]{1,2})(:)([\d]{2})/;
                    let match = string.match(regex);

                    if (match) {
                        return string.replace(match[0], `<span class="highlight">${match[1]}.${match[3]}</span>`)
                    } 
                    else {return string};
                };

                break;

            case 'british-to-american':
                dictionary_in = [...Object.keys(britishOnly), ...Object.values(americanToBritishSpelling), ...Object.values(americanToBritishTitles)];

                dictionary_out = (word) => {
                    let found = {}, result;

                    found.langOnly = britishOnly[word] || undefined;

                    found.langSpelling = Object.keys(americanToBritishSpelling).find(key => {
                        return americanToBritishSpelling[key] === word
                    }) || undefined;

                    found.langTitle = Object.keys(americanToBritishTitles).find(key => {
                        return americanToBritishTitles[key] === word
                    }) || undefined;

                    result = Object.values(found).find(values => {
                        return values !== undefined
                    });

                    return result;
                };

                timeFormat = (string) => {
                    let regex = /([\d]{1,2})(.)([\d]{2})/;
                    let match = string.match(regex);

                    if (match) {
                        let result = string.replace(match[0], `<span class="highlight">${match[1]}:${match[3]}</span>`);
                        return result;
                    } 
                    else {return string};
                };

                break;
            default:
                throw new Error('invalid language')
        };

        //Actual translation logic
        let result = string;
        
        dictionary_in.sort((a, b) => b.length - a.length).forEach(entry => {
            let regStr = ` *${entry}[ !\\.\\;\\:\\,]+`;
            let regex = new RegExp(regStr, 'i');
            if (regex.test(string)) {
                let match = string.match(new RegExp(entry, 'i'))[0];
                let target = dictionary_out(entry);
                if (match[0] === match[0].toUpperCase()) {
                    target = target[0].toUpperCase() + target.slice(1)
                }
                result = result.replace(new RegExp(match, 'i'), `<span class="highlight">${target}</span>`);
            }
        });
        result = timeFormat(result);
        
        if(result === string) { //checks if no translation has been made
            return "Everything looks good to me!"
        } else { return result }
    }
}

module.exports = Translator;