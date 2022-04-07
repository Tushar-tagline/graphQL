import { post } from "src/app/model/post.model"

export interface poststate{
    posts:post[]
}

export const initialstate:poststate ={
    posts:[
        {
            id:1,
            title:'simple',
            descripation:'good'
        },
        {
            id:1,
            title:'simple',
            descripation:'good'
        }
    ]
}