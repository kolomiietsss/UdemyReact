// init
let k = 1
let i = 0
//func + scope
function pr() {
    console.log(`${k}, ${i}`);
}
pr(k)

//spread
let arr = [1,2,3];
let newArr = [...arr, 4, 5];
console.log(newArr);

//rest rest operator and that merges the arguments into an array.
function name(...args) {
    console.log(args);
}
name(1,2,3); // makes array

// Destructuring
let [firstName, lastName] = ["1", "2"];

console.log(firstName);
console.log(lastName);
