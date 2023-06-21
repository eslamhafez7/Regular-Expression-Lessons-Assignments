/*
    [Regular Expression - Ranges] L137
    Part 2 {
        [a-z]
        [^a-z]
        [A-Z]
        [^A-Z]
        [abc]
        [^abc]
    }
*/

let string = "AbcdefG234567%^&*()fh";
let atozsmall = /[a-z]/g;
let notatozsmall = /[^a-z]/g;
let atozcapital = /[A-Z]/g;
let notatozcapital = /[^A-Z]/g;
let ace = /[ace]/g;
let notace = /[^ace]/g;
let AllAp = /[a-z]/ig;
let AllAp2 = /[A-Z]/ig;
let AllAp3 = /[A-Za-z]/ig;
let notAllAp = /[^a-z]/gi;
let notAllAp2 = /[^a-zA-Z]/g;
let specials = /[^a-z0-9]/gi;
let specials2 = /[^a-z0-9A-Z]/g;
console.log(string.match(atozsmall));
console.log(string.match(notatozsmall));
console.log(string.match(atozcapital));
console.log(string.match(notatozcapital));
console.log(string.match(ace));
console.log(string.match(notace));
console.log(string.match(AllAp));
console.log(string.match(AllAp2));
console.log(string.match(AllAp3));
console.log(string.match(notAllAp));
console.log(string.match(notAllAp2));
console.log(string.match(specials));
console.log(string.match(specials2));