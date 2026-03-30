import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    // Logout function
   

            <button 
                onClick={handleLogout} 
                style={{ marginTop: '50px', padding: '10px 20px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;