import React from 'react'
import { Link, useHistory } from 'react-router-dom';
require('./Header.css');
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                    <img onClick={toHome} style={{ objectFit: 'contain', width: '50px', height: '50px', cursor: 'pointer', marginTop: -5 }} src="https://www.ekatunggal.com/wp-content/uploads/2020/11/logoslider02.png" />
                    <div style={{ cursor: 'pointer' }} onClick={toHome} className="logo">ETMstore</div>
                    <div style={{ cursor: 'pointer' }} onClick={toAbout} className="link">About</div>
                    <Link to="/about" className="link">Categories <KeyboardArrowDownIcon style={{ fontSize: '20px', }} /></Link>
                    <Link to="/about" className="link">Contact Us</Link>
                    <div className="searchContainer">
                        <input className="input" placeholder="Cari disini" />
                        <div className="btnSearch">
                            <SearchIcon style={{ fontSize: 29, color: '#30342f' }} />
                        </div>
                    </div>
                </div>
                <div className="headerKanan">
                    <a className="link">Daftar</a>
                    <a className="link">Login</a>
                </div>

            </div>
        </div >
    )
}

export default Header
