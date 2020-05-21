import React from "react";
import {Link} from "react-router-dom";

 const Card=({user})=>{
    return <div className={"card"}>
        <img src={user.avatar_url} alt={user.login} className={"card-image-top"}/>
        <div className={"card-body"}>
            <div className={"card-title"}>{user.login}</div>
            <Link to={"/profile"} className={"btn btn-primary"} >Open</Link>
        </div>

    </div>
}
export default Card;