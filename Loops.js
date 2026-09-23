// ==========================================================
// AP CSP — JavaScript: Loops & Iteration
// practice_04_loops.js
//
// Complete each TODO below. Run this file (node practice_04_loops.js)
// and check the console output against the expected results in the comments.
// ==========================================================


// ---------- Problem 1: Range Builder ----------
// Return an array of every integer from start to end, inclusive.
// Use a for loop and .push() to build the array one number at a time.
function getNumbersInRange(start, end) {
  // TODO: your code here

}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]


// ---------- Problem 2: Sum a Range ----------
// Return the sum of every integer from start to end, inclusive.
// Use the accumulator pattern: let total = 0; total += i; each pass.
function sumRange(start, end) {
  // TODO: your code here

}

console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4


// ---------- Problem 3: Countdown ----------
// Return an array counting down from n to 1.
// Use a while loop, not a for loop.
function countdown(n) {
  // TODO: your code here

}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]


// ---------- Problem 4: Count the Vowels ----------
// Return the number of vowels (a, e, i, o, u — lowercase only) in str.
// Loop through every index of the string and use an if statement to
// check whether that character is a vowel. Access a character with
// str[i] or str.charAt(i).
function countVowels(str) {
  // TODO: your code here

}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5


// ---------- Problem 5: Multiplication Table ----------
// Return a string showing the multiplication table from 1 to n,
// one row per line (rows separated by "\n"). Each row shows n
// products separated by spaces. Needs a loop inside a loop —
// build each row as its own string before adding it to the result.
function multiplicationTable(n) {
  // TODO: your code here

}

console.log(multiplicationTable(3));
// "1 2 3\n2 4 6\n3 6 9"
console.log(multiplicationTable(5));


// ---------- Problem 6: Primes Under a Limit ----------
// Return an array of every prime number less than limit.
// A prime number is greater than 1 and has no divisors other
// than 1 and itself. For each candidate number, loop from 2 up
// to (but not including) that number and check
// candidate % divisor === 0. A boolean flag that flips to false
// when a divisor is found works well here.
function primesUnder(limit) {
  // TODO: your code here

}

console.log(primesUnder(10)); // [2, 3, 5, 7]
console.log(primesUnder(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(primesUnder(2));  // []


// ---------- Stretch (optional) ----------
// Rewrite multiplicationTable so it uses break or continue to skip
// printing the row where the row number equals the column number
// (the diagonal).
function multiplicationTableSkipDiagonal(n) {
  // TODO: your code here

}

console.log(multiplicationTableSkipDiagonal(3));
