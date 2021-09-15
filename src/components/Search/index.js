import React, { useState } from "react";
import { Logo as SearchLogo, InputWrapper } from "./SearchElements";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <InputWrapper>
      <SearchLogo onClick={() => handleSearch()} />
    </InputWrapper>
  );
};

export default Search;
