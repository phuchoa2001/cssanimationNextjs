import React, { useEffect, useState } from "react";
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
  const [styleCss, setStyleCss] = useState();

  useEffect(() => {
    setStyleCss(css);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ItemStyles>
      <style>{`${styleCss}`}</style>
      <h3 className="title">{title}</h3>
      <p className="note">Hover PC of Click Mobile</p>
      <div className="box">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </ItemStyles>
  );
}

export default Item;
