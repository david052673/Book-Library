import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      
      <div className='flex  ml-32 mr-28 mt-24 p-23'>
  
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=" Enter Book Title..."
        className="flex-grow p-2 border rounded-2xl border-gray-300  "
      />
      <button onClick={handleSearch} className="p-1 bg-blue-500 text-white rounded-2xl">
        Search
      </button>
      </div>
      <h2 className='text-xl font-bold text-blue-200 pt-4'> 🔍Your Search Results</h2>
    </div>
    
  );
};

export default SearchBar;