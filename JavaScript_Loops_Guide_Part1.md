# JavaScript Loops — Student Guide (Part 1: `while` & `for`)

*AP CSP: Programming in JavaScript*

So far you've learned how to store data (variables), make decisions (conditionals), and organize code into reusable blocks (functions). But what if you need to **repeat** an action — print something 100 times, count down from 5, or keep asking a question until someone answers correctly? Retyping the same line over and over would be a nightmare. That's what **loops** are for.

> **Note:** This guide covers `while` and `for` loops only. Looping over **arrays/lists** specifically (`for...of`, `.forEach()`, `.find()`, `.filter()`, etc.) gets its own guide, since arrays deserve focused attention.

---

## 1. Why Loops? The Problem They Solve

Imagine you wanted to print "Hello!" five times without a loop:

```js
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
```

This works, but it's repetitive, hard to change (what if you needed 500?), and error-prone. A loop lets you say "do this, some number of times" in just a few lines:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello!");
}
```

This is the same **abstraction** idea from functions — instead of manually repeating instructions, you describe the repeating *pattern* once and let the computer handle the repetition.

---

## 2. The `while` Loop

A `while` loop keeps running its block of code **as long as** a condition stays `true`. It checks the condition *before* each pass through the loop.

```js
let number = 5;

while (number > 0) {
  console.log("Countdown: " + number);
  number--; // subtract 1 each time
}
console.log("Blast off!");
```

**Walking through it:**
1. Check: is `number > 0`? `number` is `5`, so yes → run the loop body.
2. Print `"Countdown: 5"`, then `number--` shrinks `number` to `4`.
3. Check again: is `4 > 0`? Yes → repeat.
4. This keeps going... `5, 4, 3, 2, 1`... until `number` becomes `0`.
5. Check: is `0 > 0`? No → **stop** the loop and move to the next line, `"Blast off!"`.

**Output:**
```
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1
Blast off!
```

### The Anatomy of a `while` Loop

```js
while (condition) {
  // code that runs each time condition is true
  // something in here MUST eventually make condition false!
}
```

> ⚠️ **The #1 `while` loop bug: infinite loops.** If nothing inside the loop ever changes the condition, it never becomes `false`, and your program will run forever (and probably crash your browser or terminal). In the countdown example, `number--` is what eventually makes `number > 0` false. Always make sure your loop has a way *out*.

### Real Example: Looping Until a Valid Answer

```js
let answer = "";
while (answer !== "yes") {
  answer = prompt("Do you want to play? (type yes to start)");
}
console.log("Game starting...");
```

This is a great real-world use of `while`: you don't know **in advance** how many times the user will need to be asked — maybe they type "no" three times before finally typing "yes." The loop just keeps asking until the condition (`answer !== "yes"`) becomes false. This is the key difference from a `for` loop below: **use `while` when you don't know ahead of time how many repetitions you need.**

*(Quick note: `prompt()` is a browser-only function that pops up a text box — it won't work in Node.js/the terminal. You'll mostly see it in browser-based JS examples like this one.)*

---

## 3. The `do...while` Loop (A Close Cousin)

A regular `while` loop checks its condition *before* running the body — which means if the condition starts out `false`, the loop body never runs at all. A `do...while` loop flips that: it runs the body **first**, then checks the condition. This guarantees the code runs **at least once**.

```js
let answer;
do {
  answer = prompt("Do you want to play? (type yes to start)");
} while (answer !== "yes");
```

Same basic idea as our countdown example, but useful when you want to guarantee the action happens at least one time before checking anything.

---

## 4. The `for` Loop

A `for` loop is the go-to choice when you know (or can calculate) **exactly how many times** you want to repeat something — like counting from 2 up to some number.

```js
function getGCF(x, y) {
  let num = Math.min(x, y);
  let factor = 0;
  for (let i = 2; i < num; i++) {
    if (x % i === 0 && y % i === 0) {
      factor = i;
    }
  }
  return factor;
}
console.log(getGCF(12, 15));
```

### The Anatomy of a `for` Loop

A `for` loop packs three things into its parentheses, separated by semicolons:

```js
for (initialization; condition; update) {
  // code that runs each pass
}
```

Using the GCF example's `for (let i = 2; i < num; i++)`:

| Part | Code | Meaning |
|---|---|---|
| **Initialization** | `let i = 2` | Runs **once**, before the loop starts. Creates a counter variable. |
| **Condition** | `i < num` | Checked **before every pass**. Loop keeps running while this is `true`. |
| **Update** | `i++` | Runs **after every pass** through the body. Usually increases (or decreases) the counter. |

`i++` is shorthand for `i = i + 1`. You'll also see `i--` (subtract 1), or `i += 2` (add 2 each time) for other step sizes.

### Tracing `getGCF(12, 15)` Step by Step

This function finds the **Greatest Common Factor** of two numbers — the largest number that divides evenly into both.

1. `num = Math.min(12, 15)` → `num = 12`
2. `factor = 0` (starts at 0 — "no factor found yet")
3. Loop starts at `i = 2`, runs while `i < 12`:

| `i` | `12 % i === 0`? | `15 % i === 0`? | Both true? | `factor` updated? |
|---|---|---|---|---|
| 2 | yes | no | no | stays 0 |
| 3 | yes | yes | **yes** | `factor = 3` |
| 4 | yes | no | no | stays 3 |
| 5 | no | yes | no | stays 3 |
| 6 | yes | no | no | stays 3 |
| ... | ... | ... | ... | stays 3 |

By the time `i` reaches `12`, the loop condition `i < 12` is false, so it stops. The function `return`s `3` — the largest shared factor it found along the way.

This is a great example of combining everything you've learned: a **function** with **parameters**, a **loop** doing repeated work, and a **conditional** inside the loop deciding what counts.

---

## 5. `while` vs. `for` — Which One Do I Use?

| Use `while` when... | Use `for` when... |
|---|---|
| You don't know in advance how many times you'll repeat | You know (or can calculate) exactly how many times to repeat |
| You're repeating "until something happens" (like a valid user answer) | You're counting through a range of numbers |
| The stopping condition depends on something happening *inside* the loop unpredictably | The stopping condition is a simple counter comparison |

Both loops can technically do the same jobs — it's mostly about picking whichever one makes your intention clearest to a reader.

---

## 6. Loop Control: `break` and `continue`

Sometimes you need to change a loop's flow *before* its natural end.

- **`break`** — immediately exits the loop entirely, no matter what the condition says.
- **`continue`** — skips the rest of the current pass and jumps straight to the next one.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stop the loop completely once i hits 5
  }
  console.log(i);
}
// Output: 1 2 3 4
```

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip printing 3, but keep looping
  }
  console.log(i);
}
// Output: 1 2 4 5
```

You saw `break` already in the `switch` statement from the conditionals guide — it's the same keyword, same "stop right here" idea.

---

## 7. Common Loop Bugs to Watch For

| Bug | What it looks like | Fix |
|---|---|---|
| **Infinite loop** | Program never stops / freezes | Make sure the condition variable actually changes inside the loop |
| **Off-by-one error** | Loop runs one time too many or too few | Double-check `<` vs. `<=` in your condition |
| **Wrong starting value** | Loop skips a value you needed | Check your initialization (`i = 0` vs. `i = 1`, etc.) |

---

## 8. Quick Reference

```js
// while loop — repeat until condition is false
while (condition) {
  // body
}

