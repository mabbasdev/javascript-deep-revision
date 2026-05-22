//! Find the maximum product of two numbers in an array
// const arr = [1, 2, 3, 4, 5, 6];

// function maxProduct(arr) {
//     let sortedArr = arr.sort((a, b) => (b - a));
//     return sortedArr[0] * sortedArr[1];

// }

// let result = maxProduct(arr);
// console.log(result)

//! Clear the array in a single line
// let arr = [1, 2, 3, 4, 5, 6];
// arr.length = 0
// console.log(arr)


//! Merge two objects

// let obj1 = {
//     name: "Abbas",
//     fname: "Zahid"
// }

// let obj2 = {
//     id: 2,
//     city: "Islamabad"
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

//? 2nd method: You can rearrange the objects
// const merged = Object.assign({}, obj1, obj2);

//! Is it possible to have keys with the same name in merged objects?
//? There should be no duplicate keys in the Object

//! Explain spread operators
//? Spread Operator: Takes an array (or an object) and unpacks/spreads its individual elements out into a list.
//? Rest Parameter: Collects multiple individual arguments and squashes them into a single array.
// Example
// let arr = [1, 2, 3];
// function outputFun(a, [...arr]) {
//     let result = `This is ${a} and this is array ${arr}`;
//     let result = typeof(arr);
//     return result;
// }

// console.log(outputFun("33", [...arr]))

//! Explain rest parameters
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
//? It is represented by three periods (...) followed by the name of the array you want to store those arguments in.
// Example:

// function outputFun(a, ...arr){
// let result = `This is ${a} and this is the rest parameters ${arr}`;
// let result = typeof(arr);
//     return result;
// }

// console.log(outputFun("Abbas", 1,23,424,44))

//! Explain CallBack Function
//? When a function is passed as an argument to another function,
//? which is then executed (or "called back") inside that outer function to complete an action.

//! What are the different scopes in JavaScript?
//? Scope determines the accessibility of variables, functions, and objects in some particular part of your code during runtime.
//? In other words, scope dictates what variables you have access to and where you can use them.
//? JavaScript has 4 main types of scope:
//? 1. Global Scope
//? 2. Function Scope
//? 3. Block Scope
//? 4. Module Scope

//! Difference between forEach and map
//? map() is for transformation. It changes the data and gives you a new array back.
//? forEach() is for action. It loops through the items to do a job (like logging or saving) and returns nothing (undefined).

// const numbers = [1, 2, 3];

// //? Modifying an external variable (Side effect)
// let total = 0;
// numbers.forEach(num => {
//   total += num;
// });

// console.log(total); // Output: 6

//? Map
// const numbers = [1, 2, 3];

// //? Transforming the data into a new array
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // Output: [2, 4, 6]
// console.log(numbers); // Output: [1, 2, 3] (Original is untouched!)



//! Explain prototype chain with example
//? The prototype chain is the mechanism JavaScript uses to handle inheritance,
//? allowing objects to share properties and methods.
//? Every object in JavaScript has an internal link to another object called its prototype.

// Example
// //? 1. Base object (Parent)
// const parent = {
//     greet: function () {
//         return "Hello from the parent!";
//     }
// };

// //? 2. Create child object with 'parent' as its prototype
// const child = Object.create(parent);

// //? 3. Accessing a property
// console.log(child.greet());
// Output: "Hello from the parent!"


//! Array Manipulation:
//? Filter an array to find elements greater than 40
// let arr = [10, 15, 20, 30, 40, 50, 60, 70];
// let element = arr.filter(elem=> elem > 40);
// console.log(element)

//? Separate characters and numbers into different arrays
// let arr = [10, 15, 20, 30, "c", "e", 40, "f", 50, 60, 70];
// let numArr = arr.filter(elem=>typeof(elem)=="number");
// let strArr = arr.filter(elem=>typeof(elem)=="string");
// console.log(strArr)
// console.log(numArr)

