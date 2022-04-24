const User = require('./../models/user.js')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "noBio")
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio]
    }
}

module.exports = UserService