/*
    [Assignment 4]
    Explain this pattern
*/
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log(url.match(re));

/*
    1- (https?:\/\/) Matches https:// or http://.
    2- ((?:[-\w]+\.)?) Matches www. if exit or not.
    3- (([-\w]+)) Matches the domain name for example: Google.
    4- (\.\w+) Matches the top-level domain name (.com).
    5- ((?:\.\w+)?) Matches any other top-level domain names if exit or not (.uk.co).
    6- (\/?) Matches forwordslah if exit or not (/)(Optional).
    7- (.*) Matches any numbers of characters, words (The rest of the URL). 
*/