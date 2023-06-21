/*
    [Regular Expressions - Ranges Part 1] L136
    Ranges {
        Part 1 {
            (X\Y) => X or Y
            [0-9] => 0 to 9
            [^0-9] => Any character but not from 0 to 9
        }
        Part 2 {
            [a-z]
            [^a-z]
            [A-Z]
            [^A-Z]
            [abc]
            [^abc]
        }
    }
*/
// Part 1

let tld = "Com Net Org Net Io Info";
let tldRe = /(info|net|com)/ig;
console.log(tld.match(tldRe));



// let nums = "12345678910";
// let numsRe = new RegExp(/[0-9]/g);
// console.log(nums.match(numsRe));
let nums = "12345678910";
let numsRe = /[0-9]/g;
console.log(nums.match(numsRe));



// let notNums = "1!2@3#4$5%6^7&8()910";
// let notNumsRe = new RegExp(/[^0-9]/g);
// console.log(notNums.match(notNumsRe));
let notNums = "12@3#4$5%6^7&8*9(10)";
let notNumsRe = /[^0-9]/g;
console.log(notNums.match(notNumsRe));



let notNums1 = "12345678910";
let notNumsRe1 = /[^0-2]/g;
console.log(notNums1.match(notNumsRe1));



let notNums2 = "12345678910";
let notNumsRe2 = /[0-2]/g;
console.log(notNums2.match(notNumsRe2));



let practice = "os1 os10s os2 os8 os8os";
let practiceRe = /Os[5-9]Os/gi;
console.log(practice.match(practiceRe));