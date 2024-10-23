import React from 'react';

function GroupSelector({ groupBy, setGroupBy }) {
    return (
        <div className="group-selector">
            <label>Group by: </label>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}

export default GroupSelector;
