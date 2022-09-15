import React, { useEffect, useState } from "react";
import { EyeOutlined, CopyOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
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
  .copys {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    background: #333;
    color: #fff;
    padding: 10px;
    border-radius: 8px;
    .copy {
      margin: 0px 5px;
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

function Item({ html, css, title, _id }) {
  const [styleCss, setStyleCss] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setStyleCss(css);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function Copy(value) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(value);

    // Alert the copied text
    alert("Copied the text: " + value);
  }
  return (
    <ItemStyles>
      <style>{`${styleCss}`}</style>
      <div className="action">
        <div className="show" onClick={() => router.push(`/${_id}`)}>
          <EyeOutlined style={{ fontSize: 23 }} />
        </div>
      </div>
      <h3 className="title">{title}</h3>
      <p className="note">Hover PC of Click Mobile</p>
      <div className="box">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="copys">
        <div className="html copy" onClick={() => Copy(styleCss)}>
          <CopyOutlined /> Copy HTML
        </div>
        <div className="css copy" onClick={() => Copy(html)}>
          <CopyOutlined /> Copy CSS
        </div>
      </div>
    </ItemStyles>
  );
}

export default Item;
