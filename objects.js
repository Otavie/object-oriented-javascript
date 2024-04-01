// Class Inheritance

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0
    }
    login () {
        console.log(this.email, 'just logged in')
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out!')
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this;
    }
}

class Admin extends User {
    deleteUser(userParam) {
        users = users.filter((user) => {
            return user.email !== userParam.email
        })
    }
}


var userOne = new User('otavie@gmail.com', 'Otavie')
var userTwo = new User('peace@gmail.com', 'Peace')
var admin = new Admin('otavieokuoyo@gmail.com', 'Otavie Okuoyo')

var users = [userOne, userTwo, admin]


admin.deleteUser(userOne)

console.log(users)