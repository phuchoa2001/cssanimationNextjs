import React from "react";

import styled from "styled-components";

const CategoryStyle = styled.div`
  margin: 10px 0px;
`;
function ListCategory({ categorys }) {
  return (
    <CategoryStyle>
      <div className="box">
        <h3>Tùy chọn thể loại : </h3>
        <div className="Listcategory"></div>
      </div>
    </CategoryStyle>
  );
}

export default ListCategory;
