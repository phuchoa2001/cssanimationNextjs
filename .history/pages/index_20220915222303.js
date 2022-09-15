import { Spin } from "antd";
import Link from "next/link";
import { Pagination } from 'antd';
import useSWR from 'swr'
import styled from "styled-components";
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";
import ListCategory from "../components/Category/ListCategory";
import { useApp } from "../hooks/app";

const SidebarStyle = styled.div`
display: flex;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
padding: 10px 0px;
.page {
  margin-top: 20px !important;
}
`

export default function Home({ categorys }) {
  const [page, setPage] = useState(1);
  const { data, loading } = useApp({ page });
  const handleChange = (value) => {
    setPage(value);
  }
  return (
    <div className="App" id="app">
      <div className='wrapper' >
        <div className="header">
          <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
          <SidebarStyle className="sidebar">
            {!loading ?
              <div className="page">
                <Pagination simple current={data.meta.current_page} total={data.meta.total} onChange={handleChange} />
              </div> : <Spin />
            }
          </SidebarStyle>
        </div>
        <ListCategory categorys={categorys} />
        {!loading ?
          <div className="list">
            {data.data.map((app) =>
              <Item key={app["_id"]} {...app} />
            )}
          </div> : <Spin />}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/css/category?page_size=8`);
  const data = await res.json();
  return {
    props: {
      categorys: data,
    },
    revalidate: 1,
  };
}