import React from 'react';
import ListCategory from '../ListCategory/ListCategory';
require('./ContentCategoryComponent.css');
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ContentCategoryComponent({ name, data }) {
    return (
        <div className="CategoryContainer">
            <h1 style={{ fontSize: '1.6em' }}>{name}</h1>
            <div style={{ height: '370px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {data.map((list, id) => {
                    return (
                        <ListCategory key={id} img={list.img} name={list.name} price={list.price} kota={list.kota} />
                    )
                })}
                <ArrowForwardIosIcon style={{ fontSize: '30px', color: '#4b4747', cursor: 'pointer', }} />
            </div>
        </div>
    )
}

export default ContentCategoryComponent
