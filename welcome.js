const image = document.getElementById("welcome-meme");
const topText = document.getElementById("welcome-top-text");
const bottomText = document.getElementById("welcome-bottom-text");

const searchStr = document.location.search;
const queries = new URLSearchParams(searchStr);

const imageQuery = queries.get("img");
const topTextQuery = queries.get("top-text");
const bottomTextQuery = queries.get("bottom-text");

image.src = `${imageQuery}.png`;
topText.innerText = topTextQuery;
bottomText.innerText = bottomTextQuery;

if (imageQuery === "drake") {
  topText.classList.add("drake-top");
  bottomText.classList.add("drake-bottom");
  image.id = "drake";
}

if (imageQuery === "freeway") {
  topText.classList.add("freeway-top");
  bottomText.classList.add("freeway-bottom");
  image.id = "freeway";
}

if (imageQuery === "trade-offer") {
  topText.classList.add("trade-offer-top");
  bottomText.classList.add("trade-offer-bottom");
  image.id = "trade-offer";
}
