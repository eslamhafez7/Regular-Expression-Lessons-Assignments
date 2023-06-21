/*
    [Assignment 3]
    RegExp to match this phone number
*/
let phone = "+(995)-123 (4567)";

let regExp = /^\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(regExp));
// Done ['+(995)-123 (4567)']