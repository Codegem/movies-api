import { Logo as SearchLogo, InputWrapper } from "./SearchElements";

const Search = ({ searchToggle }) => {
  return (
    <InputWrapper>
      <SearchLogo onClick={searchToggle} />
    </InputWrapper>
  );
};

export default Search;
