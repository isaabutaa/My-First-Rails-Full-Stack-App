import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/Home"

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Home />} />
        </Switch>
    </BrowserRouter>
)