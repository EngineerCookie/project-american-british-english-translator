const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();
let a2b = 'american-to-british';
let b2a = 'british-to-american';
suite('Unit Tests', () => {
    suite('Translate tests', () => {
/*
        test('testerino', () => {
            let string = 'favorite armor';
            assert.equal(translator.translate(string, a2b), 'favourite armour');
        })*/

        test('1. Translate Mangoes are my favorite fruit. to British English', () => {
            let string = 'Mangoes are my favorite fruit.';
            assert.equal(translator.translate(string, a2b), 'Mangoes are my favourite fruit.');
        });
 /*       test('2. Translate I ate yogurt for breakfast. to British English', () => {
            let string = 'I ate yogurt for breakfast.';
            assert.equal(translator.translate(string, a2b), 'I ate yoghurt for breakfast.');
        });
        test("3. Translate We had a party at my friend's condo. to British English", () => {
            let string = "We had a party at my friend's condo.";
            assert.equal(translator.translate(string, a2b), "We had a party at my friend's flat.");
        });
        test('4. Translate Can you toss this in the trashcan for me? to British English', () => {
            let string = 'Can you toss this in the trashcan for me?';
            assert.equal(translator.translate(string, a2b), 'Can you toss this in the bin for me?');
        });
        test('5. Translate The parking lot was full. to British English', () => {
            let string = 'The parking lot was full.';
            assert.equal(translator.translate(string, a2b), 'The car park was full.');
        });
        test('6. Translate Like a high tech Rube Goldberg machine. to British English', () => {
            let string = 'Like a high tech Rube Goldberg machine.';
            assert.equal(translator.translate(string, a2b), 'Like a high tech Heath Robinson device.');
        });
        test('7. Translate To play hooky means to skip class or work. to British English', () => {
            let string = 'To play hooky means to skip class or work.';
            assert.equal(translator.translate(string, a2b), 'To bunk off means to skip class or work.');
        });
        test('8. Translate No Mr. Bond, I expect you to die. to British English', () => {
            let string = 'No Mr. Bond, I expect you to die.';
            assert.equal(translator.translate(string, a2b), 'No Mr Bond, I expect you to die.');
        });
        test('9. Translate Dr. Grosh will see you now. to British English', () => {
            let string = '';
            assert.equal(translator.translate(string, a2b), 'Dr Grosh will see you now.');
        });
        test('10. Translate Lunch is at 12:15 today. to British English', () => {
            let string = 'Lunch is at 12:15 today.';
            assert.equal(translator.translate(string, a2b), 'Lunch is at 12.15 today.');
        });
        /*
        test('11. Translate We watched the footie match for a while. to American English', () => {
            let string = 'We watched the footie match for a while.';
            assert.equal(translator.translate(string, b2a), "We watched the soccer match for a while.");
        });
        test('12. Translate Paracetamol takes up to an hour to work. to American English', () => {
            let string = 'Paracetamol takes up to an hour to work.';
            assert.equal(translator.translate(string, b2a), 'Tylenol takes up to an hour to work.');
        });
        test('13. Translate First, caramelise the onions. to American English', () => {
            let string = 'First, caramelise the onions.';
            assert.equal(translator.translate(string, b2a), 'First, caramelize the onions.');
        });
        test('14. Translate I spent the bank holiday at the funfair. to American English', () => {
            let string = 'I spent the bank holiday at the funfair.';
            assert.equal(translator.translate(string, b2a), 'I spent the public holiday at the carnival.');
        });
        test('15. Translate I had a bicky then went to the chippy. to American English', () => {
            let string = 'I had a bicky then went to the chippy.';
            assert.equal(translator.translate(string, b2a), 'I had a cookie then went to the fish-and-chip shop.');
        });
        test("16. Translate I've just got bits and bobs in my bum bag. to American English", () => {
            let string = "I've just got bits and bobs in my bum bag.";
            assert.equal(translator.translate(string, b2a), "I've just got odds and ends in my fanny pack.");
        });
        test('17. Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
            let string = 'The car boot sale at Boxted Airfield was called off.';
            assert.equal(translator.translate(string, b2a), 'The swap meet at Boxted Airfield was called off.');
        });
        test('18. Translate Have you met Mrs Kalyani? to American English', () => {
            let string = ' Have you met Mrs Kalyani?';
            assert.equal(translator.translate(string, b2a), 'Have you met Mrs. Kalyani?');
        });
        test("19. Translate Prof Joyner of King's College, London. to American English", () => {
            let string = "Prof Joyner of King's College, London.";
            assert.equal(translator.translate(string, b2a), "Prof. Joyner of King's College, London.");
        });
        test('20. Translate Tea time is usually around 4 or 4.30. to American English', () => {
            let string = 'Tea time is usually around 4 or 4.30.';
            assert.equal(translator.translate(string, b2a), 'Tea time is usually around 4 or 4:30.');
        });*/
    });
});

/*





















Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
4. Highlight translation in Paracetamol takes up to an hour to work.

*/