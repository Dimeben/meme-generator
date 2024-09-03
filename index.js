const drake = document.getElementById("drake");
const freeway = document.getElementById("freeway");
const tradeOffer = document.getElementById("tradeoffer");
const imgContainer = document.getElementsByClassName("flexcontainer2");
const topInput = document.getElementById("topinput");
const bottomInput = document.getElementById("bottominput");
const memeLabel = document.getElementsByClassName("memelabel");
const memeForm = document.getElementById("memeform");
const submitButton = document.getElementById("memesubmit");

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

function validBottomInput(event) {
  const bottomText = event.target.value;
  if (bottomText.length > 30) {
    bottomInput.classList.add("invalid");
    bottomInput.classList.remove("valid");
    memeLabel[1].innerText = `You are over by ${bottomText.length - 30}`;
  } else if (bottomText.length > 0 && bottomText.length <= 30) {
    bottomInput.classList.add("valid");
    bottomInput.classList.remove("invalid");
    memeLabel[1].innerText = `Bottom Text:`;
  } else {
    bottomInput.classList.remove("valid");
    bottomInput.classList.add("memeinput");
  }
}

function handleSubmit(event) {
  const inputs = [...document.getElementsByClassName("memeinput")];
  const allValid = inputs.every((input) => {
    input.classList.contains("valid");
  });
  if (!allValid) {
    event.preventDefault();
  }
  const topText = inputs[0].value;
  const bottomText = inputs[1].value;
}

drake.addEventListener("click", selectImgFunc);
freeway.addEventListener("click", selectImgFunc);
tradeOffer.addEventListener("click", selectImgFunc);
topInput.addEventListener("keyup", validTopInput);
bottomInput.addEventListener("keyup", validBottomInput);
memeForm.addEventListener("submit", handleSubmit);
