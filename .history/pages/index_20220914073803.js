import Link from "next/link";

export default function Home({ products }) {
  console.log("products" , products)
  return (
    <>
      <h1 className="mb-32 text-7xl font-extrabold text-black">
        Welcome To Our Blog
        {products.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </h1>
    </>
  );
}

/**
 * Get all of the posts and pass it as the "posts" prop
 */
export async function getStaticProps() {
  const res = await fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products");
  const products = await res.json();
  return { props: { products } };
}