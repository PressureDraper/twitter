const UserService = require('./../../app/services/userService')

describe('Test for UserService', () => {
    test("1) Create a new user from UserService", () => {
        const user = UserService.create(1, "PressureDraper", "Sahib")

        expect(user.username).toBe("PressureDraper")
        expect(user.name).toBe("Sahib")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2) Get all user data in list", () => {
        const user = UserService.create(1, "PressureDraper", "Sahib")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("PressureDraper")
        expect(userInfoList[2]).toBe("Sahib")
        expect(userInfoList[3]).toBe("noBio")
    })
    test("3) Update username", () => {
        const user = UserService.create(1, "PressureDraper", "Sahib")

        UserService.updateUsername(user, "Logic")
        expect(user.username).toBe("Logic")
    })
    test("4) From a users list return the list of usernames", () => {
        const user1 = UserService.create(1, "PressureDraper1", "Sahib")
        const user2 = UserService.create(1, "PressureDraper2", "Sahib")
        const user3 = UserService.create(1, "PressureDraper3", "Sahib")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("PressureDraper1")
        expect(usernames).toContain("PressureDraper2")
        expect(usernames).toContain("PressureDraper3")
    })
}) 