export class CreateUserDto {
    readonly username: string
    readonly password: string
    readonly email: string
    readonly phone?: string
    readonly role: UserRoles = 'USER'
}
