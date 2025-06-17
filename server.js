const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Recipe = require("./models/Recipe");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_ATLAS_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  res.json(recipes);
});

app.post("/recipes", async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const recipe = new Recipe({ title, ingredients, instructions });
  await recipe.save();
  res.json(recipe);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
