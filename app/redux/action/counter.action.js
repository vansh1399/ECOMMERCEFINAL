import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "./ActionTypes"


export const increment=()=>(dispatch)=>{
    dispatch({type:INCREMENTCOUNTER})
}

export const decrement=()=>(dispatch)=>{
    dispatch({type:DECREMENTCOUNTER})
}