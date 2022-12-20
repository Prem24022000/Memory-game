const Image = [
  {
    name: "fries",
    img: "image/fries.png",
  },
  {
    name: "cheeseburger",
    img: "image/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "image/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "image/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "image/milkshake.png",
  },
  {
    name: "pizza",
    img: "image/pizza.png",
  },
  {
    name: "fries",
    img: "image/fries.png",
  },
  {
    name: "cheeseburger",
    img: "image/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "image/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "image/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "image/milkshake.png",
  },
  {
    name: "pizza",
    img: "image/pizza.png",
  },
];

const grid = document.querySelector("#grid");

const results = document.querySelector("#score");

let choosenId = [];
let choosenImgName = [];
let score = [];

createCard();

// to generate random image use this sort method

Image.sort(() => 0.5 - Math.random());

function createCard() {
  for (let i = 0; i < Image.length; i++) {
    const cardImage = document.createElement("img");

    cardImage.setAttribute("src", "image/blank.png");

    cardImage.setAttribute("data-id", i);

    cardImage.addEventListener("click", flipCard);

    grid.appendChild(cardImage);
  }
}

function checkMatch() {
  const imgAll = document.querySelectorAll("img");

  const optionOneId = choosenId[0];

  const optionTwoId = choosenId[1];

  if (optionOneId == optionTwoId) {
    imgAll[optionOneId].setAttribute("src", "image/blank.png");

    imgAll[optionTwoId].setAttribute("src", "image/blank.png");
  } else if (choosenImgName[0] === choosenImgName[1]) {
    imgAll[optionOneId].setAttribute("src", "image/white.png");

    imgAll[optionTwoId].setAttribute("src", "image/white.png");

    imgAll[optionOneId].removeEventListener("click", flipCard);

    imgAll[optionTwoId].removeEventListener("click", flipCard);

    score.push(choosenImgName);
  } else {
    imgAll[optionOneId].setAttribute("src", "image/blank.png");

    imgAll[optionTwoId].setAttribute("src", "image/blank.png");
  }

  choosenId = [];

  choosenImgName = [];

  const result = score.length;
  console.log(score);

  results.innerHTML = result;

  if (score.length === Image.length / 2) {
    results.innerHTML = "You won the match";
  }
}

function flipCard() {
  const id = this.getAttribute("data-id");

  const imgChoosen = Image[id].img;

  choosenImgName.push(Image[id].name);

  choosenId.push(id);

  this.setAttribute("src", imgChoosen);

  if (choosenImgName.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
