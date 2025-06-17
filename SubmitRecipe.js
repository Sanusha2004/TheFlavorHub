import React from "react";

export default function SubmitRecipe() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Share Your Recipe</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Recipe Name" className="w-full p-3 border rounded" />
        <textarea placeholder="Ingredients" className="w-full p-3 border rounded h-24"></textarea>
        <textarea placeholder="Instructions" className="w-full p-3 border rounded h-40"></textarea>
        <button type="submit" className="bg-brown text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
