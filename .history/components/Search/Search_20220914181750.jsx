import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  margin: auto;
  .input {
    width: 100%;
    background: none;
    outline: none;
  }
`;
function Search(props) {
  return <SearchStyles>
    <input type="text" className="input" />
  </SearchStyles>;
}

export default Search;
