import React from "react";

import styled from "styled-components";
import Category from "./Category";

const CategoryStyle = styled.div`
  margin: 10px 0px;
  display: flex;
  .box {
    display: flex;
    align-items: center;
  }
  .Listcategory {
    display: flex;
    height: auto;
    align-items: center;
    margin-left: 5px;
    p {
      margin: 0px;
    }
  }
`;
function ListCategory({ categorys }) {
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn thể loại : </h3>
        <div className="Listcategory">
          {categorys.data.map((category) => (
            <Category key={category["_id"]}>{category.name}</Category>
          ))}
        </div>
      </div>
    </CategoryStyle>
  );
}

export default ListCategory;
