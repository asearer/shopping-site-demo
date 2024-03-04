import React from 'react';

function FiltersAndSorting({ handleFilter, handleSort }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    handleFilter(name, value);
  };

  const handleSortChange = (e) => {
    handleSort(e.target.value);
  };

  return (
    <div className="filters-and-sorting">
      <select name="category" onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more categories */}
      </select>
      <select onChange={handleSortChange}>
        <option value="default">Default Sorting</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        {/* Add more sorting options */}
      </select>
    </div>
  );
}

export default FiltersAndSorting;
