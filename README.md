# Object Oriented JavaScript Lesson 2 - Updating Properties

This branch contains the code for the second lesson of the Object Oriented JavaScript tutorial series. In this lesson, we explore how to update properties of JavaScript objects.

## Files

### index.html

The `index.html` file serves as the entry point for the lesson. It includes a simple HTML structure with a title and a `<script>` tag linking to the `objects.js` file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OO JS Lesson 2</title>
    <style>
      h1 {
        text-align: center;
        color: #444;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        margin: 60px auto;
      }
    </style>
  </head>
  <body>
    <h1>Object Oriented JavaScript Lesson 2</h1>

    <script src="./objects.js"></script>
  </body>
</html>
```

### objects.js

The `objects.js` file contains JavaScript code demonstrating object-oriented concepts. Specifically, it demonstrates encapsulation and updating properties of an object.

```javascript
// This is called Encapsulation
var userOne = {
  email: "otas@gmail.com",
  name: "Otas Love",
  login() {
    console.log(this.email, "has logged in!");
  },
  logout() {
    console.log(this.email, " has logged out!");
  },
};

// Add New Property to userOne
userOne.age = 25;
userOne.address = "Lagos";

console.log(userOne);
```

In this file:

- An object `userOne` is defined with properties `email` and `name`, along with methods `login()` and `logout()`.
- New properties `age` and `address` are added to the `userOne` object.
- The updated `userOne` object is logged to the console.

## Usage

To view the lesson, simply open the `index.html` file in a web browser. This will execute the JavaScript code contained in `objects.js`, demonstrating the concepts covered in Lesson 2.
