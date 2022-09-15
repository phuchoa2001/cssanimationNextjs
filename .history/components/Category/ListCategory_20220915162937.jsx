import React from "react";

import styled from "styled-components";

const CategoryStyle = styled.div`
  margin: 10px 0px;
`;
function ListCategory({ categorys }) {
  console.log("categorys", categorys);
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn thể loại : </h3>
        <div className="Listcategory"></div>
      </div>
    </CategoryStyle>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3001/css/category?page_size=8`);
  const data = await res.json();
  console.log("data" , data);
  return {
    props: {
      categorys: data,
    },
  };
}

export default ListCategory;
