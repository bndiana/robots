import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/search-box/searchBox";

const App = (props) => {
  const [monsters, setMonsters] = useState([]); //[value, setValue]
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      //users received diff in memory reference bc it comes from outside
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onStringChange = (event) => {
    setStringField(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
