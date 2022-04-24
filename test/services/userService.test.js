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
}) 