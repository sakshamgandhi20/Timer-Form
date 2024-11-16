import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { doFetchAllAdminSettingsFromBackend,doUpdateQuizSettingsFromBackend,doUpdateQuizInstructionsFromBackend } from '../service/quizSetting-controller';


const AdminSettings = () => {
  const [formUrl, setFormUrl] = useState('');
  const [timerDuration, setTimerDuration] = useState('');
  const [instructions, setInstructions] = useState('');
  const [newInstructions, setNewInstructions] = useState('');

  // Fetch settings on load
  async function doFetchAllSettings (){
    var serverMsg = await doFetchAllAdminSettingsFromBackend();
    console.log(serverMsg.data);
    if(serverMsg.data.status){
      setFormUrl(serverMsg.data.settings.formUrl);
      setTimerDuration(serverMsg.data.settings.timerDuration);
      setInstructions(serverMsg.data.instructions.instructions)
    }
    else{
      alert(serverMsg.data.error)
    }
  }

  
  
  // Update settings
  const handleUpdateSettings = async () => {
    var serverMsg = await doUpdateQuizSettingsFromBackend({formUrl:formUrl,timerDuration:timerDuration});
    if(serverMsg.data.status){
      alert("settings Saved")
    }
    else
      alert(serverMsg.data.error);
  };
  
  // Update instructions
  const handleUpdateInstructions = async () => {
    var serverMsg = await doUpdateQuizInstructionsFromBackend({instructions:newInstructions});
    if(serverMsg.data.status){
      alert("settings Saved")
    }
    else
      alert(serverMsg.data.error);
  };
  
  useEffect(()=>{
    doFetchAllSettings();
  },[])

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
            <p className="whitespace-pre-wrap text-[#020617] text-justify">{instructions || 'No instructions set'}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminSettings;
