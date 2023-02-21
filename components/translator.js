const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(string, language) {
        function translatorLogic(word, regex, source_in, source_out) {
            let i = source_in.indexOf(word.toLowerCase());

            if (word == word[0].toUpperCase() + word.slice(1)) { //if source is capitalized
                word = word.toLowerCase().replace(regex, source_out[i]);
                word = word[0].toUpperCase() + word.slice(1);
                return word
            }
            word = word.replace(regex, source_out[i]);
            return word
        }
           
        switch (language) {
            case 'american-to-british':
                let  // [_in] suffix is for input; [_out] suffix is for output 
                    aOnly_in = Object.keys(americanOnly),
                    aOnly_out = Object.values(americanOnly),

                    a2b_in = Object.keys(americanToBritishSpelling),
                    a2b_out = Object.values(americanToBritishSpelling),

                    a2bTitle_in = Object.keys(americanToBritishTitles),
                    a2bTitle_out = Object.values(americanToBritishTitles);
                let result = string.split(' ');
                let change = 0; //track instances of word translated
                console.log(result)
                result.forEach(word => {
                    let regString = `^${word.toLowerCase()}[.,]*$`
                    let regex = new RegExp(regString);
                    console.log(regex)
                    let index = result.indexOf(word)
                    let translated;
                    if (regex.test(a2bTitle_in)) {
                        change++
                        console.log(`target word  is  "${word}" and the if is 1`)
                        console.log(regex.test(a2bTitle_in))
                        translated = translatorLogic(word, regex, a2bTitle_in, a2bTitle_out);
                        result[index] = result[index].replace(new RegExp(word), translated);
                    };
                    if (regex.test(a2b_in)) {
                        change++
                        console.log(`target word  is  "${word}" and the if is 2`)
                        console.log(regex.test(a2b_in))
                        translated = translatorLogic(word, regex, a2b_in, a2b_out);
                        result[index] = result[index].replace(new RegExp(word), translated);
                    };
                    if (regex.test(aOnly_in)) {
                        change++
                        console.log(`target word  is  "${word}" and the if is 3`)
                        console.log(regex.test(aOnly_in))
                        translated = translatorLogic(word, regex, aOnly_in, aOnly_out);
                        result[index] = result[index].replace(new RegExp(word), translated);
                    };
                })

                return result.join(' ');
            case 'british-to-american':
                return "ahoy"
            default:
                console.log('something wrong with Translator.translate()')
        }
    }
}

module.exports = Translator;