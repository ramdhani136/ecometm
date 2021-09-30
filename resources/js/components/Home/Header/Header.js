import React from 'react'
import { Link, useHistory } from 'react-router-dom';
require('./Header.css');

function Header() {

    const history = useHistory();

    const toHome = () => {
        history.push('/')
    }

    const toAbout = () => {
        window.open('https://www.ekatunggal.com/');
        return null
    }

    return (
        <div className="container">
            <div className="SecHeader">
                <a style={{ marginLeft: 50 }}>Download app</a>
                <a>Get Discount</a>
                <a>Branch</a>
                <a>Help</a>
            </div>
            <div className="mainHeader">
                <div className="headerKiri">
                    <img onClick={toHome} style={{ width: '60px', height: '60px', cursor: 'pointer', marginTop: -5 }} src="https://www.ekatunggal.com/wp-content/uploads/2020/11/logoslider02.png" />
                    <div style={{ cursor: 'pointer' }} onClick={toHome} className="logo">ETMstore</div>
                    <div style={{ cursor: 'pointer' }} onClick={toAbout} className="link">About</div>
                    <Link to="/about" className="link">Categories</Link>
                    <Link to="/about" className="link">Contact Us</Link>
                    <input className="input" placeholder="Coba cari barangmu" />
                </div>
            </div>
        </div >
    )
}

export default Header
