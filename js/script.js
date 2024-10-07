"use strict";

////////////////////////////////////
// DATA, DOM SELECTORS
////////////////////////////////////

const numImages = 5;
const generateBtn = document.querySelector(".button-generate-meme");
const image = document.querySelector(".image");

const inputTextTop = document.querySelector(".input-field-text-1");
const MemeTextTop = document.querySelector(".meme-text-1");
const inputTextBottom = document.querySelector(".input-field-text-2");
const MemeTextBottom = document.querySelector(".meme-text-2");

////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////

// Generating Random Images
generateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const randomNum = Math.floor(Math.random() * numImages + 1)
    .toString()
    .padStart(2, 0);
  console.log(randomNum);
  image.style.backgroundImage = `url("../img/meme-image-${randomNum}.png")`;
});

// Reading the User Input
inputTextTop.addEventListener("input", function () {
  MemeTextTop.textContent = inputTextTop.value;
});

inputTextBottom.addEventListener("input", function () {
  MemeTextBottom.textContent = inputTextBottom.value;
});
