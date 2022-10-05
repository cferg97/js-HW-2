// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true 

let gender = isMale == true ? "Male" : "Female" 


console.log(gender)

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num1 = 8
let num2 = 27



/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let a = "Blah blah"
let b = " blah"
let c = a + b
console.log(c)

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

a = 28
b = 96

let average = (a+b)/2 
console.log("\nThe average of " +a +" and " +b +" is "+average)

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let example1 = "Potato"
let example2 = 27 
let result = Number.isInteger(example1)
console.log("\nIs " + example1 +" an integer? " + result)
result = Number.isInteger(example2)
console.log("Is " + example2 +" an integer? " + result)

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

function percentage(num, per)
{
    return (num/100)*per;
}

console.log("\n56% of 19209 is: ")
console.log(percentage(19209, 56))

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

number = 60
result = number % 2 == 0 ? ("even") : ("odd")
console.log("\n"+number +" is an " + result + " number")

