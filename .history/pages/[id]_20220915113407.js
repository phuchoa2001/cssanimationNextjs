import React from 'react'
import styled from 'styled-components';

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

const PostStyle = styled.div`
 display: flex;
 width: 100%;
 justify-content: center;
 .listCategory {
    display: flex;
    p {
        padding: 0px 10px;
        color: #fff;
        font-size: 10px;
        background: #333;
        margin: 0px 5px;
        border-radius: 4px;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        :hover {
            color: #40a9ff;
        }
    }
 }
`
const BoxCodeStyle = styled.div`
`
function PostId({ post }) {
    return (
        <div className="App" id="app">
            <div className='wrapper' >
                <div className="header">
                    <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
                    <Search />
                </div>
                <div className="page">
                    <h3 className='title' style={{ textAlign: "center" }}>{post.title}</h3>
                    <PostStyle className='category'>
                        <p>Thể loại :</p>
                        <div className='listCategory'>
                            {post.category.map((item) =>
                                <p key={item["_id"]}>{item.name}</p>
                            )}
                        </div>
                    </PostStyle>
                    <BoxCodeStyle>
                        {post.html}
                    </BoxCodeStyle>
                    <BoxCodeStyle>
                        {post.css}
                    </BoxCodeStyle>
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
            params: { id: post["_id"].toString() },
        })),
        fallback: true, // or false // See the "fallback" section below
    };
}

// STEP 2: tell next.js what content to get for a single page
export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3001/css/app/${params.id}`);
    const data = await res.json();

    return { props: { post: data } };
}

export default PostId;