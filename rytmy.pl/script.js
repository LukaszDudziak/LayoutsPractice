const slider = document.getElementById("slider-div");

const musicButton = document.getElementById("music-button");
const musicModal = document.getElementById("music-modal");

const streetButton = document.getElementById("street-button");
const streetModal = document.getElementById("street-modal");

const hotOnesButton = document.getElementById("hotOnes-button");
const hotOnesModal = document.getElementById("hotOnes-modal");

musicButton.addEventListener("mouseover", () => {
  clearModals();
  musicModal.classList.remove("hidden");
});

streetButton.addEventListener("mouseover", () => {
  clearModals();
  streetModal.classList.remove("hidden");
});

hotOnesButton.addEventListener("mouseover", () => {
  clearModals();
  hotOnesModal.classList.remove("hidden");
});

clearModals = () => {
  musicModal.classList.add("hidden");
  streetModal.classList.add("hidden");
  hotOnesModal.classList.add("hidden");
};

slider.addEventListener("mouseover", clearModals);

//modal wrapper - to make white bgc + clearing modals
