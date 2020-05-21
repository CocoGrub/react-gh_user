
import {CLEAR_USERS, GET_REPOS, GET_USERS, SEARCH_USERS, SET_LOADING} from '../actionTypes';

const initialState={
    user:null,
    loading:false,
    users:null,
    repos:null,

}

export const gitHubReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SEARCH_USERS:return {...state,users:action.payload,loading:false};
        case GET_REPOS: return {...state,repos: action.payload};
        case GET_USERS: return {...state,user: action.payload};
        case CLEAR_USERS:return {...state,user: null};
        case SET_LOADING:return {...state,loading: true}
        default:return state;
    }
}

export const searchUsersAC=(users)=>{
    return {
        type:SEARCH_USERS,
        payload:users
    }
}

export const getReposAC=(repos)=>{
    return {
        type:GET_REPOS,
        payload:repos
    }
}

export const getUsersAC=(users)=>{
    return {
        type:GET_USERS,
        payload:users
    }
}

export const clearUsersAC=()=>{
    return {
        type:CLEAR_USERS,
    }
}

export const SetLoadingAC=()=>{
    return {
        type:SET_LOADING,
    }
}