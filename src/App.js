import React from 'react';
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from "./pages/About";
import Profile from "./pages/Profile";
import AlertState from "./context/alert/alertState";
import GitHubState from "./context/gitHub/gitHubState";

const App=()=> {
    return (
        <GitHubState>
    <AlertState>
          <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Alert alert={{text:`alert`}}/>
                <Switch>
                <Route exact path='/'> <Home/> </Route>
                <Route path="/about" ><About/> </Route>
                <Route path={"/profile/:id"} component={Profile}></Route>
                </Switch>
                </div>
          </BrowserRouter>
    </AlertState>
        </GitHubState>
            )

}

export default App;
