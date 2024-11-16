import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz'); // Redirect to the Quiz Page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf7ed] p-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#663300] mb-8 text-center">
        Welcome to the Avyakt Murli Quiz 📖
      </h1>

      {/* Guidelines Section */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#663300] mb-4">Quiz Guidelines</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li>The quiz is time-bound, so make sure you complete it before the timer runs out.</li>
          <li>All answers will be submitted automatically once the timer ends.</li>
          <li>Ensure a stable internet connection while taking the quiz.</li>
          <li>Do not refresh the page or close the browser during the quiz.</li>
          <li>Each question is mandatory; make sure to attempt all questions.</li>
        </ul>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartQuiz}
        className="bg-[#ffd700] hover:bg-yellow-600 text-[#663300] font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200"
      >
        Start Quiz 🚀
      </button>
    </div>
  );
};

export default WelcomePage;
