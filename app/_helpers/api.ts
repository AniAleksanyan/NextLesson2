import { IUser } from "./types"
import fs from 'fs/promises'

export const getUsers = async():Promise<IUser[]> => {
    const result = await fs.readFile("app/data.json", "utf-8")
    
    if(!result){
        return []
    }
    
    return JSON.parse(result) as IUser[]
}

export const getUser = async(id: number):Promise<IUser[]> => {
    const result = await fs.readFile("app/data.json", "utf-8")
    
    if(!result){
        return []
    }

    const users = JSON.parse(result)

    return users.users.filter((user: { id: number }) => (user.id == id));
}   