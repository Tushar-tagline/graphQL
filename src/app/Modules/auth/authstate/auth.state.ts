import { User } from "src/app/model/user.model"

export interface authstate{
    user:User | null
}


export const initialstate:authstate={
        user: null
}