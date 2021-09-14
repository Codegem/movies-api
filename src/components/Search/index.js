import React, { useState } from "react";
import { Input, Logo as SearchLogo, InputWrapper } from "./SearchElements";

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
      <Input
        type="text"
        value={query}
        onChange={(e) => queryHandler(e)}
        placeholder="Search..."
        className={searchActive && "open"}
      />
      <SearchLogo onClick={() => handleSearch()} />
    </InputWrapper>
  );
};

export default Search;
