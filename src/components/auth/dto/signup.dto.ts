import { IsEmail, IsNotEmpty, MinLength, IsString } from "class-validator"

export class SignupDto {

    @IsNotEmpty()
    @IsString()
    username: string

    @IsString()
    @MinLength(6)
    password: string

    @IsEmail()
    email: string
}
