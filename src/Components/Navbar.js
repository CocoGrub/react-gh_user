import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={"navbar navbar-dark bg-primary navbar-expand-lg"}>
        <div className={"navbar-brand"}>GH SEARCH</div>
        <ul className={"navbar-nav"}>
            <li className={"navbar-item"}>
                <NavLink exact to={"/"} className={"nav-link"}>HOME</NavLink>
            </li>
            <li className={"nav-item"}>
                <NavLink to={"/profile/:id"} className={"nav-link"}>PROFILE</NavLink>
            </li>
            <li className={"nav-item"}>
                <NavLink to={"/about"} className={"nav-link"}>INFO</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar