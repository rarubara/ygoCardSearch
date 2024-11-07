import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (onSearch) {
      onSearch(newQuery);  // Trigger search as user types
    }
  };

  return (
    <div className="flex items-center">
      <label htmlFor="search-input" className="font-bold mr-2">
        Search:
      </label>
      <input
        type="text"
        id="search-input"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="p-2 border rounded-md shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;