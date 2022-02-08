const nightModeButton = document.querySelector(".night-mode-button")

nightModeButton.addEventListener("click", (event) => {
  const cards = document.querySelectorAll(".card");
  const titleH1 = document.querySelector("h1");
  const paragraph = document.querySelector("p");
  const container = document.querySelector(".container")
  const body = document.querySelector("body")

  titleH1.classList.toggle("night-mode-h1");
  paragraph.classList.toggle("night-mode-text");
  nightModeButton.classList.toggle("night-mode-button-style");
  container.classList.toggle("night-mode-background")
  body.classList.toggle("night-mode-background")
  cards.forEach ((card) => {
    card.classList.toggle("night-mode-background")
  })
});
