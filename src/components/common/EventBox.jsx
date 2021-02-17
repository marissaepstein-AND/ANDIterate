import React from 'react';
import Events from '../../resources/data/events.json'
import IncomingEvents from './IncomingEvents';

export default function EventBox() {
    const calendarEvents = Events.items.map(events => <IncomingEvents events={events} />)
    console.log(Events);
    // console.log(Events.items.map((event) => event.summary))

    return (
        <div>
            {calendarEvents}
        </div>)
}
