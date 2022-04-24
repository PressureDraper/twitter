const UserView = require('./../../app/views/userView.js')

describe('Test for UserView', () => {
    test("1) Returning error object when trying to create a new user with null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/Payload doesn't exist/)
    })
}) 