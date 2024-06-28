import { useState } from 'react';
import Calendar from './Calendar';
import Sidebar from './Sidebar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Calendar />
            <Sidebar />
        </>
    );
}

export default App;
