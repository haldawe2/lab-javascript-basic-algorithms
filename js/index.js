// Iteration 1: Names and Input

let hacker1 = "Gerard";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alberto";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker1Length === hacker2Length) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
};


// Iteration 3: Loops

let yelling = "";
for (let i = 0; i < hacker1.length; i++) {
    let letter = hacker1[i].toUpperCase() + " ";
    yelling += letter;
};

console.log(yelling);

let reverse = "";
for (let i = hacker1.length - 1; i > -1 ; i--) {
    let reversedLetter = hacker1[i];
    reverse += reversedLetter;    
};
console.log(reverse);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
};