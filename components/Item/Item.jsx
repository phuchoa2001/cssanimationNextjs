import React, { useEffect, useState } from "react";
import { EyeOutlined, CopyOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import cssbeautify from "cssbeautify";
import pretty from "pretty";
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
const CardStyles = styled.div`
  ${(props) => props.css}
`;

function Item({ html, css, title, _id, eye = true }) {
  const [styleCss, setStyleCss] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setStyleCss(css);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function Copy(value, notification) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(value);

    // Alert the copied text
    alert(notification);
  }
  return (
    <ItemStyles>
      <CardStyles css={styleCss}>
        <div className="action">
          {eye && (
            <div className="show" onClick={() => router.push(`/${_id}`)}>
              <EyeOutlined style={{ fontSize: 23 }} />
            </div>
          )}
        </div>
        <h3 className="title">{title}</h3>
        <p className="note">Hover PC of Click Mobile</p>
        <div className="box">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="copys">
          <div
            className="html copy"
            onClick={() => Copy(pretty(html), "Bạn đã sao chép HTML")}
          >
            <CopyOutlined /> Copy HTML
          </div>
          <div
            className="css copy"
            onClick={() => Copy(cssbeautify(styleCss), "Bạn đã sao chép CSS")}
          >
            <CopyOutlined /> Copy CSS
          </div>
        </div>
      </CardStyles>
    </ItemStyles>
  );
}

export default Item;
