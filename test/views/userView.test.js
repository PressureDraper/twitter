const UserView = require('./../../app/views/userView.js')

describe('Test for UserView', () => {
    test("1) Returning error object when trying to create a new user with null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/Payload doesn't exist/)
    })
    test("2) Returning error object when trying to create a new user with a payload with invalid properties", () => {
        const payload = {id: "id", username: null, name: 12}
        const result = UserView.createUser2(payload)

        expect(result.error).toMatch(/Payload needs to have valid values/)
    })
    test("3) Returning error object when trying to create a new user with a payload with missing properties", () => {
        const payload = {username: "username"}
        const result = UserView.createUser3(payload)

        expect(result.error).toMatch(/Needs to fill all properties/)
    })
    test("4) Create user by given a valid payload", () => {
        const payload = {id: 1, username: "username", name: "name"}
        const result = UserView.createUser4(payload)

        expect(result.id).toBe(1)
        expect(result.username).toBe("username")
        expect(result.name).toBe("name")
    })
}) 