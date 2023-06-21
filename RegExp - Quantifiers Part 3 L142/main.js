/*
    [RegExp - Quantifiers Part 3] L142
    $ => End with something 
    ^ => Start with something 
    ?= => Followed by something
    ?! => Not followed by something
*/
let mystring = "We Love Prgramming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/ing$/gi.test(mystring)); // true
console.log(/$z\b/.test(mystring)); // false
console.log(names.match(/lz$/gi));
console.log("#".repeat(30));
console.log(/z$/gi.test(names)); // true
console.log(/z$/g.test(names)); // false
console.log(/^\d/g.test(names));  // true
console.log(/^\w/gi.test(names)); // true
console.log(/^\s/gi.test(names)); // false
console.log(/^\S/gi.test(names)); // true


console.log(names.match(/\d\w{5}(?=z)/gi));
console.log(names.match(/\d\w{8}/gi));
console.log(names.match(/\d\w{8}(?!z)/gi));
