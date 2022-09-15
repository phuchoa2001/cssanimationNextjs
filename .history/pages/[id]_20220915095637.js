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
                <div className="page">
                    page ProductId
                </div>
            </div>
        </div>
    )
}

export default ProductId