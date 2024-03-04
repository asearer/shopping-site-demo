import React, { useState } from 'react';

function Search({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Search products..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
