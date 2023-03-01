
/**================= EJERCICIOS =================*/

/**
 * Exercise: Level 1

    1. Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.

    2. Print the string on the browser console using console.log()

    3. Print the length of the string on the browser console using console.log()

    4. Change all the string characters to capital letters using toUpperCase() method

    5. Change all the string characters to lowercase letters using toLowerCase() method

    6. Cut (slice) out the first word of the string using substr() or substring() method

    7. Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.

    8. Check if the string contains a word Script using includes() method

    9. Split the string into an array using split() method

    10. Split the string Long Days Of JavaScript at the space using split() method

    11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

    12. Change Long Days Of JavaScript to Long Days Of Python using replace() method.

    13. What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.

    14. What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()

    15. Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript

    16. Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.

    17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

    18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

    19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

    20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.

    21. Use startsWith() method with the string Long Days Of JavaScript and make the result true

    22. Use endsWith() method with the string Long Days Of JavaScript and make the result true

    23. Use match() method to find all the a’s in Long Days Of JavaScript

    24. Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'

    25. Use repeat() method to print Long Days Of JavaScript 2 times
 */

// Ex. 1
let challenge = 'Long Days Of JavaScript';

// Ex. 2
console.log(challenge);

// Ex. 3
console.log(challenge.length);

// Ex. 4
console.log(challenge.toUpperCase());

// Ex. 5
console.log(challenge.toLocaleLowerCase());

// Ex. 6
console.log(challenge.substring(0, 4));

// Ex. 7
console.log(challenge.substring(5, 24));

// Ex. 8
console.log(challenge.includes('Script'));

// Ex. 9
console.log(challenge.split());

// Ex. 10
console.log(challenge.split(' '));

// Ex. 11
let arrString ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(arrString.split(','));

// Ex. 12
console.log(challenge.replace('JavaScript', 'Python'));

// Ex. 13
console.log(challenge.charAt(15));

// Ex. 14
console.log(challenge.charCodeAt('J'));

// Ex. 15
console.log(challenge.indexOf('a'));

// Ex. 16
console.log(challenge.lastIndexOf('a'));

// Ex. 17
let string17 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string17.indexOf('because'));

// Ex. 18
console.log(string17.lastIndexOf('because'));

// Ex. 19
console.log(string17.search('because'));


// Ex. 20
let stringToTrim = ' Long Days Of JavaScript ';
console.log(stringToTrim.trim());

// Ex. 21
console.log(challenge.startsWith('Long'));

// Ex. 22
console.log(challenge.endsWith('Script'));

// Ex. 23
console.log(challenge.match('a'));

// Ex, 24
let stringToConcat = 'Long Days of ';
console.log(stringToConcat.concat('JavaScript'));

// Ex. 25
console.log(challenge.repeat(2));


/** Exercise level 2
 * ### Exercise: Level 2

1.  Using console.log() print out the following statement:

    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

2.  Using console.log() print out the following quote by Mother Teresa:

    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

4.  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

5.  Check if 'on' is found in both python and jargon

6.  _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.

7.  Generate a random number between 0 and 100 inclusively.

8.  Generate a random number between 50 and 100 inclusively.

9.  Generate a random number between 0 and 255 inclusively.

10.  Access the 'JavaScript' string characters using a random number.

11.  Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125

12.  Use **substr** to slice out the phrase **because because because** from the following sentence:**'You cannot end a sentence with because because because is a conjunction'**


### [](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#exercises-level-3)
*/

// Ex. 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Ex. 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Ex. 3
console.log(typeof '10' === 10);

// Ex. 4
console.log(parseFloat('9.8') === 10);

// Ex. 5
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

// Ex. 6
let phrase = '_I hope this course is not full of jargon_.';
console.log(phrase.includes('_jargon_'));

// Ex. 7
console.log(Math.floor(Math.random() * 100 + 1));

// Ex. 8
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

// Ex. 9
console.log(Math.floor(Math.random() * 255 + 1));

// Ex. 10
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length)]);

// Ex. 11
let escapeString = "1 1 1 1 1 \
              2 1 2 4 8 \
              3 1 3 9 27 \
              4 1 4 16 64 \
              5 1 5 25 125";
console.log(escapeString);

// Ex. 12
let phrase2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase2.substring(phrase2.indexOf('because'), phrase2.indexOf('is')));



/** ### Exercises: Level 3

1.  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word **love** in this sentence.

2.  Use **match()** to count the number of all **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**

3.  Clean the following text and find the most frequent word (hint, use replace and regular expressions).

        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

4.  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

// Ex. 1
let stringCount = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(stringCount.toLowerCase().match(/love/g)); // g --> The "g" modifier specifies a global match. A global match finds all matches (compared to only the first).


// Ex. 2
let stringCause = 'You cannot end a sentence with because because because is a conjunction';
console.log(stringCause.match(/because/g));

// Ex. 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g, ''));

// Ex. 4
let annual = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arrNumAnnual = annual.match(/(\d+)/g);
let sumArrAnnual = (parseInt(arrNumAnnual[0]) * 12) + parseInt(arrNumAnnual[1]) + (parseInt(arrNumAnnual[2]) * 12);
console.log(`The total annual income is: ${sumArrAnnual}`);