# Object Oriented JavaScript Lesson 10

This repository contains code for Lesson 10 on Prototype Inheritance in Object Oriented JavaScript.

## Overview

In this lesson, we explore prototype inheritance in JavaScript. Prototype inheritance allows objects to inherit properties and methods from other objects.

## Files

- **index.html**: The HTML file that includes the JavaScript file `objects.js`.
- **objects.js**: Contains the JavaScript code demonstrating prototype inheritance.

## Usage

Simply open the `index.html` file in a web browser to view the demonstration of prototype inheritance in action. The JavaScript code in `objects.js` creates instances of the `User` and `Admin` classes and demonstrates how prototype inheritance works.

## Code Explanation

- `User`: Constructor function for creating user objects with email, name, and online status properties. It also contains methods for logging in and logging out.
- `Admin`: Constructor function that inherits from `User`. It adds an additional property `role` and a method `deleteUser` to delete a user from the system.
- `User.prototype.login`: Method to set the online status of a user to `true` and log a message indicating that the user has logged in.
- `User.prototype.logout`: Method to set the online status of a user to `false` and log a message indicating that the user has logged out.
- `Admin.prototype`: Inherits from `User.prototype` to allow `Admin` objects to access the `login` and `logout` methods. Additionally, it defines the `deleteUser` method to remove a user from the `users` array.
