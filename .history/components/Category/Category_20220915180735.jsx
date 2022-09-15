import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.p`
  padding: 0px 10px;
  color: #fff;
  font-size: 12px;
  background: #333;
  margin: 0px 5px;
  border-radius: 4px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  margin: 0px 5px !important;
  :hover {
    color: #40a9ff;
  }
`;

function Category({ children }) {
  return <CategoryStyles>{children}</CategoryStyles>;
}

export default Category;
