import React from 'react';
import { useHistory } from 'react-router-dom';
require('./ListPromoComponent.css');

function ListPromoComponent({ img, name, price, prevprice }) {

    const history = useHistory()

    const toView = () => {
        history.push('/view/item');
    }

    return (

        <div className="containerList">
            <img onClick={toView} style={{ cursor: 'pointer', borderBottom: 'solid 1px whitesmoke', width: '100%', height: '210px', objectFit: 'contain' }} src={img} />
            <div onClick={toView} style={{ cursor: 'pointer', height: '15px', fontWeight: 500, marginTop: '10px', marginLeft: '10px', marginRight: '10px', fontFamily: 'calibri', color: '#141414' }}>{name}</div>
            <div style={{ fontWeight: 600, marginTop: '10px', marginLeft: '10px', marginRight: '10px', fontFamily: 'calibri', color: '#141414', fontSize: '1.2em' }}>{price}</div>
            <div style={{ textDecoration: 'line-through gray', fontWeight: 600, marginTop: '0px', marginLeft: '10px', marginRight: '10px', fontFamily: 'calibri', color: 'gray', fontSize: '1.1em' }}>{prevprice}</div>
            <div style={{ marginLeft: '5%', marginRight: '5%', color: '#999', fontWeight: 400, fontSize: '0.9em', marginTop: '15px' }}>Dikirim dari : Bogor, Surabaya, Semarang, Makassar</div>
        </div>
    )
}

export default ListPromoComponent
