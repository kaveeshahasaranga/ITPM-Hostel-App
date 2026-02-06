import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // උඩින්ම මේක දාන්න
import './App.css'; 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Backend එකට Email සහ Password යවනවා
            const response = await axios.post('http://localhost:3001/students/login', {
                email: email,
                password: password
            });

            // සාර්ථක නම්
            alert("Login Successful! Welcome " + response.data.student.name);
            console.log(response.data);
            
        } catch (error) {
            // අසාර්ථක නම් (වැරදි පාස්වර්ඩ් හෝ ඊමේල්)
            if(error.response) {
                alert(error.response.data.message); // Backend එකෙන් එවන Error Message එක
            } else {
                alert("Login Failed! Server Error.");
            }
        }
    };

    return (
        <div className="App-header">
            <h2>Student Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                <input 
                    type="email" placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={{ padding: '10px', width: '300px' }}
                />

                <input 
                    type="password" placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    style={{ padding: '10px' }}
                />

                <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', border: 'none' }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;