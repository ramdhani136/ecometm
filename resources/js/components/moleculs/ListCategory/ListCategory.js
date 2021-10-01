import React from 'react';
require('./ListCategory.css');

function ListCategory({ img, name, price, kota }) {
    return (
        <div className="listContainer">
            <img style={{ cursor: 'pointer', width: '100%', height: '190px', objectFit: 'contain' }} src={img} />
            <h4 style={{ cursor: 'pointer', marginLeft: '5%', marginRight: '5%', color: '#141414', fontWeight: 500, fontSize: '1em' }}>{name}</h4>
            <h4 style={{ marginLeft: '5%', marginRight: '5%', color: '#141414', fontWeight: 700, fontSize: '1.2em', marginTop: '-15px' }}>{price}</h4>
            <div style={{ marginLeft: '5%', marginRight: '5%', color: '#999', fontWeight: 400, fontSize: '0.9em', marginTop: '-10px' }}>Dikirim dari : {kota}</div>
        </div>
    )
}

export default ListCategory;
