import "./searchBoxStyle.css";

const SearchBox = (props) => {
  <input
    className={`search-box ${props.className}`}
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChangeHandler}
    hange={props.onChangeHandler}
  />;
};
export default SearchBox;
