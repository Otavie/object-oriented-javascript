class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login () {
        console.log(this.email, 'just logged in')
    }
    logout() {
        console.log(this.email, 'just logged out!')
    }
}


var userOne = new User('otavieokuoyo@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')

userOne.logout()
userTwo.login()