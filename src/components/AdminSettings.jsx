import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminSettings = () => {
  const [formUrl, setFormUrl] = useState('');
  const [timerDuration, setTimerDuration] = useState('');
  const [instructions, setInstructions] = useState('');
  const [newInstructions, setNewInstructions] = useState('');

  // Fetch settings on load
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');
        if (response.data.status) {
          setFormUrl(response.data.settings.formUrl);
          setTimerDuration(response.data.settings.timerDuration);
          setInstructions(response.data.settings.instructions);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    fetchSettings();
  }, []);

  // Update settings
  const handleUpdateSettings = async () => {
    try {
      await axios.post('/api/settings', { formUrl, timerDuration });
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  // Update instructions
  const handleUpdateInstructions = async () => {
    try {
      await axios.post('/api/instructions', { instructions: newInstructions });
      alert('Instructions updated successfully!');
      setInstructions(newInstructions);
    } catch (error) {
      console.error('Error updating instructions:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf7ed] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-[#663300] mb-8 text-center">Admin Panel ⚙️</h2>

        {/* Quiz Settings */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-[#663300] mb-4">Quiz Settings</h3>
          <label className="block mb-2 text-gray-700">Google Form URL:</label>
          <input
            type="text"
            value={formUrl}
            onChange={(e) => setFormUrl(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:border-[#ffd700] bg-[#ebe5de54] text-[#663300]"
          />

          <label className="block mb-2 text-gray-700">Timer Duration (in seconds):</label>
          <input
            type="number"
            value={timerDuration}
            onChange={(e) => setTimerDuration(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:border-[#ffd700] bg-[#ebe5de54] text-[#663300]"
          />

          <button
            onClick={handleUpdateSettings}
            className="w-full bg-[#ffd700] hover:bg-yellow-600 text-[#663300] font-semibold py-3 rounded transition duration-200"
          >
            Save Settings
          </button>
        </section>

        {/* Quiz Instructions */}
        <section>
          <h3 className="text-2xl font-semibold text-[#663300] mb-4">Quiz Instructions</h3>
          <textarea
            rows="5"
            value={newInstructions}
            onChange={(e) => setNewInstructions(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded mb-4 focus:outline-none focus:border-[#ffd700] bg-[#ebe5de54] text-[#663300]"
            placeholder="Enter new instructions..."
          />
          <button
            onClick={handleUpdateInstructions}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition duration-200"
          >
            Update Instructions
          </button>

          <div className="mt-8 bg-gray-100 p-4 rounded">
            <h4 className="font-bold text-lg text-[#663300] mb-2">Current Instructions:</h4>
            <p className="whitespace-pre-wrap">{instructions || 'No instructions set'}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminSettings;
