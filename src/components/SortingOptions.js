import React from 'react';

function SortingOptions({ sortBy, setSortBy }) {
    return (
        <div className="sorting-options">
            <label>Sort by: </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
}

export default SortingOptions;
