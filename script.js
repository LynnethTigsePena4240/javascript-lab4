//Part 1: Declaring and Invoking Functions
function greet(name = "John")
{
    return console.log(`Hello ${name}`);
}

console.log('1: Declaring and Invoking Functions');

console.log("Calling greet() with param:");
greet("lyn");
console.log('\n');

console.log("Calling greet() with default name:");
greet();
console.log('\n');

//Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
    return console.log(num1 + num2 );    
}

console.log('2: Working with Parameters and Returning Values');
console.log("Getting the sum of given params:");
addNumbers(2,5);
console.log('\n');


//Part 3: Function Scope
let scope = "Mr.Worldwide here! (global)";

function changeValue() {
    let scope = "Hello, local here!!"
    console.log(scope);
    
}

console.log('3: Function Scope');
changeValue();
console.log(scope);
console.log('\n');


//Part 4: Closures
function outerFunction() {
    let count = 0;
    return function(){
        count++; 
        return count;       
    }
    
}

let closure = outerFunction();
console.log("4: Closures");

console.log("Calling Inner function and changes local variable each time");
console.log(closure());
console.log(closure());
console.log(closure());
