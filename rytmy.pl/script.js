const musicButton = document.getElementById("music-button");
const musicModal = document.getElementById("music-modal");

musicButton.addEventListener("mouseover", () => {
  musicModal.classList.remove("hidden");
});
