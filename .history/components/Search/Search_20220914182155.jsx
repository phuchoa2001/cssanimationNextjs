import React from "react";
import styled from "styled-components";
import { Input, Space } from "antd";

const SearchStyles = styled.div``;
function Search(props) {
  return (
    <SearchStyles>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </SearchStyles>
  );
}

export default Search;
