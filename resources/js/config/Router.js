import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import ContenViewItem from '../components/organism/ContentViewItem/ContentViewItem';
import HomePage from '../pages/HomePage';

function Router() {
    return (
        <BrowserRouter basename={'/ecometm/public'}>
            {/* // <BrowserRouter> */}
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/view/item" component={ContenViewItem} />
            </Switch>
        </BrowserRouter>
    )
}


export default Router;
