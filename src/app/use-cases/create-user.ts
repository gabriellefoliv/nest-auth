import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repositories/users-repository";
import { User } from "../entities/user";
import { Password } from "../entities/password";

interface CreateUserRequest {
    userId: string
    username: string 
    email: string 
    password: string 
}

interface CreateUserResponse {
    user: User
}

@Injectable()
export class CreateUser {

    constructor(
        private usersRepository = UsersRepository
    ) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { userId, username, email, password } = request 

        const user = new User({
            userId,
            email,
            username,
            password: new Password(password)
        })

        return { user }
    }
}