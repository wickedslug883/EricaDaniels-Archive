import React, { useState } from 'react';
import Calendar from 'react-calendar';
import  EventForm  from './EventForm.js';
import  EventList  from './EventList.js';

function Events() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventFormData, setEventFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [activeDateColor, setActiveDateColor] = useState(null);
    

    function handleEventSubmit(event) {
        event.preventDefault();
        if (isEditing) {
            // logic to update event in events state variable
        } else {
            const newEvent = {
                id: Date.now(),
                title: event.target.title.value,
              
                startTime: event.target.startTime.value,
                endTime: event.target.endTime.value,
                date: selectedDate,
                color: activeDateColor

            };
            setEvents([...events, newEvent]);
        }
        setEventFormData({});
        setIsEditing(false);
    }

    function handleEventDelete(eventId) {
        setEvents(events.filter(event => event.id !== eventId));
    }

    function handleEventEdit(eventId) {
        const eventToEdit = events.find(event => event.id === eventId);
        setEventFormData({...eventToEdit});
        setIsEditing(true);
    }
    function handleActiveDateChange(date) {
      setSelectedDate(date);
      const newColor = generateRandomColor();
      setActiveDateColor(newColor); 
    }
    function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  return (
    <div>
       <h1 style={{textAlign: 'center', color: 'white', fontWeight: '850', borderBottom: 'solid white 1px', borderTop: 'solid white 1px' ,    background: ' linear-gradient(180deg, rgba(255,203,203,1) 0%, rgba(4,3,6,1) 100%)'}}> SHOP</h1>
        <Calendar 
            value={selectedDate} 
            onChange={handleActiveDateChange} 
            tileContent={({ date, view }) => {
                const eventsOnDate = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
                return eventsOnDate.length > 0 ? (
                    <div style={{ backgroundColor: eventsOnDate[0].color }}>
                        {eventsOnDate.length}
                    </div>
                ) : null;
            }}
        />
        <EventForm 
        className='formSelect'
            onSubmit={handleEventSubmit} 
            eventData={eventFormData} 
            isEditing={isEditing}
/>
<EventList
 className='formList'
events={events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString())}
selectedDate={selectedDate}
onDelete={handleEventDelete}
onEdit={handleEventEdit}
/>
</div>
);
}

export default Events;