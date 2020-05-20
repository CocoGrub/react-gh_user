import React from "react";

const Navbar = () => {
    return <nav className={"navbar navbar-dark bg-primary navbar-expand-lg"}>
        <div className={"navbar-brand"}>GH SEARCH</div>
        <ul className={"navbar-nav"}>
            <li className={"navbar-item"}>
                <a href={"/a"} className={"nav-link"}>HOME</a>
            </li>
            <li className={"nav-item"}>
                <a href={"/a"} className={"nav-link"}>INFO</a>
            </li>
        </ul>
    </nav>
}

export default Navbar