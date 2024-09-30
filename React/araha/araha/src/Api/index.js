import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../component/dashboard';

function Api() {
    const [records, setRecords] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/register')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRecords(data);
                // Check if the user data indicates they are logged in
                if (data && data.user) { // Adjust based on your data structure
                    setIsLoggedIn(true);
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    // Show loading state while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to='/' />} />
                <Route path='/' element={<div>Home/Login Page</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Api;
