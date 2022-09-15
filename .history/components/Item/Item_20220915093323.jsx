import React from "react";
import styled from "styled-components";

const ItemStyles = styled.div`
  height: 300px;
  border: 1px solid rgb(51, 51, 51);
  .title {
    text-align: center;
  }
  .note {
    font-size: 12px;
    text-align: center;
    color: brown;
  }
`;

function Item({ html, css, title }) {
  return (
    <ItemStyles>
      <h3 className="title">{title}</h3>
      <p className="note">Hover PC of Click Mobile</p>
      <div className="box">
        <style>
          {`${css}`}
        </style>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </ItemStyles>
  );
}

export default Item;
