import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Auth from './components/Auth/Auth';
import Footer from './components/shared/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/shared/PrivateRoute/PrivateRoute';
import Dropdown from './components/shared/Dropdown';


const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", hideMenu)
        return () => {
            window.removeEventListener("resize", hideMenu)
        }
    })
    return (
        <Router>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <Route path="/blog/:id" component={BlogDetails} />
                <Route path="/auth" component={Auth} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;