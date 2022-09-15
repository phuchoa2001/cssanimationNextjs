import { Spin } from "antd";
import Link from "next/link";
import { Pagination } from 'antd';
import useSWR from 'swr'
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";
import ListCategory from "../components/Category/ListCategory";
import { useApp } from "../hooks/app";


export default function Home({ categorys }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const { data, loading } = useApp({ page })
  console.log("data" , data)
  const handleChange = (value) => {
    setPage(value);
  }
  return (
    <div className="App" id="app">
      {/* <div className='wrapper' >
        <div className="header">
          <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
          <div className="sidebar">
            <Search />
            {!loading ?
              <div className="page">
                <Pagination simple current={meta.current_page} total={meta.total} onChange={handleChange} />
              </div> : <Spin />
            }
          </div>
        </div>
        <ListCategory categorys={categorys} />
        {!loading ?
          <div className="list">
            {list.map((app) =>
              <Item key={app["_id"]} {...app} />
            )}
          </div> : <Spin />}
      </div> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3001/css/category?page_size=8`);
  const data = await res.json();
  return {
    props: {
      categorys: data,
    },
  };
}