//! Reduce Method: An explanation and example of the .reduce() method

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((acc, curElem) => {
//     return acc + curElem;
// }, 0)

// console.log(totalPrice);


// const arr = [1, 2, 3, 4, 5 , 6];
// const result = arr.reduce((acc, curElem) => {
//     return acc + curElem;
// }, 0)
// console.log(result);

//! ReactJS:

//? DOM Comparison: Difference between the real DOM and the virtual DOM
// DOM Comparison: Real DOM vs. Virtual DOM
// Real DOM (Document Object Model): The actual HTML structure of your page. When a state changes, updating the Real DOM requires the browser to recalculate layouts, re-paint the UI, and re-render the page. This is historically a slow, expensive operation.
// Virtual DOM (VDOM): A lightweight, memory-resident copy of the Real DOM managed by React.
// How they interact: When state changes, React updates the Virtual DOM first. It then runs a process called reconciliation (diffing) to compare the new VDOM with a snapshot of the old one, calculates exactly what changed, and applies only those specific changes to the Real DOM in one efficient batch.

//? Hooks: Which hooks the candidate has used and an explanation of useEffect parameters and useState
//? Component Architecture: Explaining Higher-Order Components (HOC) and if they are familiar with Pure Components (13:54-14:23).
//? Data Flow: Can data be passed from child to parent components?

//! HTML & CSS:

//? HTML Basics: What are "empty elements" in HTML
//?How to merge rows or columns in a table using colspan and rowspan
//? CSS Selectors & Visibility: What is the universal selector
//? the difference between display: none and visibility: hidden1.
// HTML Basics: "Empty Elements"
// Empty elements (also called void elements) are HTML elements that cannot contain any child nodes, text, or nested tags. They only contain attributes and do not have a closing tag (like </tag>).

// Examples: <img>, <br> (line break), <hr> (horizontal rule), <input>, <meta>.

// 2. Merging Rows and Columns in HTML Tables
// colspan (Column Span): Merges cells horizontally across multiple columns.

// rowspan (Row Span): Merges cells vertically across multiple rows.

// HTML
// <th colspan="2">Phone Numbers</th>

// <td rowspan="2">Home Address</td>
// 3. CSS Selectors: The Universal Selector
// Represented by an asterisk (*), the universal selector targets and matches every single HTML element on a webpage simultaneously. It is most commonly used in CSS resets to strip default browser margins and set uniform box-sizing:

// CSS
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// 4. display: none vs. visibility: hidden
// While both hide an element from view, they interact with the document layout entirely differently:

// display: none: Completely removes the element from the page layout. It behaves as if the element does not exist in the HTML structure. Surrounding elements will shift to fill the empty gap.

// visibility: hidden: Acts like an invisibility cloak. The element becomes completely invisible, but it still takes up its original space in the layout. Surrounding elements will not move, leaving an empty blank square on the screen.

// Property	Visible?	Takes up space in layout?	Affects accessibility/screen readers?
// display: none	No	No	Hidden from screen readers
// visibility: hidden	No	Yes	Hidden from screen readers

//! Use while loop to sum number from 1 to 50

// let num = 1;
// let sum = 0;
// while (num <= 50) {
//     sum = sum + num;
//     console.log(sum);
//     num++;
// }

//! Use for...of to log each character of the string

// let str = "JavaScript";
// for (let char of str) {
//     console.log(char)
// }

//! Write a for loop that skips the even numbers from 1 to 20

// let num = 1
// for (let i = num; i <= 20; i++) {
//     if (i % 2 === 0) {
//     } else {
//         console.log(i);
//         i++
//     }
// }

//! print from 5 to 1 with do while loop

// let num = 5;

// do {
//     console.log(num);
//     num--;
// }
// while (num > 0)

//! calculate the factorial of a number using for loop

// let a = 5;
// let result = 1;
// for (let i = a; i > 0; i--) {
//     result = result * i;
// }
// console.log(result);

//! write a nested loop to print the grid of 3x3

// let a = 1;
// // let str = "";
// for (let i = 1; i < 4; i++) {
//     // console.log(a);
//     // str += `${a}`;
//     let str = "";
//     for (let j = 1; j < 4; j++) {
//         str += `${a} `;
//         a++
//     }
//     console.log(str)

// }

//! Use a for loop to reverse an array
// const arr = ["a", "b", "c", "d", "e"]
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
// }
// console.log(newArr)

//! Write a while loop that logs all the numbers from 1 to 100 divisible by 5
// let a = 1
// while (a < 101) {
//     if (a % 5 === 0 || a % 5 === 5) {
//         console.log(a);
//         a++
//     } else {
//         a++
//     }
// }

//! Write a for..in loop to iterate over an object and log its keys

// const obj1 = {
//     name: "Abbas",
//     age: 20,
//     subject: "CS"
// }

// for (let elem in obj1) {
//     console.log(elem);
// }

//! Create an array of your 5 favorite movies and log it.

// let a = ["superman", "batman", "spiderman", "ironman", "aquaman"]

//? using for...of loop
// for (let elem of a) {
//     console.log(elem);
// }

//? using forEach
// a.forEach((elem) => {
//     console.log(elem);
// })

//! Find and log the second element of the array
// let arr = [1, 2, 3, 4 , 5]
// console.log(arr[1])

//! Add two new elements to the start of the array using unshift

// let arr = [1, 2, 3, 4 , 5]
// console.log(arr.shift());
// console.log(arr.length);
// console.log(arr.unshift(222));
// console.log(arr);


//! Remove the last element of the array and log it
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.pop())
// console.log(arr)

//! Use Slice to extract the first 3 elements of the array
// let arr = [1, 2, 3, 4, 5]
// let result = arr.slice(0, 3)
// console.log(result)

//! Find the index of a specific element in the array
//? Using indexOf
// let arr = [1, 2, 3, 4, 5]
// let elem = 4
// let result = arr.indexOf(elem);
// console.log(result);


//! Check if the element exist in the array or not
// let elem = 4
// let arr = [1, 2, 3, 4, 5]
// let result = arr.includes(elem)
// console.log(result);


//! Combine two array using concat()
// let arr1 = [1, "2"]
// let arr2 = [3, 4]
// let result = arr1.concat(arr2)
// console.log(result);


// Sort the array in ascending order
// let arr = [5, 6, 3, 7, 88, 2]

// ? Ascending order
// let result = arr.sort((a, b) => a - b)

// ? Descending order
// let result = arr.sort((a, b) => b - a)
// console.log(result);

//! Write a code that creates a copy of an array without mutating the orignal

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [...arr, "apple", "mango"]
// console.log(arr);
// console.log(arr2);


//! Functions:
//! Write a function to check if the number is even or odd

// const checkStatus = (num) => {
//     if (num % 2 === 0) {
//         return "Even";
//     }
//     return "Odd";
// }

// console.log(checkStatus(10));


//! Calculate the area of circle with a given radius

// const circleArea = (r) => {
//     let area = Math.PI * Math.pow(r, 2)
//     return area.toFixed(2)
// }
// console.log(circleArea(2))


//! Write a function that accepts array and returns the sum of its elements
// const arr = [1, 2, 3, 4, 5, 6]
// let sum = 0
// function sumArr(arr) {
//     arr.forEach(element => {
//         sum = sum + element
//     });
//     return sum
// }
// console.log(`The sum of this array is: ${sumArr(arr)}`);


//! Check if the String starts with the specific character

// let string = "Abbas"
// let char = "Ab"
// function checkChar(input, str) {
//     let newStr = str.toLowerCase()
//     let newChar = char.toLowerCase();
//     if (newStr.startsWith(newChar)) {
//         return "Yes"
//     } else {
//         return "Np"
//     }

// }
// console.log(checkChar(char, string))


//! Write a function to find the maximum of two numbers

// function findMax(num1, num2) {
//     if (num1 > num2) { return num1 }
//     else if (num1 < num2) { return num1 }
//     else {
//         return "Both numbers are equal"
//     }
// }
// console.log(findMax(2, 2))

//! find the factorial of a given number
// let num = 4
// let fact = 1
// const factorial = (input) => {
//     for (let i = input; i > 0; i--) {
//         fact = fact * input
//         input--
//     }
//     return fact
// }

// console.log(factorial(num));


//! Reverse a string using function

// let str = "JavaScript is a Programming Language"
// let str2 = ""
// function revStr(inputStr) {
//? using reverse function
// return inputStr.split('').reverse().join('')

//? using for loop
// for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i]
// }
// return str2
// }

// console.log(revStr(str))


//! Write a program to reverse each word in the sentence

// let str = "Javascript is the king of programming"
// let strNew = ""
// function reverseKaro(string) {
//     strNew = string.split(' ').map(word => word.split('').reverse().join('')).join(" ")
//     return strNew
// }
// console.log(reverseKaro(str))

//! Create a function to find the largest number of the array

// let arr = [1, 3, 4, 5, 44, 6, 2, 0, 33]
// const findLarge = (arr) => {

//     let sortedArr = arr.sort((a, b) => b - a)

//     return sortedArr[0]
// }
// console.log(findLarge(arr))

//! Write a function the converts any string to kebab-case

// let str = "Is ka kebab bana do"
// let kebab = ""
// function banaoKebab(string) {
//     kebab = string.toLowerCase()
//     return kebab.split(" ").join("-")


// }

// console.log(banaoKebab(str))


//! Check if the object is array or not?

// let obj1 = {
//     name: "Abbas",
//     age: 20
// }
// let arr = [1, 2, 3]
// console.log(typeof (arr))
// console.log(typeof (obj1))
// if (Array.isArray(obj1)) {
//     console.log("Yes")
// } else {
//     console.log("NO")
// }

//! How to empty an array without using pop() and for loop to remove each value

// let arr = [1, 2, 3, 4, 5, 6]
// let result = (arr.length = 0)
// console.log(arr)

//! Check if it is integar or not
// let a = 3;

// const checkInt = (num) => {
//     if (Number.isInteger(num)) {
//         return "Yes"
//     }
//     return "No"
// }

// console.log(checkInt(a))

//! Duplicate the array like [1,2,3] => [1,2,3,1,2,3]
// let a = [1, 2, 3]
// console.log(a.concat(a))

//! Write a js function to reverse a number

let n = 32
const reverseKaro = (num) => {
    return num.toString().split("").reverse().join("").toNumber()
}
console.log(reverseKaro(n))