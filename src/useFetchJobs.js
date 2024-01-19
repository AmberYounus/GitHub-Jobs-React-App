
import axios from "axios";
import { useEffect, useReducer } from "react"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE:'update-has-next-page '
}
let url1 = 'https://jobs.github.com/positions.json'
let data = {
  description: 'javascript',
  location: 'san francisco',
}

let params = Object.keys(data).map(key => key + '=' + encodeURIComponent(data[key])).join('&');
let fullUrl = `${url1}?${params}`;

//github jobs API 
//Missing required request header. Must specify one of: origin,x-requested-with
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

// const url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york";

fetch(url)
.then(response => response.json())
.then(data => console.log("data "+data))
.catch(err => console.log("error"+err.name))

function reducer(state, action) {
    //  action.payload.x
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return { ...state,hasNextPage:action.payload.hasNextPage }
        default:
            return state;
    }
}


export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        const cancelToken1 =axios.CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            cancelToken:cancelToken1.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(e => {
            if(axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })
        const cancelToken2 =axios.CancelToken.source();
        axios.get(BASE_URL, {
            cancelToken:cancelToken2.token,
            params: { markdown: true, page: page+1, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage:res.data.length !==0 } })
        }).catch(e => {
            if(axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })
        return()=>{
            cancelToken1.cancel()
            cancelToken2.cancel()

        }
    }, [params, page])

    return {
        jobs: [],
        loading: false,
        error: false,
    }
}