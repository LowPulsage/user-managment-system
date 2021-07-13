export interface IGroup {
    name: string,
    id: string,
    userIds: string[]
}

export interface ICreateGroupPaylaod {
    name: string
}

export interface IAddUserToGroupsPayload {
    userId: string,
    groupIds: string[]
}

export interface IDeleteUserFromAllGroups {
    userId: string
}

export interface IDeleteUserFromGroup {
    userId: string,
    groupId: string
}

export interface IDeleteGroup {
    groupId: string
}