const names = [
  "Jarabacoa Organic",
  "Locally Roasted Coffee",
  "Santa Clara Lavado",
];

const descriptions = [
  "Medium roasted whole beans allowing the true flavor characteristic to come through for a remarkable taste.",
  "It's just coffee. Nothing special.",
  "THIS BLEND DANCES PERFECTLY WITH A FILTER. YET, IT IS JUST AS FABULOUS FOR ALL OTHER BREW METHODS. ",
];

const prices = ["16$", "5$", "99$"];

const images = ["./img/1.png", "./img/2.png", "./img/3.png"];

const sliderElement = document.getElementById("js-slider-element");
const coffeeName = document.getElementById("js-element-name");
const coffeeDescription = document.getElementById("js-element-description");
const coffeeImage = document.getElementById("js-element-image");
const previousCoffee = document.getElementById("js-previous");
const nextCoffee = document.getElementById("js-next");
const buyCoffee = document.getElementById("js-buy");

let coffeeNumber = 0;
let changeDescriptionsTimer;

const animationClassRemoval = () => {
  sliderElement.classList.remove(
    "slider-element-animation",
    "slider-element-animation-reverse"
  );
};

const coffeeChange = (button) => {
  coffeeName.innerHTML = names[coffeeNumber];
  coffeeDescription.innerHTML = descriptions[coffeeNumber];
  coffeeImage.src = images[coffeeNumber];
  buyCoffee.innerHTML = `Buy \(${prices[coffeeNumber]}\)`;
  button.disabled = false;
  setTimeout(animationClassRemoval, 1000);
};

const navigationHandler = (e) => {
  clearTimeout(changeDescriptionsTimer);
  let button = e.target;
  button.disabled = true;
  if (e.target.innerHTML === "Next") {
    coffeeNumber++;
    if (coffeeNumber >= names.length) {
      coffeeNumber = 0;
    }
    sliderElement.classList.add("slider-element-animation");
  }
  if (e.target.innerHTML === "Previous") {
    coffeeNumber--;
    if (coffeeNumber < 0) {
      coffeeNumber = names.length - 1;
    }
    sliderElement.classList.add("slider-element-animation-reverse");
  }
  changeDescriptionsTimer = setTimeout(() => coffeeChange(button), 1000);
};

nextCoffee.addEventListener("click", navigationHandler);
previousCoffee.addEventListener("click", navigationHandler);
