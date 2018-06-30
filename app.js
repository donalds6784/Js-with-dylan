/*
let firstName = 'charlie',
    secondName = 'Dylan',
    thirdName = 'Donalds';

    namesList = [firstName, secondName, thirdName];
console.log(namesList);

// concatinating a variables and using the .splitmethod to create an array
    names = `${firstName} ${secondName} ${thirdName}`.split(' ');
console.log(names)

// The .split() methosd. This is gonna split the data and create an array of the data tyupes.
console.log(`${firstName} ${secondName}`.split('')); // passing in an empty string will the outputs.
console.log(`${firstName} ${secondName} ${thirdName}`.split()); // It will create a single array of the 2 names.
console.log(`${firstName} ${secondName} ${thirdName}`.split(' ')); // It will create an array of the 2 names.

// Javascript methods
// the .trim() method and the .length property.
console.log(`            ${firstName} ${secondName}          `.trim().length);
console.log(`${firstName} ${secondName}`.length);
// you can see that we get 13 in both cases if we do run the application.
*/

/*
//===============================================================================
let number = '7.7775'; //A string number


console.log(Boolean(number)); // Checks for the truthness of the value.
console.log(parseInt(number)); //parseInt() will convert a string into an interge.
console.log(parseFloat(number).toFixed(5)); // parseFloat() will convert a number string into a float

let example1 = parseInt("33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(typeof example1); // This will return a number
console.log(typeof example2); // This will return a number
console.log(typeof example3); // This will return a string
console.log(typeof example4); // This will return a string
*/

//=======================================================================
//  When dealing with arrays and objects, you are passing by refference
// If we set example2 = example1 and then push 11 to array example 2, we 
// will get both example1 and example2 producing the same results.
//=======================================================================
let example1 = ['Dylan', 5, true];

// We push() to push a new item to the array, but when we push to item array example2, 
//we can see thst even example1 gets the same content [ 'Dylan', 5, true, 11 ]. 
//Therefore, what we are doing is pushing to example1 through reference fron example2.
/*
example2 = example1;
example2.push(11);

console.log(example1);
console.log(example2);
*/
//=======================================================================
//If we wanna push to example2, we can use the spread operator instead
//=======================================================================
/*
example2 = [...example1];
example2.push(11, 35, 'Donalds');

console.log(example1);
console.log(example2);
*/

// OR WE CAN USE A .map() METHOD TO MAP PUSH AND RETURN THE NEW ARRAY FOR EXAMPLE2

example2 = example1.map((element) => {
    return element;
});
example2.push(11, 25, 'Coding');
console.log(example1);
console.log(example2);

