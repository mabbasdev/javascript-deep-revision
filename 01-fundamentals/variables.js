/* ============================================================
   JAVASCRIPT VARIABLES & VALUES — DEEP REVISION NOTES
   ============================================================
   Topics  : Values, Variables, Naming Rules & Conventions
   ============================================================ */

/*
TABLE OF CONTENTS
─────────────────────────────────────────────────────────────
  1.  What Are Values?
  2.  What Are Variables?
  3.  Declaring Variables with var
  4.  Variable Naming Rules
  5.  Valid vs Invalid Variable Names (Test Cases)
  6.  What's Next
─────────────────────────────────────────────────────────────
*/

/* ============================================================
   1. WHAT ARE VALUES?
   ============================================================
   A value is a piece of data that a program works with. Values
   can represent many things: a number, a piece of text, a
   true/false flag, or more complex structures like objects.

   Examples of values: 42, "hello", true, null
   ============================================================ */

/* ============================================================
   2. WHAT ARE VARIABLES?
   ============================================================
   A variable is a named container that stores a value. You
   assign a value to a variable once, and then reference that
   variable by name throughout your code instead of repeating
   the raw value.

   Think of a variable as a labeled box: the label is the name,
   and whatever is inside the box is the value.
   ============================================================ */

// --- Basic Example ---
// var myAge = 30;
// console.log(myAge); // Output: 30

/* ============================================================
   3. DECLARING VARIABLES WITH var
   ============================================================
   In JavaScript, the var keyword declares a variable and
   optionally assigns it a value. Variables declared with var
   are function-scoped (not block-scoped).

   Key Insight:
   Modern JavaScript (ES6+) introduced let and const as
   preferred alternatives to var. Use let for values that
   change, and const for values that should not be reassigned.
   ============================================================ */

// console.log("Welcome to JavaScript!");

// var myAge = 30;
// console.log(myAge);

/* ============================================================
   4. VARIABLE NAMING RULES
   ============================================================
   JavaScript variable names must follow these rules:

   ✅ Can start with: a letter (a–z, A–Z), underscore (_),
      or dollar sign ($)
   ✅ Can contain: letters, digits (0–9), underscores, dollar signs
   ❌ Cannot start with a digit
   ❌ Cannot contain special characters like @, !, -, spaces, etc.
   ❌ Cannot be a reserved keyword (e.g., var, let, if, return)

   Convention: Use camelCase for variable names in JavaScript.
   Example: myFirstName, userAge, totalPrice
   ============================================================ */

/* ============================================================
   5. VALID vs INVALID VARIABLE NAMES — TEST CASES
   ============================================================
   Study these examples carefully. Naming errors are one of
   the most common syntax mistakes for beginners.
   ============================================================ */

// --- ✅ Valid: camelCase with underscore ---
var my_firstName = "John";
// Starts with a letter. Contains letters and an underscore. Valid.

// --- ✅ Valid: Starts with underscore, ends with dollar sign ---
var _myLastName$ = "Doe";
// Starts with an underscore. Contains letters and a dollar sign. Valid.

// --- ❌ Invalid: Starts with a digit ---
// var 123myAge = 25;
// ⚠️ SyntaxError — variable names cannot begin with a number.

// --- ✅ Valid: Starts with dollar sign ---
var $cityName = "New York";
// The dollar sign ($) is a legal starting character. Valid.

// --- ❌ Invalid: Contains @ symbol ---
// var my@Email = "john@example.com";
// ⚠️ SyntaxError — @ is not an allowed character in variable names.
// Only letters, digits, underscores, and dollar signs are permitted.

/* ============================================================
   🚀 6. WHAT'S NEXT?
   ============================================================
   Now that you understand how values and variables work,
   the next step is learning what kinds of values JavaScript
   can actually store:

   ✅ Data Types          — Numbers, strings, booleans, null, undefined, BigInt, Symbol
   ✅ typeof Operator     — Checking the type of any value at runtime
   ✅ Truthy & Falsy      — How JavaScript evaluates values in boolean contexts
   ✅ Type Conversion     — parseInt, parseFloat, Number(), String()

   Next File → datatypes.js
   ============================================================ */
