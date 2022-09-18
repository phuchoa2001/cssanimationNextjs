import React from "react";
import { useRouter } from 'next/router'


import styled from "styled-components";
import Category from "./Category";

const CategoryStyle = styled.div`
  margin: 10px 0px;
  display: flex;
  .box {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .Listcategory {
    display: flex;
    height: auto;
    align-items: center;
    margin-left: 5px;
    flex-wrap: wrap;
    p {
      margin: 0px;
    }
  }
`;
function ListCategory({ categorys }) {  
  const router = useRouter()
  console.log("router" , router);
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn tìm kiếm : </h3>
        <div className="Listcategory">
          {categorys.data.map((category) => (
            <Category key={category["_id"]} name={category.name}>
              {category.name}
            </Category>
          ))}
        </div>
      </div>
    </CategoryStyle>
  );
}

export default ListCategory;
