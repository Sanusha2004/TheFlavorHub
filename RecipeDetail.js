import React from "react";

export default function RecipeDetail() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Recipe Name</h2>
      <p className="text-gray-600 mb-4">by Author</p>
      <p className="mb-4">Here go the ingredients and instructions...</p>
      <div className="flex gap-4">
        <button className="text-brown hover:underline">Like</button>
        <button className="text-brown hover:underline">Comment</button>
        <button className="text-brown hover:underline">Review</button>
      </div>
    </div>
  );
}
