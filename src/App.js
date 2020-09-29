import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Home/index";
import Login from "./components/Login/index";
import SignUp from "./components/SignUp/index";
import MapView from "./components/Map/index";

import {AuthProvider} from "./Auth";
import PrivateRoute from "./components/PrivateRoute";

import './style.scss';

const App = () => {
    return (
        <div className="main__content">
            <AuthProvider>
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route exact path="/map" component={MapView}/>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default App;
