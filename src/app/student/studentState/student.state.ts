import { ExamData } from "src/app/model/post.model";

export interface studentstate{
    student: ExamData[],
}


export const initialstate:studentstate={
    student:[]
}