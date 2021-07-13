import { IGroup } from "@interfaces/groups.types";

export interface IOption {
    value: string
    label: string
}

export const parseGroupsToOption = (groups: IGroup[]): IOption[] => {
    return groups.map(group => {
        return {
            label: group.name,
            value: group.id
        }
    })
}