// Constructor Under the Hood
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function() {
        console.log(this.email, 'has logged in!')
    }
}

var userOne = new User('otavie@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')

console.log(userOne)
userTwo.login()