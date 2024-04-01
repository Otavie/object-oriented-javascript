# Object Oriented JavaScript Lesson 7

This branch (`lesson-7-class-inheritance`) of the "Object Oriented JavaScript" tutorial covers the topic of class inheritance in JavaScript. In this lesson, we explore how to create subclasses that inherit properties and methods from parent classes.

## Files

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OO JS Lesson 7</title>
    <style>
        h1 {
            text-align: center;
            color: #444;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            margin: 60px auto;
        }
    </style>
</head>
<body>
    <h1>Object Oriented JavaScript Lesson 7</h1>

    <script src="./objects.js"></script>
</body>
</html>
```

### `objects.js`

```javascript
// Class Inheritance

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out!');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(userParam) {
        users = users.filter((user) => {
            return user.email !== userParam.email;
        });
    }
}

var userOne = new User('otavie@gmail.com', 'Otavie');
var userTwo = new User('peace@gmail.com', 'Peace');
var admin = new Admin('otavieokuoyo@gmail.com', 'Otavie Okuoyo');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);
```

## Description

In this lesson, we learn about class inheritance in JavaScript. We have two classes:
- `User`: Represents a generic user with basic properties and methods like login, logout, and updating the score.
- `Admin`: Extends the `User` class and adds additional functionality specific to administrative users, such as deleting users from the system.

We create instances of both `User` and `Admin` classes and demonstrate how inheritance works by accessing methods and properties inherited from the parent class (`User`).

## Usage

To view the demonstration of class inheritance in action, open the `index.html` file in a web browser. The JavaScript code in `objects.js` will be executed, and the results will be displayed in the browser's developer console.

## Important Note

Make sure to have the `objects.js` file included in the `index.html` file to execute the JavaScript code properly.