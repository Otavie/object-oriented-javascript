# Object Oriented JavaScript Lesson 6 - Method Chaining

This branch of the project demonstrates the concept of method chaining in Object-Oriented JavaScript. Method chaining allows you to call multiple methods on an object in a single line, improving code readability and conciseness.

## Files Included

- **index.html:** This HTML file serves as the entry point for the lesson. It contains a simple HTML structure with a title and includes the `objects.js` script.
- **objects.js:** The `objects.js` file contains the JavaScript code demonstrating method chaining. It defines a `User` class with methods for logging in, logging out, and updating the user's score. The `User` class showcases how method chaining can be used to perform multiple operations on a user object in a single line.

## Usage

To run the code and see the demonstration of method chaining:

1. Open the `index.html` file in a web browser.
2. Open the browser's developer console to view the output.
3. The script will create two user objects (`userOne` and `userTwo`) and demonstrate method chaining by logging in, updating the score multiple times, and logging out.

## Example

```javascript
// Method Chaining

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in");
    return this;
  }

  logout() {
    console.log(this.email, "just logged out!");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

var userOne = new User("otavieokuoyo@gmail.com", "Otavie");
var userTwo = new User("peace@gmail.com", "Peace");

// Method chaining example
userOne
  .login()
  .updateScore()
  .updateScore()
  .updateScore()
  .updateScore()
  .logout();
```

## About Method Chaining

Method chaining in JavaScript allows you to call multiple methods on an object in sequence, each modifying the object in some way and returning the object itself. This enables concise and readable code by combining multiple operations into a single expression.

**Note:** Method chaining can improve code readability and maintainability, but it should be used judiciously to avoid excessive chaining, which can lead to complex and hard-to-understand code.
