import React, { useEffect, useState } from "react";
import { EyeOutlined, CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ItemStyles = styled.div`
  height: 400px;
  border: 1px solid rgb(51, 51, 51);
  position: relative;
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
  .show:hover {
    opacity: 0.7;
  }
  .copy {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    background: #333;
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
          <EyeOutlined style={{ fontSize: 23 }} />
        </div>
      </div>
      <h3 className="title">{title}</h3>
      <p className="note">Hover PC of Click Mobile</p>
      <div className="box">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="copy">
        <div className="html">
          <CopyOutlined /> Copy HTML
        </div>
        <div className="css">
          <CopyOutlined /> Copy CSS
        </div>
      </div>
    </ItemStyles>
  );
}

export default Item;
