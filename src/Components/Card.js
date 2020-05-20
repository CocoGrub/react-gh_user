import React from "react";
import {Link} from "react-router-dom";

 const Card=()=>{
    return <div className={"card"}>
        <img src={""} alt={""} className={"card-image-top"}/>
        <div className={"card-body"}>
            <div className={"card-title"}>React JS</div>
            <Link to={"/profile"} className={"btn btn-primary"} >Open</Link>
        </div>

    </div>
}
export default Card;