import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from './Calendar';
import Sidebar from './Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Calendar />
        <Sidebar />
    </React.StrictMode >,
);
