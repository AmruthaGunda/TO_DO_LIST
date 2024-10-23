import React, { useState, useEffect } from 'react';
import Board from './components/board';
import GroupSelector from './components/GroupSelector';
import SortingOptions from './components/SortingOptions';
import './App.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]); // State for storing users
    const [groupBy, setGroupBy] = useState('status');
    const [sortBy, setSortBy] = useState('priority');

    // Fetch tickets and users from the API
    useEffect(() => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);  // Log the full API response
                if (Array.isArray(data.tickets) && Array.isArray(data.users)) {
                    setTickets(data.tickets);  // Set tickets data
                    setUsers(data.users);  // Set users data
                } else {
                    console.error("API response does not contain valid tickets or users arrays");
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Board</h1>
            <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
            <SortingOptions sortBy={sortBy} setSortBy={setSortBy} />
            <Board tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} /> {/* Pass users to Board */}
        </div>
    );
}

export default App;
