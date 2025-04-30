import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidationData } from "../utils/Validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Redux/Store/UserSlice.js";

import { PHOTOURL } from "../utils/data.js";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [Errormessage, setErrormessage] = useState(null);
  const [issigin, setsigin] = useState(true);

  const HandleSignUP = () => {
    setsigin(!issigin);
  };

  const handelButtonClick = () => {
    const validationValue = checkvalidationData(
      email.current.value,
      password.current.value
    );
    setErrormessage(validationValue);
    if (validationValue) return;

    if (!issigin) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: PHOTOURL,
            })
              .then(() => {
                // After profile updated
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid,
                    email,
                    displayName,
                    photoURL,
                  })
                );
              })
              .catch((error) => {
                console.log(error);
                navigate("/error");
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`${errorCode} -- ${errorMessage}`);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL,
              })
            );
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`${errorCode} -- ${errorMessage}`);
        });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      <Header />

      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/US-en-20250421-TRIFECTA-perspective_d267de16-c801-48de-9014-f47514040d8b_large.jpg"
          alt="Background"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md md:max-w-lg lg:max-w-md bg-black/80 text-white p-8 md:p-10 rounded-lg flex flex-col space-y-6"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            {issigin ? "Sign In" : "Sign Up"}
          </h1>

          {!issigin && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {Errormessage && (
            <p className="text-sm text-red-500 text-center">{Errormessage}</p>
          )}

          <button
            className="w-full py-3 bg-red-600 rounded font-bold hover:bg-red-700 transition text-white"
            onClick={handelButtonClick}
          >
            {issigin ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center text-sm text-gray-400 mt-2">
            {issigin ? (
              <>
                <span>New to Netflix? </span>
                <button
                  type="button"
                  onClick={HandleSignUP}
                  className="text-white hover:underline ml-1"
                >
                  Sign up now
                </button>
              </>
            ) : (
              <>
                <span>Already registered? </span>
                <button
                  type="button"
                  onClick={HandleSignUP}
                  className="text-white hover:underline ml-1"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
