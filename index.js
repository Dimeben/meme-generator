const drake = document.getElementById("drake");
const freeway = document.getElementById("freeway");
const tradeOffer = document.getElementById("trade-offer");
const imgContainer = document.getElementsByClassName("images-and-inputs");
const topInput = document.getElementById("top-input");
const bottomInput = document.getElementById("bottom-input");
const memeLabel = document.getElementsByClassName("meme-label");
const memeForm = document.getElementById("meme-form");
const submitButton = document.getElementById("meme-submit");
const topTextError = document.getElementById("top-text-error");
const bottomTextError = document.getElementById("bottom-text-error");
const imageError = document.getElementById("image-error");

let selectedImage = "";
const checkValidText = {
  topText: { valid: "false" },
  bottomText: { valid: "false" },
};

function selectImgFunc(event) {
  const id = event.target.id;

  if (id === drake.id) {
    freeway.remove();
    tradeOffer.remove();
    selectedImage += "drake";
  }

  if (id === freeway.id) {
    drake.remove();
    tradeOffer.remove();
    selectedImage += "freeway";
  }

  if (id === tradeOffer.id) {
    drake.remove();
    freeway.remove();
    selectedImage += "trade-offer";
  }
}

function validTopInput(event) {
  const topText = event.target.value;
  if (topText.length > 50) {
    topInput.classList.add("invalid");
    topInput.classList.remove("valid");
    checkValidText.topText.valid = "false";
    topTextError.innerText = `You have too many characters. Please delete ${
      topText.length - 50
    }.`;
  } else if (topText.length > 0 && topText.length <= 50) {
    topInput.classList.add("valid");
    topInput.classList.remove("invalid");
    checkValidText.topText.valid = "true";
    topTextError.innerText = "";
  } else {
    topInput.classList.remove("valid");
    checkValidText.topText.valid = "false";
  }
}

function validBottomInput(event) {
  const bottomText = event.target.value;
  if (bottomText.length > 50) {
    bottomInput.classList.add("invalid");
    bottomInput.classList.remove("valid");
    checkValidText.bottomText.valid = "false";
    bottomTextError.innerText = `You have too many characters. Please delete ${
      bottomText.length - 50
    }.`;
  } else if (bottomText.length > 0 && bottomText.length <= 50) {
    bottomInput.classList.add("valid");
    bottomInput.classList.remove("invalid");
    checkValidText.bottomText.valid = "true";
    bottomTextError.innerText = "";
  } else {
    bottomInput.classList.remove("valid");
    checkValidText.bottomText.valid = "false";
  }
}

function handleSubmit(event) {
  const inputs = [...document.getElementsByClassName("meme-input")];
  const allValid = inputs.every((input) => {
    input.classList.contains("valid");
  });
  console.log(allValid);

  if (!selectedImage) {
    event.preventDefault();
    imageError.innerText = "You must select an image and complete both fields.";
    return;
  }

  if (
    checkValidText.bottomText.valid === "true" &&
    checkValidText.topText.valid === "true"
  ) {
    const topText = inputs[0].value;
    const bottomText = inputs[1].value;
    const baseUrl = `${memeForm.action}`;
    const targetUrl = `${baseUrl}?img=${selectedImage}&top-text=${topText}&bottom-text=${bottomText}`;
    location.href = targetUrl;
  }
  event.preventDefault();
}

drake.addEventListener("click", selectImgFunc);
freeway.addEventListener("click", selectImgFunc);
tradeOffer.addEventListener("click", selectImgFunc);
topInput.addEventListener("keyup", validTopInput);
bottomInput.addEventListener("keyup", validBottomInput);
memeForm.addEventListener("submit", handleSubmit);
