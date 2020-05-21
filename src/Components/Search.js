import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
    const {show} = useContext(AlertContext)
    const [value, setValue] = useState("")

    onsubmit = (event) => {
        // console.log(event.key)
        if (event.key !== 'Enter') {
            return
        }
        if(value.trim()){
            console.log('make req',value)
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