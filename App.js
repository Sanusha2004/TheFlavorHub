import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SubmitRecipe from "./pages/SubmitRecipe";
import RecipeDetail from "./pages/RecipeDetail";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-cream text-brown min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit" element={<SubmitRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
