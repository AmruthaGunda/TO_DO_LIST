import React from 'react';

function Card({ ticket }) {
    return (
        <div className="card">
            {/* Ticket Number */}
            <h5 className="ticket-number">{ticket.id}</h5>

            {/* Ticket Title */}
            <h3 className="ticket-title">{ticket.title}</h3>

            {/* Priority Icon */}
            <div className="priority-icon">
                <span></span> {/* Use an actual icon library for more refined icons */}
            </div>

            {/* Feature Request Label */}
            <div className="ticket-label">
                <span className="feature-request-label">Feature Request</span>
            </div>
        </div>
    );
}

export default Card;
