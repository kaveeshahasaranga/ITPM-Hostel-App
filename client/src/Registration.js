import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // ස්ටයිල් සඳහා

function Registration() {
    // 1. Form එකේ දත්ත තියාගන්න State හදාගැනීම
    const [studentData, setStudentData] = useState({
        name: "",
        itNumber: "",
        email: "",
        password: ""
    });

    // 2. Input එකේ ටයිප් කරන දේ State එකට යැවීම
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    // 3. Register Button එක එබුවම දත්ත Server එකට යැවීම
    const handleSubmit = async (e) => {
        e.preventDefault(); // Page එක Refresh වෙන එක නවත්වනවා
        try {
            // Server එකට දත්ත යවනවා (POST request)
            const response = await axios.post('http://localhost:3001/students/register', studentData);
            alert("Registration Successful!"); // සාර්ථක නම් මැසේජ් එකක්
            console.log(response.data);
        } catch (error) {
            alert("Registration Failed! (Check Console)");
            console.error(error);
        }
    };

    return (
        <div className="App-header">
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                <input 
                    type="text" name="name" placeholder="Full Name" 
                    onChange={handleChange} required 
                    style={{ padding: '10px', width: '300px' }}
                />

                <input 
                    type="text" name="itNumber" placeholder="IT Number (e.g., IT20001234)" 
                    onChange={handleChange} required 
                    style={{ padding: '10px' }}
                />

                <input 
                    type="email" name="email" placeholder="Email Address" 
                    onChange={handleChange} required 
                    style={{ padding: '10px' }}
                />

                <input 
                    type="password" name="password" placeholder="Password" 
                    onChange={handleChange} required 
                    style={{ padding: '10px' }}
                />

                <button type="submit" style={{ padding: '10px', backgroundColor: '#61dafb', cursor: 'pointer' }}>
                    Register Student
                </button>
            </form>
        </div>
    );
}

export default Registration;