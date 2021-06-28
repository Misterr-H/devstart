import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, NavLink } from 'react-router-dom';
import Events from './Events';
import Gallery from './Gallery';
import Bookings from './Bookings';
import About from './About';
import Home from './Home';

export default function Header2() {
    return (
        <Router>
            <div className="flex flex-wrap flex-row justify-center sm:mt-0 mt-5">
                
                <NavLink exact to="/" className="noSelect hover:text-white mx-8 text-gray-400 text-2xl duration-500" activeClassName="text-blue-400">Home</NavLink>
                <NavLink exact to="/events" className="noSelect hover:text-white mx-8 text-gray-400 text-2xl duration-500" activeClassName="text-blue-400">Events</NavLink>
                <NavLink exact to="/gallery" className="noSelect hover:text-white mx-8 text-gray-400 text-2xl duration-500" activeClassName="text-blue-400">Gallery</NavLink>
                <NavLink to="/bookings/normal" className="noSelect hover:text-white mx-8 text-gray-400 text-2xl duration-500" activeClassName="text-blue-400">Bookings</NavLink>
                <NavLink exact to="/about" className="noSelect hover:text-white mx-8 text-gray-400 text-2xl duration-500" activeClassName="text-blue-400">About Us</NavLink>

            </div>
            <Switch>
                <Route path="/events">
                    <Events />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/bookings">
                    <Bookings />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
