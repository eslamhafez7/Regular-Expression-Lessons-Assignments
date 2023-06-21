/*
    [Regular Expression - Chalenge] L146
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// Additional URLs 
let url6 = 'https://www.facebook.com/100027583189779/posts/pfdid028nyRfGSwxkN3K2hdgczcnbnncnjdhjhgcv=63538456hajdhgfcvbc'
let url7 = 'https://github.com';
let url8 = 'http://google.com';

/*
Done With:
elzero.org
http://elzero.org
https://elzero.org
https://www.elzero.org
https://www.elzero.org:8080/articles.php?id=100&cat=topics
*/

let re = /(https?:\/\/(www.)?)?\w+\.(org|net|com)(:|\/)?(.+)?/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
// DONE (الحمدلله)