// do...while loop — runs body at least once
do {
  // body
} while (condition);

// for loop — repeat a known number of times
for (let i = 0; i < n; i++) {
  // body
}

// loop control
break;     // exit the loop immediately
continue;  // skip to the next pass
```

---

## 9. Try It Yourself

1. Write a `while` loop that prints every multiple of 3 from 3 up to 30.
2. Write a `for` loop that prints the numbers 10 down to 1 (a countdown, but using `for` instead of `while`).
3. Modify the `getGCF` function to also print every common factor it finds along the way, not just the greatest one.
4. Write a `for` loop from 1 to 20 that uses `continue` to skip printing any number divisible by 5.
5. Write a `while` loop that keeps generating a random number (`Math.random()`) until it produces a number greater than `0.9`. (Hint: this is another "don't know how many times in advance" situation — perfect for `while`.)

---

## 10. Key Vocabulary

| Term | Meaning |
|---|---|
| **loop** | A structure that repeats a block of code |
| **iteration** | One single pass/repetition through a loop |
| **condition** | The Boolean expression a loop checks to decide whether to keep going |
| **counter variable** | A variable (often `i`) used to track how many times a loop has run |
| **infinite loop** | A loop whose condition never becomes false — it never stops |
| **increment** | Increasing a value, usually by 1 (`i++`) |
| **decrement** | Decreasing a value, usually by 1 (`i--`) |
| **break** | A keyword that exits a loop immediately |
| **continue** | A keyword that skips the rest of the current iteration and moves to the next one |
