import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import Chat from "./Chat/Chat";
import Users from "./Users/Users";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
import CustomRoute from "./util/CustomRoute";
import AppBar from "./AppBar/AppBar";
import "./App.css";
import "./AppBar/AppBar.css";

const App = () => {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, [])
    return (
        <Router>
            {/* {<AppBar />}  */}
            <Switch>
                <CustomRoute secured path="/chat/:id">
                    <Chat />
                </CustomRoute>
                <CustomRoute path="/users" secured withAppBar={true}> 
                    <Users />
                </CustomRoute>
                <Route path="/login">
                    <div></div>
                </Route>
                <Route path="/weather" secured withAppBar={true}>
                    <Weather />
                </Route>
                <Route path="/" withAppBar={false} >
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;