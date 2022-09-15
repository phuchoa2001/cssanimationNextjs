import { Spin } from "antd";
import Link from "next/link";
import { Pagination } from 'antd';
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

export default function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true)
    async function fetchApi() {
      const res = await fetch(`http://localhost:3001/css/app?page_size=10&page=${page}`);
      const apps = await res.json();
      setIsloading(false)
      setList(apps.data)
    }
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App" id="app">
      <div className='wrapper' >
        <div className="header">
          <h3 className='text'>Học cùng tôi... CSS ANIMATION</h3>
          <div className="sidebar">
            <Search />
            <div className="page">
              <Pagination simple defaultCurrent={2} total={50} />
            </div>
          </div>
        </div>
        <div className='listLink'>
          <a href="#text" className='link'>Văn bản</a>
          <a href="#button" className='link'>Nút bấm</a>
          <a href="#image" className='link'>Hình ảnh</a>
        </div>
        {!isloading ?
          <div className="list">
            {list.map((app) =>
              <Item key={app["_id"]} {...app} />
            )}
          </div> : <Spin />}
      </div>
    </div>
  );
}