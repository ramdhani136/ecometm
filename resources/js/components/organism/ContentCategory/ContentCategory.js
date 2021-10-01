import React from 'react';

require('./ContentCategory.css');
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListCategory from '../../moleculs/ListCategory/ListCategory';


function ContentCategory({ name, data }) {
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

export default ContentCategory
