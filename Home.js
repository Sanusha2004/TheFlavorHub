import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">The Flavor Hub</h1>
      <input
        type="text"
        placeholder="Search for recipes..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-brown mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for top recipe cards */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Spicy Paneer Curry</h2>
          <p className="text-sm text-gray-500">by Zara</p>
          <button className="mt-2 text-sm text-brown hover:underline">Like</button>
          <button className="ml-4 text-sm text-brown hover:underline">Comment</button>
        </div>
      </div>
    </div>
  );
}
