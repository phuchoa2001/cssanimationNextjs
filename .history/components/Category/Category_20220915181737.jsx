import React from "react";
import Link from "next/link";
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
  margin: 0px 5px !important;
  :hover {
    color: #40a9ff;
  }
`;

function Category({ children, name }) {
  return (
    <CategoryStyles>
      <Link href={`/category/${name}`}>{children}</Link>
    </CategoryStyles>
  );
}

export default Category;
