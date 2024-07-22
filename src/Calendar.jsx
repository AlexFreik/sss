import { useState, useEffect } from 'react';
import { rooms, colors } from './config';
import { googleMock } from './test-utils';

class Session {
    /**
     * @param {object} event
     * @param {string} room
     * @param {date} start
     * @param {date} end
     * @param {string} color
     */
    constructor(event, room, start, end, color) {
        this.event = event;
        this.room = room;
        this.start = start;
        this.end = end;
        this.color = color;
    }
}

function flattenEvents(events) {
    const flat = [];
    events.forEach((e) => {
        e.alloc.forEach((a) => flat.push(new Session(e, a.room, a.start, a.end, a.color)));
    });

    return flat.sort((a, b) => a.start.getTime() - b.start.getTime());
}

function parseData(data) {
    const parsedData = JSON.parse(data);
    const events = parsedData.events;
    columnNames = parsedData.columnNames;
    columnNumbers = parsedData.columnNumbers;

    events.forEach((e) => {
        if (e.alloc.length === 0) {
            const start = new Date(e.details[columnNumbers.startDate]);
            const startTime = new Date(e.details[columnNumbers.startTime]);
            start.setHours(startTime.getHours(), startTime.getMinutes());

            const end = new Date(e.details[columnNumbers.startDate]);
            const endTime = new Date(e.details[columnNumbers.endTime]);
            end.setHours(endTime.getHours(), endTime.getMinutes());

            const upcomingRoom = rooms[rooms.length - 1].id;
            e.alloc.push(new Session({}, upcomingRoom, start, end, 'default'));
        }
        e.alloc.forEach((a) => {
            a.room = String(a.room);
            a.start = new Date(a.start);
            a.end = new Date(a.end);
        });
    });

    return parsedData;
}

function Calendar({ setSelectedEvent }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [sheetData, setSheetData] = useState(null);
    useEffect(() => {
        window.google.script.run
            .withFailureHandler((e) => setError(e))
            .withSuccessHandler((data) => {
                setSheetData(data);
                setLoading(false);
                setError(null);
                console.log(data);
            })
            .getEvents();
    }, []);

    if (loading) {
        return (
            <div className="m-auto my-20 flex w-3/4 flex-col gap-8">
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    // //const sessions = flattenEvents(data.events);
    // const baseDate = new Date();

    // const date = baseDate.toLocaleString('en-US', {
    //     hour: '2-digit',
    //     hour12: false,
    //     timeZone: 'Asia',
    // });
    // const range = 10;
    // const minDate = new Date(baseDate);
    // minDate.setDate(baseDate.getDate() - range);
    // minDate.setHours(0, 0, 0, 0);

    return (
        <div id="calendar">
            {/* <div className="m-3 grid grid-cols-[90px_auto] gap-2.5 sticky top-0">
          <div className="col-start-2 grid grid-cols-[repeat(7,200px)_400px] gap-1 bg-base-100">
            { rooms.map((r) => (
              <div className="h-[50px] flex gap-4" key={r.id}>
                <p className="inline text-3xl font-semibold">{r.id}</p>
                <p className="inline font-thin">{r.description}</p>
              </div>
            )) }
          </div>
        </div> */}
        </div>
    );
}

if (typeof google === 'undefined') {
    window.google = googleMock;
}

export default Calendar;
