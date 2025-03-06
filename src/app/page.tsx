// src/app/page.tsx

"use client";

import React, { useState } from "react";

const Home: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center relative">
      {/* Background Image */}

      <div
       className="absolute top-20 bottom-20 left-0 right-0 bg-cover bg-center mx-auto z-20"
        style={{
          backgroundImage: "url('/mountain.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

{/* Navigation Bar */}

<nav className="absolute top-25 left-[40%] transform -translate-x-1/2 flex space-x-35 text-white z-30">
  <a href="#" className="text-white hover:text-blue-400">Anywhere app</a>
  <a href="#" className="text-white hover:text-blue-400">Home</a>
  <a href="#" className="text-white hover:text-blue-400">Join</a>
</nav>
      {/* Transparent Registration Form */}

      <div className="p-8 rounded-lg w-full max-w-md md:max-w-sm bg-transparent z-20 transform -translate-x-40  -translate-y- mt-20 ">
        <div className="text-left">
          <p className="text-sm text-gray-300">Start for free</p>
          <h1 className="text-2xl font-bold mb-2 text-white">Create New Account</h1>
          <p className="text-xs text-gray-400 mb-6">
            Already a member? <a href="#" className="text-blue-400 hover:underline">Log in</a>
          </p>
        </div>

        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-2 border rounded bg-transparent text-white placeholder-gray-400 border-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-2 border rounded bg-transparent text-white placeholder-gray-400 border-gray-400"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-400 border-gray-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded pr-10 bg-transparent text-white placeholder-gray-400 border-gray-400"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 012 12c1.75-4.8 6.35-8 11-8s9.25 3.2 11 8a10.05 10.05 0 01-11.875 6.825M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 012 12c1.75-4.8 6.35-8 11-8s9.25 3.2 11 8a10.05 10.05 0 01-11.875 6.825M15 12a3 3 0 11-6 0 3 3 0 016 0zM4.22 4.22l15.56 15.56"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full text-blue-500 py-2 rounded border border-blue-500 hover:bg-blue-50"
          >
            Change Method
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;