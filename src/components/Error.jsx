import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
      {/* Animated GIF */}
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="Error Animation"
        className="w-72 h-72 object-contain mb-8"
      />

      {/* Error Text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-gray-400 text-lg mb-8 text-center">
        The page you're looking for doesn't exist or another error occurred.
      </p>

      {/* Go Home Button */}
      <button
        onClick={handleGoHome}
        className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
