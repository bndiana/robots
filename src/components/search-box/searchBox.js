import { Component } from "react";
import "./searchBoxStyle.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        hange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
