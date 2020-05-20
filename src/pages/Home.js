import React from "react";
import Search from '../Components/Search'
import Card from "../Components/Card";
 const Home = () => {
     const arr = new Array(10).fill("").map((v,k)=>{return k})
    return (<>
      <Search/>
      <div className={"row"}>

              {arr.map((v,k)=>{
                  return   <div className={"col-sm-4 mb-4 "} key={k}> <Card/>  </div>
              })}

      </div>

    </>)
}
export default Home