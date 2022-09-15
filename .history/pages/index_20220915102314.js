import { Spin } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

export default function Home() {
  const [list, setList] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch("http://localhost:3001/css/app");
      const apps = await res.json();
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
          <Search />
        </div>
        <div className='listLink'>
          <a href="#text" className='link'>Văn bản</a>
          <a href="#button" className='link'>Nút bấm</a>
          <a href="#image" className='link'>Hình ảnh</a>
        </div>
        {isloading ?
          <div className="list">
            {list.map((app) =>
              <Item key={app["_id"]} {...app} />
            )}
          </div> : <Spin />}
      </div>
    </div>
  );
}