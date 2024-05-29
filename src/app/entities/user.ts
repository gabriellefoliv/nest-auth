import { Replace } from "src/helpers/Replace"
import { Password } from "./password"

export interface UserProps {
    userId: string 
    username: string
    email: string 
    password: Password 
    createdAt: Date 
}

export class User {

    private props: UserProps

    constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string ) {
        
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }


    public set userId(userId: string) {
        this.props.userId = userId;
    }

    public get userId(): string {
        return this.props.userId;
    }

    public set username(username: string) {
        this.props.username = username;
    }

    public get username(): string {
        return this.props.username;
    }

    public set email(email: string) {
        this.props.email = email;
    }

    public get email(): string {
        return this.props.email;
    }


    public set password(password: Password) {
        this.props.password = password;
    }

    public get password(): Password {
        return this.props.password
    }


    public set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt;
    }

}