/*
    [RegExp - Character Classes Part 2] L139
    /b => matches at the begining or end ot the word
    /B => doesn't match from the end or begining

    test Method
    pattern.test(input);
*/

let names = "sayed 15pam 25pam 35pam Spam4 Spam5 Osama Ahmedspam Aspamo";
let regX = /spam/gi;;
let regX2 = /spam\b/gi;;
let regX3 = /(\bspam|spam\b)/gi;
console.log(names.match(regX));
console.log(names.match(regX2));
console.log(names.match(regX3));

console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1spam"));
console.log(/(\bspam|spam\b)/gi.test("spam1"));

console.log("#".repeat(30));

// EX1
let str = "abc123 #$% Hel_lo World";
let regex1 = /\d/gi;
console.log(str.match(regex1));
console.log(regex1.test(str));

// EX2 
let regex2 = /\D/gi;
console.log(str.match(regex2));
console.log(regex2.test(str));

// EX3
// \w Matches any alphanumeric character (including underscore)
let regex3 = /\w/gi;
console.log(str.match(regex3));
console.log(regex3.test(str));

//EX 4
let regex4 = /\W/gi;
console.log(str.match(regex4));
console.log(regex4.test(str));

// EX 5
let regex5 = /\s/gi;
console.log(str.match(regex5));
console.log(regex5.test(str));

// EX 6
let regex6 = /\S/gi;
console.log(str.match(regex6));
console.log(regex6.test(str));

// EX 7
let regex7 = /./gi;
console.log(str.match(regex7));
console.log(regex7.test(str));

// EX 8
let str2 = "abc123 #$% Hello Wohellorld shello";
let regex8 = /(\bhello|hello\b)/gi;
console.log(str2.match(regex8));
console.log(regex8.test(str2));