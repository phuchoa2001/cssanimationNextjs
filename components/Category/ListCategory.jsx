import { Spin } from "antd";
import React from "react";

import styled from "styled-components";
import Category from "./Category";

import { useCategory } from "../../hooks/category";

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
function ListCategory({}) {
  const { data: categorys, loading } = useCategory({});
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn tìm kiếm : </h3>
        <div className="Listcategory">
          {!loading ? (
            categorys.data.map((category) => (
              <Category key={category["_id"]} name={category.name}>
                {category.name}
              </Category>
            ))
          ) : (
            <Spin />
          )}
        </div>
      </div>
    </CategoryStyle>
  );
}

export default ListCategory;
