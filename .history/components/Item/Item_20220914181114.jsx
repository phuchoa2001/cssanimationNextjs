import React from "react";
import styled from "styled-components";

const ItemStyles = styled.div`
  .title {
    text-align: center;
  }
  .note {
    font-size: 12px;
    text-align: center;
    color: brown;
  }
`;

function Item() {
  return (
    <ItemStyles>
      <h3 className="title">Văn bản từ trái sang phải</h3>
      <p className="note">Hover PC of Click Mobile</p>
    </ItemStyles>
  );
}

export default Item;
