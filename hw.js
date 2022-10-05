/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log("There are five main types of data types in JavaScript.") 
console.log("\nThe first is string, which represents written (text) data")
console.log("\nThe second is number, which can be an integer or with a decimal point.")
console.log("\nThe third is Boolean, where the value can either be true or false.")
console.log("\nThe next is undefined, which is where a variable has not been assigned a value.")
console.log("\nFinally, null, which can be used to clear a value from an existing variable.")


/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("\n---\nA variable is a container that can hold an assigned value.")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let a = 12
let b = 20
let answer = (a+b)
console.log("\nThe answer to 12 + 20 is "+answer)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let sub = (12-x)
console.log("\n---\nThe answer is "+sub)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
let result = (name1 === name2)
console.log("\nIs " +name1 +" the same as " +name2 +"? " +result)
result = (name1.toLowerCase() === name2.toLowerCase()) 
console.log("\nIgnoring case, are they the same? " + result)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 7
if (x == 7){
    console.log("\n---\nx is equal to seven")
}else{
    console.log("\nCannot print value")
}



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let person = {
    name: "Bob",
    age: 28,
}
console.log("\n---\n")

console.log(person)

let ageCheck = person.age >= 18 ? "Yes" : "No"

console.log("\nIs Bob over 18 years old? " + ageCheck)