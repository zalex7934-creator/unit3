# JavaScript Arrays & Array Methods — Student Guide (Part 2)

*AP CSP: Programming in JavaScript*

In Part 1, you learned how to repeat code with `while` and `for` loops. Now let's apply that to one of the most useful data structures in programming: the **array** — a single variable that holds a whole *list* of values.

---

## 1. What Is an Array?

An array is an ordered list of values, stored in a single variable.

```js
const students = ["Charlie", "Olivia", "Rodney", "Bill", "London"];
```

Instead of creating five separate variables (`student1`, `student2`, ...), you store all five names together in one list, wrapped in square brackets `[ ]` and separated by commas.

### Indexing — How to Access One Item

Every item in an array has a position number called an **index**, starting at `0` (not `1`!).

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Value | "Charlie" | "Olivia" | "Rodney" | "Bill" | "London" |

```js
console.log(students[0]); // "Charlie"
console.log(students[2]); // "Rodney"
console.log(students[4]); // "London"
```

> **Why start at 0?** It trips everyone up at first — just remember: the *first* item is at index `0`, and the *last* item is at index `length - 1`.

### `.length` — How Many Items Are in the Array

```js
console.log(students.length); // 5
```

This is especially useful for loops, since it tells you exactly where the list ends.

---

## 2. Looping Through an Array with `for`

Here's where loops and arrays come together. This function prints every name in the `students` array:

```js
function printAll(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
printAll(students);
```

**Walking through it:**
- `i` starts at `0` and increases by 1 each pass (`i++`), just like any `for` loop.
- The condition `i < list.length` makes sure the loop stops exactly at the last valid index (since `list.length` is `5`, this stops after `i = 4`, which is correct — indexes only go up to `4`).
- `list[i]` uses the current value of `i` to grab that position out of the array.

This pattern — `for (let i = 0; i < arr.length; i++)` — is so common it's worth memorizing. It's the standard way to visit every item in an array, one at a time, using its index.

> ⚠️ **Off-by-one warning:** If you wrote `i <= list.length` instead of `i < list.length`, you'd try to access `list[5]` — which doesn't exist — and get `undefined`. Always use `<`, not `<=`, when looping by `.length`.

---

## 3. Arrow Functions (A Shorter Way to Write Functions)

Before we get to array *methods*, you need to recognize **arrow function** syntax, since almost all array methods use it.

```js
function add1(a, b) {
  return a + b;
}
console.log(add1(3, 4)); // 7

const add2 = (a, b) => a + b;
console.log(add2(3, 4)); // 7
```

`add1` and `add2` do the *exact same thing*. The arrow function `add2` is just a shorter way of writing a function:

| Regular function | Arrow function |
|---|---|
| `function add1(a, b) { return a + b; }` | `const add2 = (a, b) => a + b;` |

- Drop the `function` keyword, put `=>` (the "arrow") between the parameters and the body.
- If the function body is just **one expression**, you can drop the `{ }` and the `return` keyword — the value is returned automatically. This is called an **implicit return**.

```js
// These do the same thing:
const square = (n) => { return n * n; };  // explicit return, with { }
const square2 = (n) => n * n;             // implicit return, no { }
```

You'll see arrow functions constantly with array methods, usually written right inside the method call, like `(student) => console.log(student)`.

---

## 4. Array Methods — Built-In Shortcuts for Common Tasks

JavaScript arrays come with built-in **methods** — ready-made functions attached to every array — so you often don't need to hand-write a `for` loop at all. This is abstraction again: the method hides the looping details and lets you just describe *what* you want.

### `.forEach()` — Do Something With Every Item

```js
students.forEach((student) => console.log(student));
```

This does the same job as our `printAll` function above, but in one line. `.forEach()` runs the arrow function once for *every* item in the array, automatically passing in each item (here, named `student`) — no manual index or loop needed.

**Compare the two approaches:**
```js
// Manual for loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// .forEach()
students.forEach((student) => console.log(student));
```
Same result, but `.forEach()` is shorter and reads almost like English: "for each student, log the student."

### `.find()` — Get the First Item That Matches

```js
const found = students.find((student) => student == "Olivia");
console.log(found); // "Olivia"
```

