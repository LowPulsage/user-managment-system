export const isNotEmpyFields = (fields: {[key: string]: string}) => {
    return !Object.entries(fields).find(item => item[1].length === 0)
}