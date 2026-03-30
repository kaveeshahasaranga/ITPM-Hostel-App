import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        navigate('/login'); // ආපහු Login එකට යවනවා
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>🎓 Student Dashboard</h1>
            <p>Welcome to the Hostel Management System!</p>

            <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                <h3>🛏️ My Room Details</h3>
                <p>Status: <span style={{ color: 'red' }}>Not Assigned Yet</span></p>
                <button style={{ padding: '10px', backgroundColor: '#61dafb', border: 'none', cursor: 'pointer' }}>
                    Request a Room
                </button>
            </div>

            <button 
                onClick={handleLogout} 
                style={{ marginTop: '50px', padding: '10px 20px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;