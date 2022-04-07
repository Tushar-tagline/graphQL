import { postReducer } from "../post/state/post.reducer";
import { poststate } from "../post/state/post.state";
import { counterReducer } from "../state/couter.reducer";
import { counterstate } from "../state/couter.state";

export interface appstate{
    counter:counterstate,
    posts:poststate
}

export const appreducer={
    firstngrx:counterReducer,
    posts:postReducer
}