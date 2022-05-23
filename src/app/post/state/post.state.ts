import { post } from "src/app/model/post.model"

export interface poststate{
    posts:post[]
}

export const initialstate:poststate ={
    posts:[
        {
            id:1,
            title:'simple1',
            description:'good1'
        },
        {
            id:2,
            title:'simple2',
            description:'good2'
        },
        {
            id:3,
            title:'simple3',
            description:'good3'
        },
        {
            id:4,
            title:'simple4',
            description:'good4'
        },
        {
            id:5,
            title:'simple5',
            description:'good5'
        },
        {
            id:6,
            title:'simple6',
            description:'good6'
        }
    ]
}