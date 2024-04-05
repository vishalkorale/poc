import React, { useState } from "react";
import Timer from "./Timer";
import QuestionsData from "./QuestionsData.json";

const Newexampage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [reviewedQuestions, setReviewedQuestions] = useState({});

  const questions = QuestionsData;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedOption) {
      setAnsweredQuestions((prevAnswered) => ({
        ...prevAnswered,
        [currentQuestionIndex]: true,
      }));
      setReviewedQuestions((prevReviewed) => ({
        ...prevReviewed,
        [currentQuestionIndex]: false,
      }));
      setSelectedOption(null); // Clear selected option after submission
      alert("Answer submitted!");
    } else {
      alert("Please select an option!");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleMarkForReview = () => {
    setReviewedQuestions((prevReviewed) => ({
      ...prevReviewed,
      [currentQuestionIndex]: !prevReviewed[currentQuestionIndex], // Toggle review status
    }));
  };

  return (
    <div className="parent_container   min-h-screen grid grid-cols-1 sm:grid-cols-[2fr,1fr]">
      {/* Left Container */}
      <div className="left_container   h-full flex flex-col justify-between">
        {/* Navbar */}
        <div className="navbar bg-gray-300 p-2  text-xl font-semibold text-center h-12">
          {/* Navbar Content */}
          Online Test
        </div>

        {/* Main Content */}
        <div className="main_content flex-1 p-4  ">
          {/* Main Content */}
          <div className=" ">
            <div className="p-4 max-h-full">
              <p>Question {currentQuestionIndex + 1}</p>
              <hr className=" border-1 border-slate-400 mt-3 mb-3"/>
              <p className="text-lg tracking-wide">{currentQuestion.question}</p>
              <div className="mt-4 space-y-2">
                <label className="block">Options:</label>
                {currentQuestion.options.map((option, index) => (
                  <label className="flex items-center " key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      onChange={() => setSelectedOption(option)}
                      checked={selectedOption === option}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        <div className="submit   p-1 flex ml-auto">
          <button
              onClick={handleSubmit}
              className={`py-1 px-3 bg-blue-500 text-white rounded ${
                selectedOption ? "block" : "hidden"
              }`}
            >
              Submit
            </button>

          </div>
        
        {/* Footer */}
        <div className="footer bg-gray-200 border-2  h-28 p-0 flex flex-col justify-between">
          {/* Footer Content */}
          <div className="   flex   p-3 ">
            <button
              onClick={handleMarkForReview}
              className={`py-1 px-3 mr-2  ${
                reviewedQuestions[currentQuestionIndex]
                  ? "bg-gray-500 text-black"
                  : "bg-red-700 text-white"
              } rounded`}
            >
              Mark for Review
            </button>
            <button
              onClick={handlePrevious}
              className="py-1 px-3 bg-blue-500 text-white rounded-l-full mx-2"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="py-1 px-3 bg-blue-500 text-white rounded-r-full"
            >
              Next
            </button>

            <button
              onClick={handleNext}
              className="py-1 px-3 text-white rounded-2xl bg-green-700 ml-auto"
            >
              Submit Test
            </button>
          </div>

          <div className=" border-2 border-black h-14">

          </div>

        </div>   
      </div>

      {/* Right Container */}
      <div className="right_container border-1 border-gray-300 shadow-md h-full">
        {/* Right Container Content */}
        <Timer
          questions={questions}
          answeredQuestions={answeredQuestions}
          currentQuestionIndex={currentQuestionIndex}
          reviewedQuestions={reviewedQuestions}
        />
      </div>
    </div>
  );
};

export default Newexampage;

