import React from 'react'
import { Helmet } from 'react-helmet';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Router() {
    return (
        // <BrowserRouter basename={'/laravel-react-js/public'}>
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route exact={true} path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}


const About = () => {
    return (<div>

        <Helmet>
            <meta charSet="utf-8" />
            <title>About</title>
        </Helmet>

        <h1>About</h1>
    </div>)
}

const Users = () => {
    return (<div>  <Helmet>
        <meta charSet="utf-8" />
        <title>Users</title>
    </Helmet>

        <h1>Users</h1>
    </div>)
}

const Home = () => {
    return (<div>  <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
    </Helmet>

        <h1>Home</h1>
    </div>)
}

export default Router
