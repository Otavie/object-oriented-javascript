# Object Oriented JavaScript Lesson 8

This branch, **lesson-8-constructors-under-the-hood**, focuses on understanding constructors in JavaScript under the hood. It provides an exploration of how constructors work and how objects are created using constructors.

## Overview

In this lesson, we delve into the concept of constructors in JavaScript and how they are used to create objects. The `User` constructor is used as an example to demonstrate the creation of objects in JavaScript using constructors.

## Contents

- `index.html`: HTML file for displaying the lesson content.
- `objects.js`: JavaScript file containing the code for the lesson.

## Instructions

To explore the lesson:

1. Clone the repository.
2. Checkout the branch `lesson-8-constructors-under-the-hood`.
3. Open `index.html` in a web browser to view the lesson output.
4. Review the `objects.js` file to understand the JavaScript code.

## Lesson Details

### Constructor Under the Hood

The `User` constructor is defined in the `objects.js` file. It takes two parameters: `email` and `name`. The constructor creates instances of users with the provided email and name, setting the `online` status to `false` by default.

```javascript
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function() {
        console.log(this.email, 'has logged in!')
    }
}
```

Two user instances, `userOne` and `userTwo`, are created using the `User` constructor with different email and name values.

```javascript
var userOne = new User('otavie@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')
```

The `login` method is defined within the constructor to log a message indicating that a user has logged in.

```javascript
this.login = function() {
    console.log(this.email, 'has logged in!')
}
```

## Usage

This lesson provides insights into how constructors are used in JavaScript to create objects and introduces the concept of object-oriented programming (OOP) in JavaScript.
