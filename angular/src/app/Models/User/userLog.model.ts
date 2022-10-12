export interface UserLog{
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    isActive: boolean,
    isAdmin: boolean,
    token: string,
}