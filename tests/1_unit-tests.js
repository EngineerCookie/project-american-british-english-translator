const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();
let a2b = 'american-to-british';
let b2a = 'british-to-american';
suite('Unit Tests', () => {
    suite('Translate tests', () => {
        test('1. Translate Mangoes are my favorite fruit. to British English', () => {
            let string = 'Mangoes are my favorite fruit.';
            assert.match(translator.translate(string, a2b), /favourite/, 'favorite => favourite');
        });
        test('2. Translate I ate yogurt for breakfast. to British English', () => {
            let string = 'I ate yogurt for breakfast.';
            assert.match(translator.translate(string, a2b), /yoghurt/, 'yogurt => yoghurt');
        });
        test("3. Translate We had a party at my friend's condo. to British English", () => {
            let string = "We had a party at my friend's condo.";
            assert.match(translator.translate(string, a2b), /flat/, "condo => flat");
        });
        test('4. Translate Can you toss this in the trashcan for me? to British English', () => {
            let string = 'Can you toss this in the trashcan for me?';
            assert.match(translator.translate(string, a2b), /bin/, 'trashcan => bin');
        });
        test('5. Translate The parking lot was full. to British English', () => {
            let string = 'The parking lot was full.';
            assert.match(translator.translate(string, a2b), /car park/, 'parking lot => car park');
        });
        test('6. Translate Like a high tech Rube Goldberg machine. to British English', () => {
            let string = 'Like a high tech Rube Goldberg machine.';
            assert.match(translator.translate(string, a2b), /Heath Robinson device/, 'Rube Goldberg machine => Heath Robinson device');
        });
        test('7. Translate To play hooky means to skip class or work. to British English', () => {
            let string = 'To play hooky means to skip class or work.';
            assert.match(translator.translate(string, a2b), /bunk off/, 'play hooky => bunk off');
        });
        test('8. Translate No Mr. Bond, I expect you to die. to British English', () => {
            let string = 'No Mr. Bond, I expect you to die.';
            assert.match(translator.translate(string, a2b), /Mr/, 'Mr. => Mr Bond');
        });
        test('9. Translate Dr. Grosh will see you now. to British English', () => {
            let string = 'Dr. Grosh will see you now.';
            assert.match(translator.translate(string, a2b), /Dr/, 'Dr. = > Dr');
        });
        test('10. Translate Lunch is at 12:15 today. to British English', () => {
            let string = 'Lunch is at 12:15 today.';
            assert.match(translator.translate(string, a2b), /12\.15/, '12:15 => 12.15');
        });

        test('11. Translate We watched the footie match for a while. to American English', () => {
            let string = 'We watched the footie match for a while.';
            assert.match(translator.translate(string, b2a), /soccer/, "footie => soccer");
        });
        test('12. Translate Paracetamol takes up to an hour to work. to American English', () => {
            let string = 'Paracetamol takes up to an hour to work.';
            assert.match(translator.translate(string, b2a), /Tylenol/, 'Paracetamol => Tylenol');
        });
        test('13. Translate First, caramelise the onions. to American English', () => {
            let string = 'First, caramelise the onions.';
            assert.match(translator.translate(string, b2a), /caramelize/, 'caramelise => caramelize');
        });
        test('14. Translate I spent the bank holiday at the funfair. to American English', () => {
            let string = 'I spent the bank holiday at the funfair.';
            assert.match(translator.translate(string, b2a), /public holiday/, 'bank holiday => public holiday')
            assert.match(translator.translate(string, b2a), /carnival/, 'funfair => carnival');
        });
        test('15. Translate I had a bicky then went to the chippy. to American English', () => {
            let string = 'I had a bicky then went to the chippy.';
            assert.match(translator.translate(string, b2a), /cookie/, 'bicky => cookiee');
            assert.match(translator.translate(string, b2a), /fish-and-chip shop/,  'chippy => fish-and-chip shop.')
        });
        test("16. Translate I've just got bits and bobs in my bum bag. to American English", () => {
            let string = "I've just got bits and bobs in my bum bag.";
            assert.match(translator.translate(string, b2a), /odds and ends/, "bits and bobs => odds and ends");
            assert.match(translator.translate(string, b2a), /fanny pack/, 'bum bag => fanny pack')
        });
        test('17. Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
            let string = 'The car boot sale at Boxted Airfield was called off.';
            assert.match(translator.translate(string, b2a), /swap meet/, 'car boot => swap meet');
        });
        test('18. Translate Have you met Mrs Kalyani? to American English', () => {
            let string = 'Have you met Mrs Kalyani?';
            assert.match(translator.translate(string, b2a),/Mrs./, 'Mrs => Mrs.');
        });
        test("19. Translate Prof Joyner of King's College, London. to American English", () => {
            let string = "Prof Joyner of King's College, London.";
            assert.match(translator.translate(string, b2a), /Prof./, "Prof = > Prof.");
        });
        test('20. Translate Tea time is usually around 4 or 4.30. to American English', () => {
            let string = 'Tea time is usually around 4 or 4.30.';
            assert.match(translator.translate(string, b2a), /4\:30/, '4.30 => 4:30.');
        });
        test('21. Highlight translation in Mangoes are my favorite fruit.', () => {
            let string = 'Mangoes are my favorite fruit.';
            assert.include(translator.translate(string, a2b), '<span class="highlight">favourite', 'Highlight favourite');
        });
        test('22. Highlight translation in I ate yogurt for breakfast.', () => {
            let string = 'I ate yogurt for breakfast.';
            assert.include(translator.translate(string, a2b), '<span class="highlight">yoghurt', 'Highlight yoghurt');
        });
        test('23. Highlight translation in We watched the footie match for a while.', () => {
            let string = 'We watched the footie match for a while.';
            assert.include(translator.translate(string, b2a), '<span class="highlight">soccer', 'Highlight soccer');
        });
        test('24. Highlight translation in Paracetamol takes up to an hour to work.', () => {
            let string = 'Paracetamol takes up to an hour to work.';
            assert.include(translator.translate(string, b2a), '<span class="highlight">Tylenol', 'Highlight Tylenol');
        });

    });
}); 