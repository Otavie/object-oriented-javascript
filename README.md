# Object Oriented JavaScript Lesson 9

This repository contains code for Lesson 9 of the Object Oriented JavaScript tutorial series. In this lesson, we cover the concept of prototypes in JavaScript.

## Overview

Prototypes in JavaScript allow objects to inherit properties and methods from other objects. They provide a way to share functionality between objects efficiently.

## Files

- `index.html`: HTML file for displaying the lesson content.
- `objects.js`: JavaScript file containing code demonstrating the use of prototypes.

## Usage

To run the code, simply open the `index.html` file in a web browser. This will execute the JavaScript code in `objects.js` and display the output in the browser's console.

## Code Explanation

- `User` Function Constructor: Defines a constructor function for creating user objects with email, name, and online status properties.
- `login` Method: Prototype method for logging in a user by setting the `online` property to `true`.
- `logout` Method: Prototype method for logging out a user by setting the `online` property to `false`.
- `userOne` and `userTwo` Objects: Instances of the `User` constructor demonstrating the use of prototypes.

