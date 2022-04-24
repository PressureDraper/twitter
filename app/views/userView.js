const UserService = require('./../services/userService.js')

class UserView {
    
    static createUser(payload) {
        try {
            return new UserService(payload.id, payload.username, payload.name, "noBio")
        } catch (err) {
            console.log(err)
            return {error: "Payload doesn't exist"}
        }
    }
}

module.exports = UserView