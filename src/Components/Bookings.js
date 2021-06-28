import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, NavLink } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Normal from './Normal'
import School from './School'
import Family from './Family'
import Couple from './Couple'
import Footer from './Footer'


library.add(fab, fas);


export default function Bookings() {
    return (
        <>
        <div className="flex flex-wrap flex-col sm:ml-36 ml-3 mr-3 mt-10 lg:mr-96">
            <h1 className="sm:text-7xl text-3xl md:ml-0 ml-0 text-transparent bg-clip-text bg-gradient-to-r mt-10 from-white to-gray-500 block">Bookings</h1>
            <Router>
                <div className="flex flex-wrap flex-row mt-10">

                    <NavLink exact to="/bookings/normal" className="mr-auto text-sm sm:text-xl text-gray-500 duration-500 hover:text-white noSelect" activeClassName="text-blue-400"><FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-xl mr-1" icon={["fas", "user-friends"]} />Normal</NavLink>
                    <NavLink exact to="/bookings/school" className="mx-auto text-sm sm:text-xl text-gray-500 duration-500 hover:text-white noSelect" activeClassName="text-yellow-400"><FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-xl mr-1" icon={["fas", "graduation-cap"]} />School Trip</NavLink>
                    <NavLink exact to="/bookings/family" className="mx-auto text-sm sm:text-xl text-gray-500 duration-500 hover:text-white noSelect" activeClassName="text-green-400"><FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-xl mr-1" icon={["fas", "child"]} />Family</NavLink>
                    <NavLink exact to="/bookings/couple" className="mx-auto text-sm sm:text-xl text-gray-500 duration-500 hover:text-white noSelect" activeClassName="text-red-400"><FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-xl mr-1" icon={["fas", "heart"]} />Couple</NavLink>

                </div>

                <Switch>
                    <Route path="/bookings/normal">
                        <Normal />
                    </Route>
                    <Route path="/bookings/school">
                        <School />
                    </Route>
                    <Route path="/bookings/family">
                        <Family />
                    </Route>
                    <Route path="/bookings/couple">
                        <Couple />
                    </Route>
                </Switch>
            </Router>
        </div>
        <Footer />
        </>
    )
}
