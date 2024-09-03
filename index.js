const drake = document.getElementById("drake");
const freeway = document.getElementById("freeway");
const tradeOffer = document.getElementById("tradeoffer");
const imgContainer = document.getElementsByClassName("flexcontainer2");
const topInput = document.getElementById("topinput");
const bottomInput = document.getElementById("bottominput");
const memeLabel = document.getElementsByClassName("memelabel");

function selectImgFunc(event) {
  const id = event.target.id;

  if (id === drake.id) {
    freeway.remove();
    tradeOffer.remove();
  }

  if (id === freeway.id) {
    drake.remove();
    tradeOffer.remove();
  }

  if (id === tradeOffer.id) {
    drake.remove();
    freeway.remove();
  }
}

function validTopInput(event) {
  const topText = event.target.value;
  if (topText.length > 30) {
    topInput.classList.add("invalid");
    topInput.classList.remove("valid");
    memeLabel[0].innerText = `You are over by ${topText.length - 30}`;
  } else if (topText.length > 0 && topText.length <= 30) {
    topInput.classList.add("valid");
    topInput.classList.remove("invalid");
    memeLabel[0].innerText = `Top Text:`;
  } else {
    topInput.classList.remove("valid");
    topInput.classList.add("memeinput");
  }
}

drake.addEventListener("click", selectImgFunc);
freeway.addEventListener("click", selectImgFunc);
tradeOffer.addEventListener("click", selectImgFunc);
topInput.addEventListener("keyup", validTopInput);
