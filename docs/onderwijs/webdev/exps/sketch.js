// This is an example of applying a filter in new ES6 style

let vals = [1, 2, 3, 4, 7, 8, 13];

vals = vals.filter(x => !(x % 2));
console.log(vals);