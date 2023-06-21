/*
    [Assignment 1]
*/
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re = /\d+(:db8)?/g;
console.log(ip.match(re).join(":"));

// DONE 2001:db8:3333:4444:5555:6666:7777:8888