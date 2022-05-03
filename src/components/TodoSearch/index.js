import React from 'react';
import { TodoContext } from '../TodoContext';
//import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="input-group rounded container">
      <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Buscar" value={searchValue} onChange={onSearchValueChange} />
      <span className="input-group-text border-0" id="search-addon">
      </span>
    </div>
  );
}

export { TodoSearch };
