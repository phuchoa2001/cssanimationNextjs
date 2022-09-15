import { Spin } from "antd";
import Link from "next/link";
import { Pagination } from 'antd';
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";
import ListCategory from "../components/Category/ListCategory";

export default function Home() {
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
        <div className='listLink'>
          <Link href="#text" className='link'>Văn bản</Link>
          <Link href="#button" className='link'>Nút bấm</Link>
          <Link href="#image" className='link'>Hình ảnh</Link>
        </div>
        <ListCategory />
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