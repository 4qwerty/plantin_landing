import React from 'react';

function SearchItems({renderItems}) {
  return (
    <div className="search-items">
      {renderItems()}
    </div>
  );
}

export default SearchItems;