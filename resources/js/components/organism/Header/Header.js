import React from 'react'
import { Link, useHistory } from 'react-router-dom';
require('./Header.css');

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchHeader from '../../moleculs/SearchHeader/SearchHeader';

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
        <>
            <div className="container" style={{ position: 'fixed' }}>
                <div className="SecHeader">
                    <a style={{ marginLeft: 50 }}>Download app</a>
                    <a>Get Discount</a>
                    <a>Branch</a>
                    <a>Help</a>
                </div>
                <div className="mainHeader">
                    <div className="headerKiri">
                        <img onClick={toHome} style={{ objectFit: 'contain', width: '50px', height: '50px', cursor: 'pointer', marginTop: -5 }} src="https://www.ekatunggal.com/wp-content/uploads/2020/11/logoslider02.png" />
                        <div style={{ cursor: 'pointer' }} onClick={toHome} className="logo">ETMstore</div>
                        <div style={{ cursor: 'pointer' }} onClick={toAbout} className="link">About</div>
                        <Link to="/about" className="link">Categories <KeyboardArrowDownIcon style={{ fontSize: '20px', }} /></Link>
                        <Link to="/about" className="link">Contact Us</Link>
                        <SearchHeader />
                    </div>
                    <div className="headerKanan">
                        <a className="link">Daftar</a>
                        <a className="link">Login</a>
                    </div>
                </div>
            </div >
            <div style={{ marginTop: '-100%', zIndex: 200, borderTop: 'solid 1px #ccc', backgroundColor: '#fff', height: '100%', width: '100%', position: 'fixed' }}></div>
        </>
    )
}



export default Header
