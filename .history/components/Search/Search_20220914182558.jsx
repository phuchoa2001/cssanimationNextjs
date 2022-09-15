import React from "react";
import styled from "styled-components";
import { Input, Space } from "antd";

const SearchStyles = styled.div``;
const { Search } = Input;
function SearchComponent(props) {
  const handleSearch = (value) => {
    console.log("value", value);
  };
  return (
    <SearchStyles>
      <Search
        placeholder="input search text"
        onSearch={handleSearch}
        width={100}
        enterButton
      />
    </SearchStyles>
  );
}

export default SearchComponent;
