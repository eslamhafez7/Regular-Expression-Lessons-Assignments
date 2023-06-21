/*
    [Assignmnt 2]
    Match that starts with Os and ends O
    needed output {
        // ['Os10O', 'OsO', 'Os100O']
    }
*/
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regExp = /os(\d{1,3}|\w?)o/gi;
console.log(specialNames.match(regExp));

//DONE ['Os10O', 'OsO', 'Os100O']