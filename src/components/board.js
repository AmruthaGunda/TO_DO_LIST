import React from 'react';
import Card from './Card';

// Helper function to map priority numbers to labels
const getPriorityLabel = (priority) => {
    switch (priority) {
        case 4:
            return "No priority";
        case 3:
            return "Urgent";
        case 2:
            return "Low";
        case 1:
            return "High";
        default:
            return "Medium"; // For priority 0 or undefined
    }
};

// Group tickets by status
const groupByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        const { status } = ticket;
        if (!groups[status]) {
            groups[status] = [];
        }
        groups[status].push(ticket);
        return groups;
    }, {});
};

// Group tickets by user
const groupByUser = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        const { userId } = ticket;
        if (!groups[userId]) {
            groups[userId] = [];
        }
        groups[userId].push(ticket);
        return groups;
    }, {});
};

// Group tickets by priority using readable labels
const groupByPriority = (tickets) => {
    return tickets.reduce((groups, ticket) => {
        const priorityLabel = getPriorityLabel(ticket.priority); // Convert priority number to label
        if (!groups[priorityLabel]) {
            groups[priorityLabel] = [];
        }
        groups[priorityLabel].push(ticket);
        return groups;
    }, {});
};

// Sorting function to sort tickets by priority or title
const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
        if (sortBy === 'priority') {
            return b.priority - a.priority;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
};

function Board({ tickets, groupBy, sortBy }) {
    let groupedTickets;

    // Determine the grouping method based on 'groupBy' prop
    if (groupBy === 'status') {
        groupedTickets = groupByStatus(tickets);
    } else if (groupBy === 'user') {
        groupedTickets = groupByUser(tickets);
    } else if (groupBy === 'priority') {
        groupedTickets = groupByPriority(tickets);
    }

    return (
        <div className="board">
            {Object.keys(groupedTickets).map((group) => (
                <div key={group} className="column">
                    <h2>{group}</h2>
                    {sortTickets(groupedTickets[group], sortBy).map((ticket) => (
                        <Card key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
