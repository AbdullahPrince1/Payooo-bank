const addMoneyBtn = document.querySelector("#addMoneyBtn");
const customerDetails = [
  {
    customerAccNumber: 123456789,
    customerPin: 1234,
  },
];
// function to get input value
function getValue(id) {
  return Number(document.getElementById(id).value);
}
// function to get inner text
function getInnervalue(id) {
  return Number(document.getElementById(id).textContent);
}
// function to set inner text
function setInnerValue(value) {
  const balanceAmmount = (document.getElementById(
    "totalAccBalance"
  ).textContent = value);
  return balanceAmmount;
}
addMoneyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (const element of customerDetails) {
    if (
      element.customerAccNumber === getValue("accNumber") &&
      element.customerPin === getValue("accPinNumber")
    ) {
      const total = getValue("addedAmmount") + getInnervalue("totalAccBalance");
      setInnerValue(total);
    } else {
      alert("Invalid pin or account number");
    }
  }
});
//toggle system
function toggleMenu(id) {
  const form = document.getElementsByClassName("toggleParent");
  for (const forms of form) {
    forms.style.display = "none";
    document.getElementById(id).style.display = "block";
  }
}
document
  .getElementById("addMoneyElement")
  .addEventListener("click", function () {
    toggleMenu("addMoneyParent");
  });
document
  .getElementById("cashOutElement")
  .addEventListener("click", function () {
    toggleMenu("cashOutParent");
  });
document
  .getElementById("transferMoneyElement")
  .addEventListener("click", function () {
    toggleMenu("transferMoneyParent");
  });

function addColor(id) {
  const items = document.getElementsByClassName("allBtnColor");
  for (const item of items) {
    item.style.backgroundColor = "rgba(255, 255, 255, 1)";
    item.style.border = "1px solid rgba(8, 8, 8, 0.1)";
  }
  document.getElementById(id).style.border = "1px solid #0874F2";

  document.getElementById(id).style.backgroundColor = "rgba(8, 116, 242, 0.05)";
}

document
  .getElementById("addMoneyElement")
  .addEventListener("click", function () {
    addColor("addMoneyElement");
  });
document
  .getElementById("cashOutElement")
  .addEventListener("click", function () {
    addColor("cashOutElement");
  });
document
  .getElementById("transferMoneyElement")
  .addEventListener("click", function () {
    addColor("transferMoneyElement");
  });