`.find()` checks each item against your condition and returns the **first one** that matches. If nothing matches, it returns `undefined`. Think of it as "search the list and hand me back the one I'm looking for."

> Notice this uses `==` in the original code — for consistency with the comparison operators guide, prefer `===` in your own code: `student === "Olivia"`.

### `.filter()` — Get *All* Items That Match

```js
let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbs.filter((el) => el % 2 == 0);
console.log(even); // [2, 4, 6, 8, 10]
```

While `.find()` gives you one match, `.filter()` gives you a **brand new array** containing *every* item that passes the test. Here, `el % 2 == 0` checks if a number is even, so `even` ends up holding only the even numbers from `numbs`.

### `.find()` vs. `.filter()` — Key Difference

| | Returns | Example use |
|---|---|---|
| `.find()` | The **first** matching item (or `undefined`) | "Find the student named Olivia" |
| `.filter()` | A **new array** of *all* matching items | "Get every even number in this list" |

---

## 5. Bonus: A Few More Array Methods Worth Knowing

These aren't in your file, but they're used constantly alongside `.forEach()`, `.find()`, and `.filter()`:

### `.map()` — Transform Every Item Into Something New

```js
const numbs = [1, 2, 3, 4, 5];
const doubled = numbs.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

`.map()` is like `.forEach()`, but instead of just *doing* something with each item, it **builds a new array** out of whatever your arrow function returns for each item.

### `.push()` and `.pop()` — Add or Remove From the End

```js
students.push("Maria");   // adds "Maria" to the end
console.log(students);    // [...original students, "Maria"]

students.pop();            // removes the last item
console.log(students);     // back to the original list
```

### `for...of` — Another Way to Loop Through an Array

```js
for (const student of students) {
  console.log(student);
}
```

This is a cleaner alternative to the index-based `for` loop when you don't actually need the index number — just the values themselves.

---

## 6. Quick Reference

```js
const arr = [10, 20, 30];

arr[0];              // access by index → 10
arr.length;           // number of items → 3

// Manual for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of loop
for (const item of arr) {
  console.log(item);
}

arr.forEach((item) => console.log(item));      // do something with each item
arr.find((item) => item > 15);                  // first match → 20
arr.filter((item) => item > 15);                // all matches → [20, 30]
arr.map((item) => item * 2);                    // new array → [20, 40, 60]
arr.push(40);                                    // add to end
arr.pop();                                       // remove from end
```

| Method | Returns | Use it when... |
|---|---|---|
| `.forEach()` | `undefined` (just runs code) | You want to *do something* with each item (print, log, etc.) |
| `.find()` | One item (or `undefined`) | You want the *first* item matching a condition |
| `.filter()` | A new, shorter array | You want *every* item matching a condition |
| `.map()` | A new, same-length array | You want to *transform* every item into something new |

---

## 7. Try It Yourself

1. Create an array of your five favorite movies. Print each one using a `for` loop, then again using `.forEach()`.
2. Given `const grades = [85, 92, 78, 90, 60, 100];`, use `.filter()` to get every grade of 90 or above.
3. Use `.find()` on the `grades` array to get the first grade below 70.
4. Use `.map()` to create a new array that adds 5 bonus points to every grade in `grades`.
5. Rewrite `printAll(list)` from this guide using `for...of` instead of a manual index-based `for` loop.
6. Challenge: combine methods! Use `.filter()` to get every even number from `[1..20]`, then `.map()` to square each of those numbers.

---

## 8. Key Vocabulary

| Term | Meaning |
|---|---|
| **array** | An ordered list of values stored in one variable |
| **index** | A value's position in an array, starting at `0` |
| **element** | A single value/item stored inside an array |
| **`.length`** | A property that tells you how many items are in an array |
| **arrow function** | A shorthand way to write a function using `=>` |
| **implicit return** | Returning a value automatically, without the `return` keyword, in a one-line arrow function |
| **array method** | A built-in function attached to arrays (`.forEach()`, `.find()`, `.filter()`, `.map()`, etc.) |
| **callback function** | A function passed *into* another function (like the arrow function you give to `.forEach()`) to be run for each item |
