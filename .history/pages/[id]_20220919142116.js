import React from 'react'
import Link from "next/link";
import styled from 'styled-components';
import {
    HomeOutlined,
} from '@ant-design/icons';

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";
import { useRouter } from 'next/router';
import HeaderSeo from '../components/HeaderSeo/HeaderSeo';
import Category from '../components/Category/Category';

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

const CodeStyle = styled.div`
 .title {
    margin-top: 10px;
 }
`
const SidebarStyle = styled.div`
display: flex;
align-items: center;
.home {
    margin-right: 10px;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    :hover {
        opacity: 0.7;
    }
}
`

const BoxCodeStyle = styled.div`
background:  #333;
color: #fff;
padding: 20px;
border-radius: 8px;
overflow-wrap: break-word;
`
const ShowStyle = styled.div`
`
function PostId({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return <p>...loading</p>
    }
    return (
        <div className="App" id="app">
            <HeaderSeo title={post.title} desc="Học cùng tôi... CSS ANIMATION" image="https://i.pinimg.com/564x/85/aa/33/85aa3350587cfe4b6d367b3903dedd50.jpg" />
            <div className='wrapper' >
                <div className="header">
                    <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
                    <SidebarStyle className="sidebar">
                        <div className='home'>
                            <Link href="/">
                                <HomeOutlined style={{ fontSize: 30 }} />
                            </Link>
                        </div>
                    </SidebarStyle>
                </div>
                <div className="page">
                    <PostStyle className='category'>
                        <p>Thể loại :</p>
                        <div className='listCategory'>
                            {post.category.map((item) =>
                                <Category key={item["_id"]} name={item.name}>{item.name}</Category>
                            )}
                        </div>
                    </PostStyle>
                    <ShowStyle>
                        <Item {...post} eye={false} />
                    </ShowStyle>
                    <CodeStyle>
                        <h3 className='title'>HTML :</h3>
                        <BoxCodeStyle>
                            {post.html}
                        </BoxCodeStyle>
                        <h3 className='title'>CSS :</h3>
                        <BoxCodeStyle>
                            {post.css}
                        </BoxCodeStyle>
                    </CodeStyle>
                </div>
            </div>
        </div>
    )
}

// STEP 1: tell next.js how many pages to generate
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/app?page_size=100`);
    const posts = await res.json();



    return {
        paths: posts.data.map((post) => ({
            params: { id: post["_id"] },
        })),
        fallback: "blocking", // or false // See the "fallback" section below
    };
}

// STEP 2: tell next.js what content to get for a single page
export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/app/${params.id}`);
    const data = await res.json();
    return {
        props: {
            post: data
        },
        revalidate: 1,
    };
}

export default PostId;