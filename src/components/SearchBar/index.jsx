import React from "react";
import useStyles from "./styles.searchBar";

const SearchBar = ({ query, handleChange }) => {
  const [focus, setFocus] = React.useState(false);
  const classes = useStyles(focus);

  return (
    <header className={classes.root}>
      <div className={classes.searchField}>
        <label
          hidden={!!query}
          className={classes.label}
          htmlFor="search-input"
        >
          Search
        </label>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={handleChange}
          className={classes.input}
          id="search-input"
          type="text"
        />
      </div>
    </header>
  );
};

export default SearchBar;
