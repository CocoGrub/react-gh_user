import React from "react";

const Repos=({repos})=>{
    return <>
        {repos.map((v,k)=>{
            return <div className={"card mb-3"} key={k}>
                <div className={"card-body"}>
                    <h5><a href={v.url} rel={"noopener noreferrer"} target={"_blank"}>{v.name}</a></h5>
                </div>
            </div>
        })}
    </>

}
export default Repos