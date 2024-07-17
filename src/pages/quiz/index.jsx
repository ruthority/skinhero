import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Quiz() {
    return (
        <div>
            <h1>Quiz Page</h1>
            <Outlet />
        </div>
    );
}