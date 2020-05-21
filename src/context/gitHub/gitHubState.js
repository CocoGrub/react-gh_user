import React, {useReducer} from "react";
import * as axios from 'axios'
import GitHubContext from "./gitHubContext";
import {clearUsersAC, getReposAC, getUserAC, gitHubReducer, searchUsersAC, SetLoadingAC} from "./gitHubReducer";

const CLIENT_ID=process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET

const GitHubState = ({children}) => {
    const [state, dispatch] = useReducer(gitHubReducer,{users:[]})
    const{user,users,repos,loading}=state;
    const withCred=(url)=>{
        return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }

    const searchUsers = async (user) => {
        setLoading()
        const response = await axios.get(withCred(`https://api.github.com/search/users?q=${user}&`))
        console.log(response.data.items)
        dispatch(searchUsersAC(response.data.items))
    }

    const getUser = async (name) => {
        setLoading()
        const response = await axios.get(withCred(`https://api.github.com/search/users${name}?`))
            dispatch(getUserAC(response.data))
    }

    const getRepos = async (name) => {
        setLoading()
        const response = await axios.get(withCred(`https://api.github.com/search/users${name}/repos?per_page=5&`))

            dispatch(getReposAC(response.data))
    }

    const clearUsers = async () => {
        dispatch(clearUsersAC())
    }

    const setLoading = async () => {
        dispatch(SetLoadingAC())
    }
    return (
        <GitHubContext.Provider value={{searchUsers,getUser,getRepos,clearUsers,setLoading,user,users,repos,loading}}>
            {children}
        </GitHubContext.Provider>
    )
}
export default GitHubState