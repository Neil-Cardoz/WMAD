import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar">
                <h1>My Website</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
};

export default Navbar;
// Note: Ensure that you have the necessary components (Home, About, Contact) created in their respective files (Home.js, About.js, Contact.js) in the same directory as Navbar.js
// Also, make sure to install `react-router-dom` if you haven't already by running `npm install react-router-dom` in your project directory.