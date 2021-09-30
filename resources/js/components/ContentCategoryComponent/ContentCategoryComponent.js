import React from 'react';
import ListCategory from '../ListCategory/ListCategory';
require('./ContentCategoryComponent.css');


function ContentCategoryComponent({ name, data }) {
    return (
        <div className="CategoryContainer">
            <h1 style={{ fontSize: '1.6em' }}>{name}</h1>
            <div style={{ height: '370px', display: 'flex', flexDirection: 'row' }}>
                {data.map((list, id) => {
                    return (
                        <ListCategory key={id} img={list.img} name={list.name} price={list.price} kota={list.kota} />
                    )
                })}
            </div>
        </div>
    )
}

export default ContentCategoryComponent
