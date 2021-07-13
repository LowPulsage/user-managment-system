export interface IUser {
    id: string,
    name: string,
    email: string
}

export interface IDeleteUserPayload {
    userId: string
}