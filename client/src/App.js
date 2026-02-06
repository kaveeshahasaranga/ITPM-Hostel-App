import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* උඩින්ම තියෙන Navigation Bar එක (Buttons) */}
        <nav style={{ padding: '20px', backgroundColor: '#20232a', marginBottom: '30px' }}>
          {/* මේ Link ක්ලික් කළාම පිටුව මාරු වෙනවා */}
          <Link to="/login" style={{ margin: '0 20px', color: '#61dafb', textDecoration: 'none', fontSize: '20px' }}>Login</Link>
          <Link to="/register" style={{ margin: '0 20px', color: '#61dafb', textDecoration: 'none', fontSize: '20px' }}>Register</Link>
        </nav>

        {/* පිටු මාරු වන කොටස */}
        <Routes>
          {/* මුලින්ම එනකොට (Home) කෙලින්ම Login එකට යවනවා */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/register" element={<Registration />} />
  <Route path="/login" element={<Login />} />
  
  {/* 👇 2. අලුත් Route එක මෙතනට දාන්න */}
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;