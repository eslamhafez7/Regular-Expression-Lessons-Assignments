/*
    [regular Expression - Quantifiers Part 2]
    Quantifaires part 2 {
        n{x} => Number of
        n{x,y} => Range
        n{x,} => At least x
    }
*/
let serials = "s100s s300s s5000s s95000s s650000s";

console.log(serials.match(/s\d{3}s/gi));
console.log(serials.match(/s\d{4,5}s/gi));
console.log(serials.match(/s\d{4,}s/gi));