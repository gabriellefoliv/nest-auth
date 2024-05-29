import { Password } from "./password";
import { User } from "./user"


describe('User', () => {
    it('should be able to create user', () => {
        const user = new User({
            userId: "example-buddy",
            email: 'gabs@gmail.com',
            password: new Password("senha12334588"),
            username: "gabsnzz"
        })

        expect(user).toBeTruthy();
    })
})