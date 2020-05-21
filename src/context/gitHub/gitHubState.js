import React, {useReducer} from "react";
import GitHubContext from "./gitHubContext";
import {searchUsersAC} from "./gitHubReducer";

const GitHubState = ({children}) => {
    const [state, dispatch] = useReducer()

    const searchUsers = async () => {
        const users= await ///
        dispatch(searchUsersAC(users))
    }

    const getRepos = async () => {
        const repos= await ///
            dispatch(ersAC(repos))
    }

    const clearUsers = async () => {
        const repos= await ///
            dispatch(searchUsersAC(repos))
    }

    return (
        <GitHubContext.Provider value={1}>
            {children}
        </GitHubContext.Provider>
    )
}
export default GitHubState