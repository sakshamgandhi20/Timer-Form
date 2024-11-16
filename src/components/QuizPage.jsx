// import React, { useEffect, useState } from 'react';
// import { doFetchQuizSettingsFromBackend } from '../service/quizSetting-controller';

// const QuizPage = ({ onTimeUp }) => {
//   const [timeLeft, setTimeLeft] = useState();
//   const [formUrl, setFormUrl] = useState('');

//   async function doFetchQuizLink() {
//     var serverMsg = await doFetchQuizSettingsFromBackend();
//     console.log(serverMsg.data);
//     if (serverMsg.data.status === true) {
//       if (serverMsg.data.result) {
        
//         setTimeLeft(serverMsg.data.result.timerDuration);
//         setFormUrl(serverMsg.data.result.formUrl);
//         console.log(serverMsg.data);
//       } else {
//         alert(serverMsg.data.error)
//       }
//     } else {
//       alert(serverMsg.data.error);
//     }
//   }

//   useEffect(()=>{
//     doFetchQuizLink();
//   },[])

//   // Timer logic
//   useEffect(() => {
//     if (timeLeft <= 0) {
//       onTimeUp();
//     } else {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [timeLeft, onTimeUp]);

//   // Format time in MM:SS
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//   };

//   return (
//     <div className="min-h-screen bg-[#fdf7ed] flex flex-col items-center p-4">
//       {/* Sticky Timer */}
//       <div className="w-full bg-[#ffd700] text-[#663300] font-semibold py-2 px-4 shadow-md sticky top-0 z-50 flex justify-center items-center">
//         <span>⏳</span>
//         <span className="ml-2">{formatTime(timeLeft)}</span>
//       </div>

//       {/* Quiz Content */}
//       <div className="w-full max-w-4xl mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#663300] text-center mb-4">
//           Avyakt Murli Quiz 📃
//         </h1>
//         <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
//           This is a timed quiz. Once the timer runs out, your answers will be submitted automatically.
//         </p>

//         {/* Google Form Embed */}
//         <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 md:p-8">
//           <iframe
//             src={formUrl}
//             // src="https://docs.google.com/forms/d/e/1FAIpQLSfaLRQNGTZ37NWULU_D3RlNH32LqXy6jXb1Sy3xmk4EG7lP2g/viewform?embedded=true"
//             title="Quiz Form"
//             width="100%"
//             height="500px"
//             className="border-0 rounded-lg"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 text-gray-500 text-sm text-center">
//         <p className="italic">
//           Ensure you submit the quiz before time runs out. Good luck! 🍀
//         </p>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;
import React, { useEffect, useState } from 'react';
import { doFetchQuizSettingsFromBackend } from '../service/quizSetting-controller';
import axios from 'axios';

const QuizPage = () => {
  const [timeLeft, setTimeLeft] = useState();
  const [formUrl, setFormUrl] = useState('');

 

  async function doFetchQuizLink() {
    const serverMsg = await doFetchQuizSettingsFromBackend();
    if (serverMsg.data.status === true && serverMsg.data.result) {
      setTimeLeft(serverMsg.data.result.timerDuration);
      setFormUrl(serverMsg.data.result.formUrl);
    } else {
      alert(serverMsg.data.error);
    }
  }

  useEffect(() => {
    doFetchQuizLink();
  }, []);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleAutoSubmit(); // Trigger form submission when time is up
      // onTimeUp();
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Function to handle automatic submission of the Google Form
  const handleAutoSubmit = async () => {
    const googleFormAutoSubmitUrl = "https://script.google.com/macros/s/AKfycbxiHR5vmWJlrCkjXdk3EfV4EHAmmRmpAomoXwKwuV6346HLV6h3jDSWFmq83Vq8tgeb9g/exec";
    try {
      await axios.get(googleFormAutoSubmitUrl);
      console.log('Form auto-submitted successfully!');
    } catch (error) {
      console.error('Failed to auto-submit form:', error);
    }
  };
  

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#fdf7ed] flex flex-col items-center p-4">
      {/* Sticky Timer */}
      <div className="w-full bg-[#ffd700] text-[#663300] font-semibold py-2 px-4 shadow-md sticky top-0 z-50 flex justify-center items-center">
        <span>⏳</span>
        <span className="ml-2">{formatTime(timeLeft)}</span>
      </div>

      {/* Quiz Content */}
      <div className="w-full max-w-4xl mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#663300] text-center mb-4">
          Avyakt Murli Quiz 📃
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          This is a timed quiz. Once the timer runs out, your answers will be submitted automatically.
        </p>

        {/* Google Form Embed */}
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 md:p-8">
          <iframe
            src={formUrl}
            title="Quiz Form"
            width="100%"
            height="500px"
            className="border-0 rounded-lg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-gray-500 text-sm text-center">
        <p className="italic">Ensure you submit the quiz before time runs out. Good luck! 🍀</p>
      </div>
    </div>
  );
};

export default QuizPage;



