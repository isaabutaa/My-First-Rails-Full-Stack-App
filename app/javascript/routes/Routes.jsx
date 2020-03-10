import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/Home"
import Users from "../components/Users"

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/users" render={() => <Users />} />
        </Switch>
    </BrowserRouter>
)