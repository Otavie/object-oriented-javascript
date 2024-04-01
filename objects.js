// Prototype
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true
    console.log(this.email, 'has logged in!')
}

User.prototype.logout = function() {
    this.online = false
    console.log(this.email, 'has logged out!')
}

var userOne = new User('otavie@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')

console.log(userOne)
userTwo.login()