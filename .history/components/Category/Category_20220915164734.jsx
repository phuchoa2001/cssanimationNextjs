import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.p`
  padding: 0px 10px;
  color: #fff;
  font-size: 10px;
  background: #333;
  margin: 0px 5px;
  border-radius: 4px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  :hover {
    color: #40a9ff;
  }
`;

function Category() {
  return <CategoryStyles>Category</CategoryStyles>;
}

export default Category;
