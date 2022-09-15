import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  margin: auto;
`;
function Search(props) {
  return <SearchStyles>
    <input type="text" className="input" />
  </SearchStyles>;
}

export default Search;
