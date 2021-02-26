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

let activeElement = 0;
const timeChange = 8000;

//slider elements
const sliderDate = document.getElementById("slider-date");
const sliderLead = document.getElementById("slider-lead");
const sliderAuthor = document.getElementById("slider-author");
const sliderRightImage = document.querySelector("#slider-right img");
const sliderLeft = document.getElementById("slider-left");
const sliderLeftAfter = window
  .getComputedStyle(sliderLeft, "::after")
  .getPropertyValue("bottom");

console.log(sliderRightImage);

//new values
const sliderDates = ["11 lutego 2021", "12 lutego 2021", "13 lutego 2021"];
const sliderLeads = [
  "Dawid Podsiadło i Radek Kotarski we wspólnym podcaście",
  "BTS cośtam zrobił i bardzo fajnie że im wyszło",
  "Ariana Grande też cośtam ogarnęła i fajnie, dobrze dla niej",
];
const sliderAuthors = [
  "Weronika Szymańska",
  "Karolina Fijałkowska",
  "Adam Nowak",
];

const sliderRightImageSources = [
  "./assets/slider2.png",
  "./assets/slider1.png",
  "./assets/slider3.png",
];

function changeElement() {
  activeElement++;
  if (activeElement == sliderDates.length) activeElement = 0;

  sliderDate.textContent = sliderDates[activeElement];
  sliderLead.textContent = sliderLeads[activeElement];
  sliderAuthor.textContent = sliderAuthors[activeElement];
  sliderRightImage.src = sliderRightImageSources[activeElement];
}

setInterval(changeElement, timeChange);

//animations todo on left ::after??
