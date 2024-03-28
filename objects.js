// This is called Encapsulation
var userOne = {
    email: 'otas@gmail.com',
    name: 'Otas Love',
    login() {
        console.log(this.email,'has logged in!')
    },
    logout() {
        console.log(this.email,' has logged out!')
    }
}

// Add New Property to userOne
userOne.age = 25

console.log(userOne)

