/*
    [Regular Expressions - Modifiers] L135
    Stntax {
        /pattern/modifier(s);
        new RegExp("pattern", "modifier(s)")
    }
    Modifiers => Flags{
        i => case - insensitive
        g => global
        m => multilines
    }
    Search methods {
        match("pattern")
    }
    match() {
        Matches a string against a regular expression pattern
        Returns an array with the matches
        Returns null if no matches found
    }
*/
let string = "Hello Elzero web school I love elzero";
let regexp = /elzero/ig;
console.log(string.match(regexp));

let mystring = "Hello eslam my name is Eslam too";
let regx = new RegExp(/eslam/, "ig");
console.log(mystring.match(regx));


var str = 'Hello, world!';
var regexpression = /World/i;
console.log(regexpression.test(str));