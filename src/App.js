import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
<<<<<<< Updated upstream
import { firebaseConfig } from "./firebase";
=======
import firebase from "firebase/compat";
>>>>>>> Stashed changes
import Chat from "./Chat/Chat";
import Users from "./Users/Users";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
<<<<<<< Updated upstream
=======
import Login from './Auth/Login';
import Signup from './Auth/Signup';
>>>>>>> Stashed changes
import CustomRoute from "./util/CustomRoute";
import AppBar from "./AppBar/AppBar";
import "./App.css";
import "./AppBar/AppBar.css";


const firebaseConfig = {
    apiKey: "AIzaSyBfqb0DecmSsgY_r05gR6HP2Lv16PFVKmI",
    authDomain: "gb-react-628c1.firebaseapp.com",
    databaseURL: "https://gb-react-628c1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-628c1",
    storageBucket: "gb-react-628c1.appspot.com",
    messagingSenderId: "755336690900",
    appId: "1:755336690900:web:e50cdda7c502b8bc890f41"
};
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database();

const App = () => {
    useEffect(() => {
        initializeApp(firebaseConfig);
    }, [])
    return (
        <Router>
            {/* {<AppBar />}  */}
            <Switch>
<<<<<<< Updated upstream
                <CustomRoute secured path="/chat/:id">
=======
                <CustomRoute path="/chat/:id">
>>>>>>> Stashed changes
                    <Chat />
                </CustomRoute>
                <CustomRoute path="/users" secured withAppBar={true}> 
                    <Users />
                </CustomRoute>
                <Route path="/login">
<<<<<<< Updated upstream
                    <div></div>
=======
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
>>>>>>> Stashed changes
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