const User = require("./../../app/models/user.js")

describe("Unit Test for User Class", () => {
    test('1) Creating user object', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const user = new User("PressureDraper", "Sahib", "Bio", "dateCreated", "lastUpdated")

        //Validamos que el código funcione de la forma esperada
        expect(user.id).toBe(1)
        expect(user.username).toBe("PressureDraper")
        expect(user.name).toBe("Sahib")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})