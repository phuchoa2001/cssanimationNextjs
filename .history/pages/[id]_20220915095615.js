import React from 'react'

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

function ProductId() {
    return (
        <div className="App" id="app">
            <div className='wrapper' >
                <div className="header">
                    <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
                    <Search />
                </div>
                <div className='listLink'>
                    <a href="#text" className='link'>Văn bản</a>
                    <a href="#button" className='link'>Nút bấm</a>
                    <a href="#image" className='link'>Hình ảnh</a>
                </div>
                <div className="page">
                    {list.map((app) =>
                        <Item key={app["_id"]} {...app} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductId