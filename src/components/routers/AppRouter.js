import React from 'react';
import LoginScreen from '../login/LoginScreen';
import HomeScreen from '../home/HomeScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import SignUpScreen from '../signup/SignUpScreen';


/* El switch es como el switch de java y js, dejar las rutas mas generales abajo */
const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/main" component={ HomeScreen }/>

                    <Route exact path="/login" component={ LoginScreen }/>
                    <Route exact path="/signup" component={ SignUpScreen }/>
                    <Redirect to="/login" />
                </Switch>

            </div>
        </Router>
    )
}

export default AppRouter;
