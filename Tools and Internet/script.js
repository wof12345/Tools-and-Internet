let sum = 0,
  sum1 = 0,
  cnt = 0;

/*******************************CARD1***************************************/

let buttonadd = document.querySelector(".ADD");
let inputvalue1 = document.querySelector("#number1");
buttonadd.addEventListener("click", function () {
  let inputNumber1 = parseInt(inputvalue1.value);
  let Price = document.querySelector(".AmburPrice").innerText;
  let input = inputNumber1;
  inputvalue1.value = input;
  if (inputNumber1 > 0) {
    let cost1 = inputNumber1 * Price;
    // document.querySelector("#number1").value = "";
    displayDetails(inputNumber1, cost1);
  } else {
    alert("Please enter Quantity");
  }
});

/*******************************CARD2***************************************/
let buttonadd2 = document.querySelector(".ADD2");
buttonadd2.addEventListener("click", function () {
  let inputvalue2 = document.querySelector("#number2").value;
  let inputNumber2 = parseInt(inputvalue2);
  let Price2 = document.querySelector(".Butter-Masala").innerText;

  if (inputNumber2 > 0) {
    let cost2 = inputNumber2 * Price2;
    displayDetails(inputNumber2, cost2);
    document.querySelector("#number2").value = " ";
  } else {
    alert("Please enter Quantity");
  }
});

/*******************************CARD3***************************************/

let buttonadd3 = document.querySelector(".ADD3");

buttonadd3.addEventListener("click", function () {
  let inputvalue3 = document.querySelector("#number3").value;
  let inputNumber3 = parseInt(inputvalue3);
  let Price3 = document.querySelector(".Chicken-Biryani").innerText;
  if (inputNumber3 > 0) {
    let cost3 = inputNumber3 * Price3;
    document.querySelector("#number3").value = "";
    displayDetails(inputNumber3, cost3);
  } else {
    alert("Please enter Quantity");
  }
});

/*******************************CARD4***************************************/

let buttonadd4 = document.querySelector(".ADD4");

buttonadd4.addEventListener("click", function () {
  let inputvalue4 = document.querySelector("#number4").value;
  let inputNumber4 = parseInt(inputvalue4);
  let Price4 = document.querySelector(".Chicken-Curry").innerText;
  if (inputNumber4 > 0) {
    let cost4 = inputNumber4 * Price4;
    document.querySelector("#number4").value = "";
    displayDetails(inputNumber4, cost4);
  } else {
    alert("Please enter Quantity");
  }
});

/*******************************CARD5***************************************/

let buttonadd5 = document.querySelector(".ADD5");

buttonadd5.addEventListener("click", function () {
  let inputvalue5 = document.querySelector("#number5").value;
  let inputNumber5 = parseInt(inputvalue5);
  let Price5 = document.querySelector(".Chicken-do-Pyaza").innerText;
  if (inputNumber5 > 0) {
    let cost5 = inputNumber5 * Price5;
    document.querySelector("#number5").value = "";
    displayDetails(inputNumber5, cost5);
  } else {
    alert("Please enter Quantity");
  }
});

/*******************************CARD6***************************************/

let buttonadd6 = document.querySelector(".ADD6");

buttonadd6.addEventListener("click", function () {
  let inputvalue6 = document.querySelector("#number6").value;
  let inputNumber6 = parseInt(inputvalue6);
  let Price6 = document.querySelector(".Chicken-Masala").innerText;
  if (inputNumber6 > 0) {
    let cost6 = inputNumber6 * Price6;
    document.querySelector("#number6").value = "";
    displayDetails(inputNumber6, cost6);
  } else {
    alert("Please enter Quantity");
  }
});

/***************************displayDetails******************************* */

function displayDetails(product, cost) {
  let TotalProduct = document.querySelector(".TotalProduct");
  let Price = document.querySelector(".Price");
  let TotalPrice = document.querySelector(".TotalPrice");
  let Tax = document.querySelector(".Tax");
  let GrandTotal = document.querySelector(".GrandTotal");
  let Finaldetails = document.querySelector(".FinalTotal");

  sum = sum + cost;
  sum1 = sum1 + product;
  TotalProduct.innerText = sum1;
  Price.innerText = `$` + sum;
  TotalPrice.innerText = `$` + (sum + 4);
  Tax.innerText = `$` + (sum + sum * 0.15);
  let sum2 = sum + sum * 0.15;
  let totalSum = sum2 - sum2 * 0.05;
  console.log(sum2);
  GrandTotal.innerText = `$` + totalSum;
  Finaldetails.innerText = `$` + totalSum;

  /*********************************************Order Buttton******************************************* */
  let OrderButton = document.querySelector(".Order");
  OrderButton.addEventListener("click", function () {
    if (totalSum > 0) {
      alert("Complete Your order");
    } else {
      alert("please some Order");
    }
  });
}

let remove1 = document.querySelector(".remove");
let removeValue = document.querySelector("#number1");
remove1.addEventListener("click", function () {
  let inputNumber1 = parseInt(removeValue.value);
  let Price = document.querySelector(".AmburPrice").innerText;
  let input = inputNumber1 - 1;

  if (input >= 0) {
    removeValue.value = input;
    let removePrice = input * Price;
    console.log(removePrice);
  }
});
