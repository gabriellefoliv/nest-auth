import * as bcrypt from 'bcrypt'

export class Password {
    private readonly password: string;

    get value(): string {
        return this.password;
    }

    private validatePasswordLength(password: string): boolean {
        return password.length >= 8 && password.length <= 24;
    }

    constructor(password: string) {
        const isPasswordLengthValid = this.validatePasswordLength(password)

        if (!isPasswordLengthValid) {
            throw new Error("Content length error.");
        }

        this.password = password
    }

    static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    static async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword)
    }  
    
}