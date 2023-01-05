import { UserRoles } from "src/shared/types/userRoles"

export class CreateUserDto {
    username: string
    password: string
    email: string
    phone?: string
    role: UserRoles = 'USER'
}
