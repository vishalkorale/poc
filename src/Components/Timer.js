// import React, { useState, useEffect } from "react";

// const Timer = ({
//   questions,
//   answeredQuestions,
//   currentQuestionIndex,
//   reviewedQuestions,
// }) => {
//   const [duration, setDuration] = useState(10 * 60); // 10 minutes in seconds
//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     let timer;
//     timer = setInterval(() => {
//       setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Format the time in HH:MM:SS format
//   const formatHours = (time) => {
//     const hours = Math.floor(time / 3600);
//     return hours < 10 ? "0" + hours : hours;
//   };

//   const formatMinutes = (time) => {
//     const minutes = Math.floor((time % 3600) / 60);
//     return minutes < 10 ? "0" + minutes : minutes;
//   };

//   const formatSeconds = (time) => {
//     const seconds = Math.floor(time % 60);
//     return seconds < 10 ? "0" + seconds : seconds;
//   };

//   return (
//     <div className="border-2 border-black bg-white h-full">
//       <div className="text-lg font-semibold text-center h-12 border-2  bg-gray-200 p-2 mb-5">Time left</div>
//       <div className="grid grid-cols-3 gap-1 mr-32 ml-32  text-center  ">
//         <div>
//           <p>{formatHours(duration - elapsedTime)}</p>
//           <p>hours</p>
//         </div>
//         <div>
//           <p>{formatMinutes(duration - elapsedTime)}</p>
//           <p>minutes</p>
//         </div>
//         <div>
//           <p>{formatSeconds(duration - elapsedTime)}</p>
//           <p>seconds</p>
//         </div>
//       </div>
//         <p className="font-semibold text-center justify-center mt-10 border-2  h-12 p-2 bg-gray-200">Java</p>
//       <div className="mt-5  mr-28 ml-28">
//         <div className="flex flex-wrap gap-2">
//           {questions.map((_, index) => (
//             <div
//               key={index}
//               className={`w-6 h-6 flex justify-center items-center  bg-slate-200 rounded-tl-lg ${
//                 answeredQuestions[index]
//                   ? "bg-green-500"
//                   : reviewedQuestions[index]
//                   ? "bg-red-500"
//                   : currentQuestionIndex === index
//                   ? "bg-gray-500"
//                   : "bg-white"
//               }`}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from "react";

const Timer = ({
  questions,
  answeredQuestions,
  currentQuestionIndex,
  reviewedQuestions,
}) => {
  const [duration, setDuration] = useState(10 * 60); // 10 minutes in seconds
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update question statuses based on elapsedTime
    // For example, mark questions as answered if the user has selected an option and submitted
    // Update answeredQuestions and reviewedQuestions state accordingly
  }, [elapsedTime]);

  // Format the time in HH:MM:SS format
  const formatHours = (time) => {
    const hours = Math.floor(time / 3600);
    return hours < 10 ? "0" + hours : hours;
  };

  const formatMinutes = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    return minutes < 10 ? "0" + minutes : minutes;
  };

  const formatSeconds = (time) => {
    const seconds = Math.floor(time % 60);
    return seconds < 10 ? "0" + seconds : seconds;
  };

  return (
    <div className=" bg-white h-full">
      <div className="text-lg font-semibold text-center h-12   bg-gray-300 p-2 mb-5">Time left</div>
      <div className="grid grid-cols-3 gap-1 mr-32 ml-32  text-center  ">
        <div>
          <p>{formatHours(duration - elapsedTime)}</p>
          <p>hours</p>
        </div>
        <div>
          <p>{formatMinutes(duration - elapsedTime)}</p>
          <p>minutes</p>
        </div>
        <div>
          <p>{formatSeconds(duration - elapsedTime)}</p>
          <p>seconds</p>
        </div>
      </div>
      <p className="font-semibold text-center justify-center mt-10   h-12 p-2 bg-gray-300">Java</p>
      <div className="mt-5  mr-28 ml-28">
        <div className="flex flex-wrap gap-2">
          {questions.map((_, index) => (
            <div
            key={index}
            className={`w-6 h-6 flex justify-center items-center  rounded-tl-lg ${
              answeredQuestions[index]
                ? "bg-green-500"
                : reviewedQuestions[index]
                ? "bg-red-600"
                : currentQuestionIndex === index
                ? "bg-gray-500"
                : "bg-slate-200"
            }`}
          >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timer;
