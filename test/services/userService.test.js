const UserService = require('./../../app/services/userService')

describe('Test for UserService', () => {
    test("1) Create a new user from UserService", () => {
        const user = UserService.create(1, "PressureDraper", "Sahib")

        expect(user.username).toBe("PressureDraper")
        expect(user.name).toBe("Sahib")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
}) 