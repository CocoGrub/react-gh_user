import React from 'react';
import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <>
          <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Route path={"/"} component={<Home/>}> </Route>

            </div>
          </BrowserRouter>
        </>
    );
}

export default App;
