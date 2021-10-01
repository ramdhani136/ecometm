import React from 'react';
require('./SearchHeader.css');
import SearchIcon from '@mui/icons-material/Search';

function SearchHeader() {
    return (
        <div className="searchContainer">
            <input className="input" placeholder="Cari disini" />
            <div className="btnSearch">
                <SearchIcon style={{ fontSize: 29, color: '#30342f' }} />
            </div>
        </div>
    )
}

export default SearchHeader
