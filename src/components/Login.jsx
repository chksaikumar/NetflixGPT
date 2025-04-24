import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {
  const [issigin, setsigin] = useState(true);
  const HandleSignUP = () => {
    setsigin(!issigin);
  };
  return (
    <div className="relative h-screen w-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/US-en-20250421-TRIFECTA-perspective_d267de16-c801-48de-9014-f47514040d8b_large.jpg"
          alt="Background"
        />
      </div>
      <form className="relative top-40 z-10 bg-black opacity-80 text-white max-w-md mx-auto p-8 rounded-lg flex flex-col space-y-4">
        <h1 className="text-3xl font-bold mb-4">
          {issigin ? "Sign In" : "Sign Up"}
        </h1>

        {!issigin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white-500"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white-500"
          required
        />
        <button className="p-3 bg-red-600 rounded text-white font-bold hover:bg-red-700 transition">
          {issigin ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-sm text-gray-400 mt-2 flex">
          {issigin ? (
            <>
              <span>New to Netflix? </span>
              <p
                onClick={HandleSignUP}
                className="text-white hover:underline mx-2"
              >
                Sign up now
              </p>
            </>
          ) : (
            <>
              <span>Already Registred ? </span>
              <p
                onClick={HandleSignUP}
                className="text-white hover:underline mx-2"
              >
                Sign In
              </p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
