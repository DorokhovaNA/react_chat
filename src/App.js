import React from 'react';
import './App.css';
import './AppBar/AppBar.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './Chat/Chat';
import Users from './Users/Users';
import Home from './Home/Home';
import AppBar from './AppBar/AppBar';

const App = () => {
    return (
        
        <Router>
            <AppBar />
            <Switch>
                <Route path="/chat/:id">
                    <Chat />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;