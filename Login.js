import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full bg-brown text-white p-2 rounded hover:bg-opacity-90">
          Continue
        </button>
      </div>
    </div>
  );
}
