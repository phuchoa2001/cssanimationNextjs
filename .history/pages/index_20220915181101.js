import { Spin } from "antd";
import Link from "next/link";
import { Pagination } from 'antd';
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";
import ListCategory from "../components/Category/ListCategory";
import Category from "../components/Category/Category";

export default function Home({ categorys }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true)
    async function fetchApi() {
      const res = await fetch(`http://localhost:3001/css/app?page_size=10&page=${page}`);
      const apps = await res.json();
      setIsloading(false)
      setList(apps.data)
      setMeta(apps.meta)
    }
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  const handleChange = (value) => {
    setPage(value);
  }
  return (
    <div className="App" id="app">
      <div className='wrapper' >
        <div className="header">
          <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
          <div className="sidebar">
            <Search />
            {!isloading ?
              <div className="page">
                <Pagination simple current={meta.current_page} total={meta.total} onChange={handleChange} />
              </div> : <Spin />
            }
          </div>
        </div>
        <ListCategory categorys={categorys} />
        {!isloading ?
          <div className="list">
            {list.map((app) =>
              <Category key={category["_id"]}>{category.name}</Category>
            )}
          </div> : <Spin />}
      </div>
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