/*
    [Quantifiers Part 1] L140
    {
        Quantifiers are special symbols or metacharacters in regular expressions
        that specify the quantity or number of occurrences of the preceding element

        They allow you to match patterns with varying repetition levels. 
    }
    n+ => one or more
    n* => zero or more
    n? => zero or one
*/

let mails = "o@nn.sa odama@gmail.com elzero@gmail.net osama@email.ru";
let nums = "0110 10 150 05120 0560 350 00";
let urls = "https://google.com http://www.website.com web.com";

let mailRx = /\w@\w\w.sa/gi; // without quantifaires
let mailsRx2 = /\w+@\w+.\w+/gi;
console.log(mails.match(mailRx));
console.log(mails.match(mailsRx2));


let numsRx = /0\d0/gi; // without quantifaires
let numsRx2 = /0\d+0/gi; // without quantifaires
let numsRx3 = /0\d*0/gi; // without quantifaires
console.log(nums.match(numsRx)); // false 
console.log(nums.match(numsRx2));
console.log(nums.match(numsRx3)); 


let urlsRx = /https/gi;
// use backlslash to escap the // errors
let urlsRx2 = /https:\/\/\w+.com/gi; // match first url
let urlRx3 = /https?:\/\/(www.)?\w+.\w+/gi; // match two urls
let urlRx4 = /(https?:\/\/)?(www.)?\w+.\w+/gi; // match all urls
console.log(urls.match(urlsRx));
console.log(urls.match(urlsRx2));
console.log(urls.match(urlRx3));
console.log(urls.match(urlRx4));
