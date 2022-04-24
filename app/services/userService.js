const User = require('./../models/user.js')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "noBio")
    }
}

module.exports = UserService