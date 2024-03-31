class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('otavieokuoyo@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')

// The 'new' keyword 
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method