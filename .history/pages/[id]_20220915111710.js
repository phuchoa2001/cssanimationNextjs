import React from 'react'

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

function PostId() {
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

// STEP 1: tell next.js how many pages to generate
export async function getStaticPaths() {
    const res = await fetch("http://localhost:3001/css/app?page_size=100");
    const data = await res.json();
    const posts = data.data;

    return {
        paths: posts.map((post) => ({
            params: { id: post["_id"].toString()},
        })),
        fallback: true, // or false // See the "fallback" section below
    };
}

// STEP 2: tell next.js what content to get for a single page
export async function getStaticProps({ params }) {
    console.log("params", params);
    const res = await fetch(`http://localhost:3001/css/app/${params.id}`);
    const data = await res.json();
    console.log("data" , data)

    return { props: { post } };
}

export default PostId;