import { useReducer } from "react"

const ACTIONS={
    MAKE_REQUEST:'make-request',
    GET_DATA:'get-data',
    ERROR:'error'
}

function reducer(state,action){
  //  action.payload.x
  switch(action.type){
    case ACTIONS.MAKE_REQUEST:
        return {loading:true,jobs:[]}
    case ACTIONS.GET_DATA:
        return {...state,loading:false,jobs:action.payload.jobs}
    case ACTIONS.ERROR:
        return {...state,loading:false,error:action.payload.error,jobs:[]}
    default:
        return state
  }
}


export default function useFetchJobs(params,page){
    const[state,dispatch] =useReducer(reducer,{jobs:[],loading:false})
    dispatch({type:'uuu',payload:{x:3}})
return{
    jobs:[],
    loading:false,
    error:false,
}
}