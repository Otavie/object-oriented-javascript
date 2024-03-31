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