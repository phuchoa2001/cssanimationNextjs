import React, { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ItemStyles = styled.div`
  height: 400px;
  border: 1px solid rgb(51, 51, 51);
  .title {
    text-align: center;
  }
  .note {
    font-size: 12px;
    text-align: center;
    color: brown;
  }
  .action {
    padding: 0px 20px;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
  .show {
    cursor: pointer;
  }
`;

function Item({ html, css, title }) {
  const [styleCss, setStyleCss] = useState(null);

  useEffect(() => {
    setStyleCss(css);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ItemStyles>
      <style>{`${styleCss}`}</style>
      <div className="action">
        <div className="show">
          <EyeOutlined style={{fontSize : 23}} />
        </div>
      </div>
      <h3 className="title">{title}</h3>
      <p className="note">Hover PC of Click Mobile</p>
      <div className="box">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </ItemStyles>
  );
}

export default Item;
