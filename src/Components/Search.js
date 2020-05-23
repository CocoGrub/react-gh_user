import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import GitHubContext from "../context/gitHub/gitHubContext";

const Search = () => {
    const {show,hide} = useContext(AlertContext)
    const github=useContext(GitHubContext)
    const [value, setValue] = useState("")

    onsubmit = (event) => {
        // console.log(event.key)
        if (event.key !== 'Enter') {
            return
        }
        if(value.trim()){
            github.searchUsers(value.trim())
            hide()
            ///make req //
        }else {
            show('ENTER USER DATA')
        }
    }
    return (

        <div className={"form-group"}>
            <input className={"form-control"} value={value} onChange={(e)=>{setValue(e.target.value)}} type={"text"} placeholder={"input user name"} onKeyPress={onsubmit}/>
        </div>
    )
}

export default Search