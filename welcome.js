const image = document.getElementById("welcome-meme");
const topText = document.getElementById("welcome-top-text");
const bottomText = document.getElementById("welcome-bottom-text");

const searchStr = document.location.search;
const queries = new URLSearchParams(searchStr);

const imageQuery = queries.get("img");
const topTextQuery = queries.get("toptext");
const bottomTextQuery = queries.get("bottomtext");

image.src = imageQuery;
topText.innerText = topTextQuery;
bottomText.innerText = bottomTextQuery;

if (imageQuery === "drake.png") {
  topText.classList.add("drakeTop");
  bottomText.classList.add("drakeBottom");
}

if (imageQuery === "freeway.png") {
  topText.classList.add("freewayTop");
  bottomText.classList.add("freewayBottom");
}

if (imageQuery === "tradeoffer.png") {
  topText.classList.add("tradeofferTop");
  bottomText.classList.add("tradeofferBottom");
}
