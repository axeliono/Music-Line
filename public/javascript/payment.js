const Payment = require("payment");
//ALL ELEMENTS MUST BE THE RESPECTIVE INPUT ELEMENTS FOR THE FORM

//put the frontend element for card input
let cardNumberInput = "#card-number";
//put the frontend element for CVC
let cardCVCInput = "#card-cvc";
//put frontend element for expiration date
let cardExpirationInput = "#card-expiration";

const expireInputCheck = () => {
  Payment.formatCardExpiry(document.querySelector(cardExpirationInput));
};

const cvcInputCheck = () => {
  Payment.formatCardCVC(document.querySelector(cardCVCInput));
};

const numberInputCheck = () => {
  Payment.formatCardNumber(document.querySelector(cardNumberInput));
};

document
  .querySelector(cardNumberInput)
  .addEventListener("keypress", numberInputCheck);

document
  .querySelector(cardExpirationInput)
  .addEventListener("keypress", expireInputCheck);

document
  .querySelector(cardCVCInput)
  .addEventListener("keypress", cvcInputCheck);
