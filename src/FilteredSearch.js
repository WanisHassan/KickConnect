import React, { useState } from 'react';

function FilteredSearch() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  return (
    <div style={filteredSearchContainerStyle}>
    <div className="category-list">
      <label>
        <input
          type="checkbox"
          value="Category 1"
          checked={selectedCategories.includes('Category 1')}
          onChange={handleCategoryChange}
        />
        Category 1
      </label>
      <label>
        <input
          type="checkbox"
          value="Category 2"
          checked={selectedCategories.includes('Category 2')}
          onChange={handleCategoryChange}
        />
        Category 2
      </label>
      <label>
        <input
          type="checkbox"
          value="Category 3"
          checked={selectedCategories.includes('Category 3')}
          onChange={handleCategoryChange}
        />
        Category 3
      </label>
    </div>
    </div>
  );
}

export default FilteredSearch;

const filteredSearchContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px',
  };