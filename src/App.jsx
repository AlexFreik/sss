import { useState } from 'react';
import Calendar from './Calendar';
import Sidebar from './Sidebar';

function App() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <>
            <Calendar setSelectedEvent={setSelectedEvent} />
            {selectedEvent && <Sidebar event={selectedEvent} setEvent={setSelectedEvent} />}
        </>
    );
}

export default App;
