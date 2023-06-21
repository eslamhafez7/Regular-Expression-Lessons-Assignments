/*
    [Regular Expression - Replace With Pattern] L143
    replace()
    replaceAll()
*/

let txt = "We love programming and @ because @ is amazing";

console.log(txt.replace("@", "javascript"));
console.log(txt.replaceAll("@", "javascript"));

let re = /@/ig;
console.log(txt.replaceAll(re, "Javascript"));
console.log(txt.replaceAll(/@/ig, "Javascript"));