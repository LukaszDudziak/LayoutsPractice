//modal

const modalWrapper = document.getElementById("modal-wrapper");

const musicButton = document.getElementById("music-button");
const musicModal = document.getElementById("music-modal");

const streetButton = document.getElementById("street-button");
const streetModal = document.getElementById("street-modal");

const hotOnesButton = document.getElementById("hotOnes-button");
const hotOnesModal = document.getElementById("hotOnes-modal");

function showCoords(event) {
  let y = event.clientY;
  if (y > 530) {
    clearModals();
  }
}

musicButton.addEventListener("mouseover", () => {
  clearModals();
  modalWrapper.classList.remove("hidden");
  musicModal.classList.remove("hidden");
});

streetButton.addEventListener("mouseover", () => {
  clearModals();
  modalWrapper.classList.remove("hidden");
  streetModal.classList.remove("hidden");
});

hotOnesButton.addEventListener("mouseover", () => {
  clearModals();
  modalWrapper.classList.remove("hidden");
  hotOnesModal.classList.remove("hidden");
});

clearModals = () => {
  modalWrapper.classList.add("hidden");
  musicModal.classList.add("hidden");
  streetModal.classList.add("hidden");
  hotOnesModal.classList.add("hidden");
};

//slider
