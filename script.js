const featureTypes = {
  Race: "featureOptions/race.txt",
  Class: "featureOptions/class.txt",
  Background: "featureOptions/background.txt",
  Flaws: "featureOptions/flaws.txt",
  Personality: "featureOptions/personality.txt"
};

let quotes = [];

let characterFeatures = {};

function generateCharacter() {
  const characterContainer = document.getElementById("characterContainer");
  characterContainer.innerHTML = "";

  characterFeatures = {}; // Clear existing character features

  for (const featureType in featureTypes) {
    const featureFile = featureTypes[featureType];
    fetchFeatureOptions(featureFile)
      .then(options => {
        const randomOption = getRandomOption(options);
        characterFeatures[featureType] = randomOption;
        const featureBox = createFeatureBox(featureType, randomOption);
        characterContainer.appendChild(featureBox);
      })
      .catch(error => {
        console.error(`Failed to fetch ${featureType} options. Error: ${error}`);
      });
  }
}

function fetchFeatureOptions(featureFile) {
  return fetch(featureFile)
    .then(response => response.text())
    .then(text => text.trim().split("\n"))
    .catch(error => {
      console.error(`Failed to fetch ${featureFile}. Error: ${error}`);
      return [];
    });
}

function getRandomOption(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function createFeatureBox(featureType, randomOption) {
    const featureBox = document.createElement("div");
    featureBox.classList.add("featureBox");
    featureBox.setAttribute("data-feature", featureType);
  
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
  
    const redoIcon = document.createElement("img");
    redoIcon.src = "d20light.svg";
    redoIcon.classList.add("redoIcon");
    redoIcon.addEventListener("click", (event) => {
      regenerateFeature(event.target.closest(".featureBox").getAttribute("data-feature"));
    });
    titleContainer.appendChild(redoIcon);

    const titleElement = document.createElement("p");
    titleElement.textContent = featureType;
    titleElement.classList.add("featureTitle");
    titleContainer.appendChild(titleElement);
  
    featureBox.appendChild(titleContainer);
  
    const valueElement = document.createElement("p");
    valueElement.textContent = randomOption;
    valueElement.classList.add("featureValue");
    featureBox.appendChild(valueElement);
  
    return featureBox;
  }
  

function regenerateFeature(featureType) {
  const characterContainer = document.getElementById("characterContainer");
  const featureBox = characterContainer.querySelector(`[data-feature="${featureType}"]`);
  if (!featureBox) return;

  const featureFile = featureTypes[featureType];
  fetchFeatureOptions(featureFile)
    .then(options => {
      const randomOption = getRandomOption(options);
      characterFeatures[featureType] = randomOption;
      const valueElement = featureBox.querySelector(".featureValue");
      valueElement.textContent = randomOption;
    })
    .catch(error => {
      console.error(`Failed to fetch ${featureType} options. Error: ${error}`);
    });
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

async function fetchRandomQuote() {
  try {
    const response = await fetch("quotes.txt");
    const quotesText = await response.text();
    quotes = quotesText.trim().split("\n");
    const randomQuote = getRandomQuote();
    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.textContent = randomQuote;
  } catch (error) {
    console.error("Failed to fetch random quote. Error:", error);
  }
}

window.addEventListener("DOMContentLoaded", fetchRandomQuote);

const headerElement = document.getElementById("appLogo");
  headerElement.addEventListener("click", () => {
    location.reload();
  });
  