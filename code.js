
/**================= EJERCICIOS =================*/


 /** Exercise: Level 1 */

    // 1. Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.
let challenge = 'Long Days Of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 4));

// 7. Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.
console.log(challenge.substring(5, 24));

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method
console.log(challenge.split());

// 10. Split the string Long Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let arrString ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(arrString.split(','));

// 12. Change Long Days Of JavaScript to Long Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14. What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

// 15. Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript
console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string17 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string17.indexOf('because'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string17.lastIndexOf('because'));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string17.search('because'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.
let stringToTrim = ' Long Days Of JavaScript ';
console.log(stringToTrim.trim());

// 21. Use startsWith() method with the string Long Days Of JavaScript and make the result true
console.log(challenge.startsWith('Long'));

// 22. Use endsWith() method with the string Long Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'));

// 23. Use match() method to find all the a’s in Long Days Of JavaScript
console.log(challenge.match('a'));

// 24. Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'
let stringToConcat = 'Long Days of ';
console.log(stringToConcat.concat('JavaScript'));

// 25. Use repeat() method to print Long Days Of JavaScript 2 times
console.log(challenge.repeat(2));


/** Exercise level 2 */

// 1.  Using console.log() print out the following statement:

//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.  Using console.log() print out the following quote by Mother Teresa:

//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === 10);

// 4.  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10);

// 5.  Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

// 6.  _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
let phrase = '_I hope this course is not full of jargon_.';
console.log(phrase.includes('_jargon_'));

// 7.  Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100 + 1));

// 8.  Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

// 9.  Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255 + 1));

// 10.  Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length)]);

// 11.  Use console.log() and escape characters to print the following pattern.

//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
let escapeString = "1 1 1 1 1 \
              2 1 2 4 8 \
              3 1 3 9 27 \
              4 1 4 16 64 \
              5 1 5 25 125";
console.log(escapeString);

// 12.  Use **substr** to slice out the phrase **because because because** from the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let phrase2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase2.substring(phrase2.indexOf('because'), phrase2.indexOf('is')));

// [](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#exercises-level-3)


/** Exercises: Level 3 */

// 1.  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word **love** in this sentence.
let stringCount = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(stringCount.toLowerCase().match(/love/g)); // g --> The "g" modifier specifies a global match. A global match finds all matches (compared to only the first).

let stringCount2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(stringCount2.split('love').length);

// 2.  Use **match()** to count the number of all **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let stringCause = 'You cannot end a sentence with because because because is a conjunction';
console.log(stringCause.match(/because/g));

// 3.  Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//         const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g, ''));

// 4.  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annual = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arrNumAnnual = annual.match(/(\d+)/g);
let sumArrAnnual = (parseInt(arrNumAnnual[0]) * 12) + parseInt(arrNumAnnual[1]) + (parseInt(arrNumAnnual[2]) * 12);
console.log(`The total annual income is: ${sumArrAnnual}`);
