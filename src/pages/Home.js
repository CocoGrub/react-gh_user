import React, {useContext} from "react";
import Search from '../Components/Search'
import Card from "../Components/Card";
import GitHubContext from "../context/gitHub/gitHubContext";
import {gitHubReducer} from "../context/gitHub/gitHubReducer";
 const Home = () => {

     const {users,loading}=useContext(GitHubContext)
     console.log(users)
    return (<>
      <Search/>
      <div className={"row"}>
          {loading?<p className={"text-center"}>Loading...</p>:users.map((v,k)=>{
              return <div className={"col-sm-4 mb-4"} key={k}>
                  <Card user={v}></Card>
              </div>
          }) }


      </div>

    </>)
}
export default Home