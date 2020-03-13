import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Users from "./Users"
import UsersJSON from "./UsersJSON"

export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/users-json" render={() => <UsersJSON />} />
            </Switch>
        </div>
    )
}