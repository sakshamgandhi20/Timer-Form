import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    if (password === 'admin123') {
      navigate('/adminsetting');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-#fdf7ed p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-3xl font-bold text-[#663300] mb-6">Admin Login 🔑</h2>
        <input
          type="password"
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:border-[#ffd700] bg-[#ebe5de54] text-[#663300]"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handlePasswordSubmit}
          className="w-full bg-[#ffd700] hover:bg-yellow-600 text-[#663300] font-semibold py-3 rounded transition duration-200"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
