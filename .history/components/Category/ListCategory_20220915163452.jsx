import React from "react";

import styled from "styled-components";

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
  }
`;
function ListCategory({ categorys }) {
  console.log("categorys", categorys);
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn thể loại : </h3>
        <div className="Listcategory">
          {categorys.data.map((category) => (
            <p key={category["_id"]}>{category.name}</p>
          ))}
        </div>
      </div>
    </CategoryStyle>
  );
}

export default ListCategory;
