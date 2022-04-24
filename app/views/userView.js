const UserService = require('./../services/userService.js')

class UserView {
    
    static createUser(payload) {
        try {
            return new UserService(payload.id, payload.username, payload.name)
        } catch (err) {
            if (err == "TypeError: Cannot read property 'id' of null") {
                return {error: "Payload doesn't exist"}
            }
        }
    }

    static createUser2(payload) {
        if (typeof payload.id === 'number' ){
            return new UserService(payload.id, payload.username, payload.name)
        } else {
            return {error: "Payload needs to have valid values"}
        }
    }

    static createUser3(payload) {
        if (payload.name != undefined){
            return new UserService(payload.id, payload.username, payload.name)
        } else {
            return {error: "Needs to fill all properties"}
        }
    }

    static createUser4(payload) {
        console.log(payload.id)
        return UserService.create(payload.id, payload.username, payload.name)
    }
}

module.exports = UserView