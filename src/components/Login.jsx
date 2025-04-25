import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidationData } from "../utils/Validate.js";
export const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [Errormessage, setErrormessage] = useState(null);

  const [issigin, setsigin] = useState(true);
  const HandleSignUP = () => {
    setsigin(!issigin);
  };

  const handelButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const validationValue = checkvalidationData(
      email.current.value,
      password.current.value
    );
    setErrormessage(validationValue);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative top-40 z-10 bg-black opacity-80 text-white max-w-md mx-auto p-8 rounded-lg flex flex-col space-y-4"
      >
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
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white-500"
          required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white-500"
          required
        />
        <p className="text-red-600">{Errormessage}</p>
        <button
          className="p-3 bg-red-600 rounded text-white font-bold hover:bg-red-700 transition"
          onClick={handelButtonClick}
        >
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
