import React from 'react';
import ReactDOM from 'react-dom';
import Router from './config/Router';

function Main() {
    return (
        <>
            <Router />
        </>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
