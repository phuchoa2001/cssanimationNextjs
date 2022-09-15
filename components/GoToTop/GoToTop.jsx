import React from "react";
import styled from "styled-components";

const GotoStyles = styled.a`
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 20px 10px;
  background: #333;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;
function GoToTop() {
  return <GotoStyles href="#app"> Lên đầu trang </GotoStyles>;
}

export default GoToTop;
