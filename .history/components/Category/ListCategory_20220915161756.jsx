import React from "react";

import styled from "styled-components";

const CategoryStyle = styled.div`
  margin: 10px 0px;
`;
function ListCategory() {
  return <CategoryStyle>
    <div className="box">
      <h3>Tùy chọn thể loại</h3>
    </div>
  </CategoryStyle>;
}

export default ListCategory;
