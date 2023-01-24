import React from 'react';

function EventList({ events, onDelete, onEdit }) {
    return (
        <ul>
            {events.map(event => (
                <li key={event.id}>
                    <p>{event.title} - {event.startTime} - {event.endTime}</p>
                    <button onClick={() => onEdit(event.id)}>Edit</button>
                    <button onClick={() => onDelete(event.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default EventList;