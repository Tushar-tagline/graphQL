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
            id:2,
            title:'simple',
            descripation:'good'
        },
        {
            id:3,
            title:'simple',
            descripation:'good'
        },
        {
            id:4,
            title:'simple',
            descripation:'good'
        },
        {
            id:5,
            title:'simple',
            descripation:'good'
        },
        {
            id:6,
            title:'simple',
            descripation:'good'
        }
    ]
}