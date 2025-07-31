document.getElementById("search").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const title = card.querySelector("p").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});
