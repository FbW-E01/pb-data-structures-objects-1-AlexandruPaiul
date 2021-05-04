// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
  firstName: "Tom",
  lastName: "Pitt",
  age: 21,
};
console.log("Task1: Object Person");
for (const key in person) {
  console.log(` ${key}: ${person[key]}`);
}

// **2. Get Values.**
// Create a function that returns an array of all **values** of an object's properties.
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output:
// ```javascript
// ["tea", "coffee", "milk"]
// ```
console.log("Task2: Get Values");
const objectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const getObjectValues = (object) => {
  console.log(Object.values(object));
};
getObjectValues(objectValues);

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string.
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: Paris
// }
// ```
// * Example of Expected Output
// "Michael Smith is a 20 year old driver in Paris".
console.log("Task3: Add A Method");
let person1 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  getString() {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is a " +
        this.age +
        " year old " +
        this.job +
        " in " +
        this.city
    );
  },
};
person1.getString();

// ## Bonus Questions

// **1. Convert keys and values into an array.**
// Create a function that converts an object into an array of keys and values.
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// ```
// * Expected output:
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// ```
// * Expected output:
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
// ```
console.log("Task-1: Convert keys and values into an array.");
const numbers = {
  A: 1,
  B: 2,
  C: 3,
};
const objectToArray = a => {console.log(Object.entries(a))};
objectToArray(numbers);

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object.
// * Example
// ```javascript
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// ```
// * Expected output:
// ```javascript
// ["name", "class", "course"]
// ```
console.log("Task-2: List Properties. ")
let student = {
      name: "Mike",
      class: "4A",
      course: "English",
    }
const studentProperties = b => {console.log(Object.keys(b))};
studentProperties(student);

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object.
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? 
// In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.
console.log("Task-3: Merge");
let first = {firstName: "John"};
let last = {lastName: "Smith"};
const mergeToObjects =(a,b)=>{a = {...a,...b}; console.log(a)};
mergeToObjects(first,last);


// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example:
// ```javascript
// let person = {
//   name: "John",
//   job: "teacher"
// }
// ```
// * Expected Output:
// ```javascript
// {"John": name, "teacher": job}
// ```
console.log("Task4: Switch Keys and Values ")
let person2 = {
      name: "John",
      job: "teacher"
    }

const  switchKeysValues = (a)=>{
    let result = {};
    for(var key in a){
      result[a[key]] = key;
    }
    console.log(result)
  }

switchKeysValues(person2)
// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```
console.log("Task5: Return Keys and Values")


let a = { a: 1, b: 2, c: 3 };

const returnKeysValues = a =>
{let result3 = [];
result3 = [Object.keys(a),Object.values(a)];
console.log(result3)}

returnKeysValues(a)