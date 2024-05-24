// Question 1

// Create an array named fruits that  contains the following string elements: 
// "apple", "banana", "mango", "orange".

 let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);

// Question 2

// Declare an array named numbers that can contain only number elements and initialize it with the 
// values 10, 20, 30, and 40.

const numbers = [10,20,30,40];
console.log(numbers);

// Question 3

// Access the third element of the fruits array and assign it to a variable named thirdFruit.

let thirdfruit: string = fruits[2];
console.log(thirdfruit);

// Question 4

// Change the second element of the numbers array to 25.

 numbers[1] = 25;
console.log(numbers);

// Question 5

// Add the element "grape" to the end of the fruits array using the method.

const fruit = ["strawberry", "pineapple", "mango", "apple"];
fruit.push("grape");
console.log(fruit);

// Question 6

// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

const lastFruit = fruit.pop();
console.log(fruit);

// Question 7

// Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

const firstFruit = fruit.shift();
console.log(fruit);

// Question 8

// Add the element "kiwi" to the beginning of the fruits array using the method.

 fruit.unshift("kiwi");
 console.log(fruit);

 // Question 9

 // Remove 2 elements from the fruits array starting from index 1 using the method.

 fruit.splice(1,2);
 console.log(fruit);

 // Question 10

 // Insert the element "pineapple" and "pear" at index 2 of the fruits array using the method.

 fruit.splice(2,0);
 console.log(fruit);

 // Question 11

 // Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.

 let citrusFruit: string  [] = fruit.splice(0,2);
 console.log(citrusFruit);

 // Question 12

 // Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

 let lastTwoFruit: string [] = fruit.splice(-2);
 console.log(lastTwoFruit);
