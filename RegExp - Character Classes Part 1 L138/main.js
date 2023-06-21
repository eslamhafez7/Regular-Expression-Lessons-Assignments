/*
    [Regular Expression - Character Classes Part 1] L138 
    . (dot) => matches any character, except newline or other line terminators.
    \w (Back Slash) => matches word character. [a-z ,A-Z ,0-9 and underscore].
    \W => matches non words characters.
    \d => matches digits from 0-9.
    \D => matches non-digit characters.
    \s => matches whitespaces character.
    \S => matches non whitespaces characters.
*/
let email = "O@@@...com o@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com"; 
let email2 = "@3256ekas s.gmail.com$%^"; 

let dot  = /./g;
console.log(email2.match(dot)); // not includes ^
let w = /\w/g;
let W = /\W/g;
let valid = /\w@\w.(com|net)/g;
let d = /\d/g;
let D = /\D/g;
let s =  /\s/g;
let S =  /\S/g;
console.log(email.match(w));
console.log(email.match(W));
console.log(email.match(valid));
console.log(email.match(d));
console.log(email.match(D));
console.log(email.match(s)); // all white spaces
console.log(email.match(S));