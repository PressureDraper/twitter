const User = require("./../../app/models/user.js")

describe("Unit Tests for User Class", () => {
    test('1) Creating user object', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const user = new User(1, "PressureDraper", "Sahib", "Bio")

        //Validamos que el código funcione de la forma esperada
        expect(user.id).toBe(1)
        expect(user.username).toBe("PressureDraper")
        expect(user.name).toBe("Sahib")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('2) Add Getters', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const user = new User(1, "PressureDraper", "Sahib", "Bio")

        //Validamos que el código funcione de la forma esperada
        expect(user.getUsername()).toBe("PressureDraper")
        expect(user.getBio()).toBe("Bio")
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()
    });
    test('3) Add Setters', () => {
        //Escribimos aqui el código que queremos usar tal cual
        const user = new User(1, "PressureDraper", "Sahib", "Bio")

        //Validamos que el código funcione de la forma esperada
        user.setUsername("Logic")
        expect(user.username).toBe("Logic")

        user.setBio("new bio")
        expect(user.bio).toBe("new bio")
    });
})