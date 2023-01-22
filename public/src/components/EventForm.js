import React from 'react';
function EventForm({ onSubmit, eventData, isEditing }) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                Title:
                <input type="text" name="title" defaultValue={eventData.title} />
            </label>
            <label>
                Start Time:
                <input type="time" name="startTime" defaultValue={eventData.startTime} />
            </label>
            <label>
                End Time:
                <input type="time" name="endTime" defaultValue={eventData.endTime} />
            </label>
            <button type="submit">{isEditing ? 'Save' : 'Create'} Event</button>
        </form>
    );
}
export default EventForm;