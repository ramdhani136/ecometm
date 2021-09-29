import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';

function Router() {
    return (
        <BrowserRouter basename={'/ecometm/public'}>
            {/* // <BrowserRouter> */}
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/profile" component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
