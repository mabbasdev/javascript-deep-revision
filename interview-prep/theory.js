//! 1. Primitive vs. Non-Primitive Data Types
//? Primitive types: These are immutable (unchangeable) values stored directly in the stack memory by value. JavaScript has 7 primitive types: Number, String, Boolean, Undefined, Null, Symbol, and BigInt.

//? Non-Primitive types (Reference types): These are mutable objects that can store collections of data. They are stored in the heap memory, and variables hold a reference (pointer) to that memory location.

//? Examples: Object, Array, Function.

//! 2. Difference between var, let, and const
//? var: Function-scoped. It can be redeclared and reassigned. It is hoisted and initialized as undefined.

//? let: Block-scoped (contained within {}). It cannot be redeclared in the same scope, but it can be reassigned. It is hoisted but not initialized (lives in the Temporal Dead Zone).

//? const: Block-scoped. It cannot be redeclared or reassigned. It requires an initial value upon declaration. (Note: If it holds an object or array, the properties/elements inside can still be modified).

// Example
// var x = 1; var x = 2; // Allowed
// let y = 1; y = 2;     // Allowed reassignment
// const z = 1; z = 2;   // TypeError: Assignment to constant variable

//! 3. What is Hoisting? Why does var behave differently?
//? Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope before code execution.

//? var is hoisted and immediately initialized with a value of undefined. This means you can reference a var variable before its line of declaration without throwing an error.

//? let and const are also hoisted, but they are not initialized. They sit in a "Temporal Dead Zone" (TDZ) from the start of the block until the line they are declared. Accessing them early throws a ReferenceError.

//! 4. Difference between null and undefined
//? undefined: Means a variable has been declared, but has not yet been assigned a value. It is JavaScript's default placeholder. (typeof undefined // "undefined").

//? null: Is an intentional assignment representing the complete absence of any object value. It is explicitly set by the programmer. (typeof null // "object" — this is a historic JavaScript bug).

//! 5. Why does typeof NaN return "number"?
//? NaN stands for Not-a-Number. In the ECMAScript specifications, NaN is technically defined as a special numeric value belonging to the global Number type (specifically representing an undefined or unrepresentable numerical result, like 0 / 0). Therefore, typeof NaN logically returns "number".

//! 6. How this works in Global Scope vs. a Function
//? The value of the this keyword is determined by how a function is called (its execution context):

//? In the global scope: Outside of any function, this refers to the global object (which is the window object in browsers).

//? Inside a regular function: If the function is called normally (e.g., foo()), this still refers to the global object (or undefined if you are running in 'use strict' mode). If the function is a method inside an object (e.g., obj.foo()), this refers to the object itself.

//! 7. Output of "5" + 3 and "5" - 3 (Type Coercion)
//? "5" + 3 outputs "53": The + operator triggers string concatenation when one operand is a string. The number 3 is coerced into the string "3".

//? "5" - 3 outputs 2: The - operator only exists for mathematical subtraction. JavaScript implicitly coerces the string "5" into the numeric value 5 to perform the math operation.

//! 8. How to check if a variable is an Array
//? Because arrays are technically specialized objects in JavaScript, using typeof myArr will simply return "object". To accurately check if a variable is a true array, use the built-in method:

// const list = [1, 2, 3];
// console.log(Array.isArray(list)); // Returns: true

//! 9. Difference between == and ===
//? == (Loose Equality / Abstract Equality): Compares two values for equality after performing type coercion if their data types are different. (e.g., 5 == "5" is true).

//? === (Strict Equality): Compares both the value and the data type without changing them. If the types are different, it immediately returns false. (e.g., 5 === "5" is false).

//! 10. How to Create and Invoke a Function
//? You can create a function using a Function Declaration:


// Creation
// function sayHello(name) {
//    return `Hello ${name}!`;
// }

// Invocation (Calling it)
// const greeting = sayHello("Alex"); 
// console.log(greeting); // Output: "Hello Alex!"

//? (Alternatively, you can create them via Function Expressions:
// const sayHello = function() {}
// Arrow Functions: const sayHello = () => {})