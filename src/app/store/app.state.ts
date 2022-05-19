
import{spinerdata} from "../store/shared/shared.selector" 
import { spinerreducer } from "./shared/shared.reducer";
import { Shared } from "./shared/shared.state";

export interface appstate{
    [spinerdata]:Shared
}

export const appreducer={
    [spinerdata]:spinerreducer
}