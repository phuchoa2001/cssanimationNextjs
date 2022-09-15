import Link from "next/link";

import Item from "../components/Item/Item";
import Search from "../components/Search/Search";

export default function Home({ products }) {
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
          <Item />
        </div>
      </div>
    </div>
  );
}

/**
 * Get all of the posts and pass it as the "posts" prop
 */
// export async function getStaticProps() {
//   const res = await fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products");
//   const products = await res.json();
//   return { props: { products } };
// }