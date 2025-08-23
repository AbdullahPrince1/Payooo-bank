const loginBtn = document.querySelector("#loginBtn");
const pinNumber = document.querySelector("#pinNumber");
const phoneNumber = document.querySelector("#phoneNumber");
const warning = document.querySelector("span");
loginBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const number = 123456789;
  const pin = 1234;

  if (
    number === parseInt(phoneNumber.value) &&
    pin === parseInt(pinNumber.value)
  ) {
    window.location.href = "./homePage.html"
  } else {
    warning.textContent = "Invalid Phone number or Pin";
    warning.style.textAlign = "center";
  }
});
