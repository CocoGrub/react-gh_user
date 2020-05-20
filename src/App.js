import React from 'react';
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from "./pages/About";
import Profile from "./pages/Profile";

const App=()=> {
    return (
        <>
          <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Alert alert={{text:`alert`}}/>
                <Switch>
                <Route exact path='/'> <Home/> </Route>
                <Route path="/about" ><About/> </Route>
                <Route  path={"/profile/:id"} > <Profile/> </Route>
                </Switch>
                </div>
          </BrowserRouter>
        </>
    );
}

export default App;
