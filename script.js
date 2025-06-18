
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Top Recipes</h2>
    <div class="recipe-card">
      <h3>Spicy Paneer Tikka</h3>
      <p>🔥 Likes: 102 | 💬 Comments: 12</p>
      <button onclick="like()">❤️ Like</button>
    </div>
    <div class="recipe-card">
      <h3>Classic Chocolate Cake</h3>
      <p>🔥 Likes: 89 | 💬 Comments: 9</p>
      <button onclick="like()">❤️ Like</button>
    </div>
  `;
});

function like() {
  alert('Thanks for the like!');
}
