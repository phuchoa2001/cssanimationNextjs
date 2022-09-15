import Link from "next/link";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

export default function Home({ list }) {
  console.log("list", list);
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
        <div className="list">
          {list.map((app) =>
            <Item key={app["_id"]} />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/css/app");
  const apps = await res.json();
  return { props: { list: apps.data } };
}