const addMoneyBtn = document.querySelector("#addMoneyBtn");
const totalAccBalance = document.querySelector("#totalAccBalance");
const addedAmmount = document.querySelector("#addedAmmount");
const accNumber = document.querySelector("#accNumber");
const accPinNumber = document.querySelector("#accPinNumber");
const customerDetails = [
  {
    customerAccNumber: 123456789,
    customerPin: 1234,
  },
];
addMoneyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (const element of customerDetails) {
    if (
      element.customerAccNumber === Number(accNumber.value) &&
      element.customerPin === Number(accPinNumber.value)
    ) {
      const total =
        Number(addedAmmount.value) + Number(totalAccBalance.textContent);
      totalAccBalance.textContent = total;
      return;
    } else {
      alert("Invalid pin or account number");
    }
  }
});
