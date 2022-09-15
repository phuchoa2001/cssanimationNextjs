import React from "react";
import styled from "styled-components";
import { Input, Space } from "antd";

const SearchStyles = styled.div``;
function Search(props) {
  const handleSearch = (value) => {
    console.log("value", value);
  };
  return (
    <SearchStyles>
      <Search
        placeholder="input search text"
        onSearch={handleSearch}
        enterButton
      />
    </SearchStyles>
  );
}

export default Search;
