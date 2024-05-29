import { Password } from "./password"
import * as bcrypt from 'bcrypt'


describe("User password", () => {
    it('should be able to create a password', () => {
        const password = new Password('senhasenhasenha123')

        expect(password).toBeTruthy();
    })

    it('should not be able to create a password with less than 8 characters', () => {
        expect(() => new Password("vvv")).toThrow();
    })

    it('should not be able to create a password with more than 24 characters', async () => {
        expect(() => new Password("ksksksksksksksks".repeat(50))).toThrow;
    })

    it('should hash the password', async () => {

        const password = 'sksksksks';
        const hashedPassword = await Password.hashPassword(password);

        expect(hashedPassword).not.toBe(password);

        const isMatch = await bcrypt.compare(password, hashedPassword);
        expect(isMatch).toBe(true);
    })

    it('should return false for incorrect password comparison', async () => {
        const password = 'mysecretpassword';
        const hashedPassword = await Password.hashPassword(password);

        const isMatch = await bcrypt.compare('wrongpassword', hashedPassword);
        expect(isMatch).toBe(false);
    })
})