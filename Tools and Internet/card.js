let price = 0,
  productCount = 0,
  totalPrice = 0;

let TotalProduct = document.querySelector(".TotalProduct");
let Price = document.querySelector(".Price");
let TotalPrice = document.querySelector(".TotalPrice");
let Tax = document.querySelector(".Tax");
let GrandTotal = document.querySelector(".GrandTotal");
let Finaldetails = document.querySelector(".FinalTotal");

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
  let totalPrice = document.querySelector(".Butter-Masala").innerText;

  if (inputNumber2 > 0) {
    let cost2 = inputNumber2 * totalPrice;
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
  console.log(product, productCount);

  if (product < 0 && Math.abs(product) > productCount) {
    product = productCount - Math.abs(product);
  } else {
    price = price + cost;
    productCount += product;
    TotalProduct.innerText = productCount;
    Price.innerText = `$` + price;

    TotalPrice.innerText = `$` + (price + 4);
    Tax.innerText = `$` + (price * 0.15).toFixed(2);
    totalPrice = (price + price * 0.15 + 4).toFixed(2);

    GrandTotal.innerText = `$` + totalPrice;
    Finaldetails.innerText = `$` + totalPrice;
  }
}
/*********************************************Order Buttton******************************************* */
let OrderButton = document.querySelector(".Order");
OrderButton.addEventListener("click", function () {
  if (price > 0) {
    alert("Complete Your order");
  } else {
    alert("please some Order");
  }
});

let remove1 = document.querySelector(".remove");
let removeValue = document.querySelector("#number1");
remove1.addEventListener("click", function () {
  let inputNumber1 = parseInt(removeValue.value);
  let Price = document.querySelector(".AmburPrice").innerText;
  let input = inputNumber1;

  if (input >= 0) {
    removeValue.value = input;
    let removePrice = input * Price;

    displayDetails(-input, -removePrice);
  }
});

let fixedFooterContainer = document.querySelector(`.footer_fixed`);
let fixedFooterHeadline;
let totalCharCount = 0;

let archivedData = { headlines: ["data here", "news"] };

let headlinePrefab = function (headline) {
  return `<div class="footer_fixed-headline w-100 h-100 position-absolute p-2 moving_animation-inandout text-black">
${headline}
</div>`;
};

function isInViewport(element) {
  if (element) {
    const rect = element.getBoundingClientRect();

    return (
      rect.left <= window.innerWidth || document.documentElement.clientWidth
    );
  }
}

function processHeadline() {
  let finalHeadline = "";

  for (let i = 0; i < archivedData.headlines.length; i++) {
    for (let j = 0; j < archivedData.headlines[i].length; j++) {
      finalHeadline += `<span class="text_effect-scaleup">${archivedData.headlines[i][j]}</span>`;
      totalCharCount++;
    }
    finalHeadline += "  ***  ";
  }
  console.log(totalCharCount);

  return finalHeadline;
}

function injectHeadline(headline) {
  fixedFooterContainer.innerHTML = headlinePrefab(headline);
  fixedFooterHeadline = document.querySelector(`.footer_fixed-headline`);
  fixedFooterHeadline.style = `animation-duration: ${20}s`;
}

setInterval(() => {
  if (1 < isInViewport(fixedFooterHeadline)) {
    fixedFooterHeadline.classList.remove("moving_animation-inandout");

    setTimeout(() => {
      fixedFooterHeadline.classList.add("moving_animation-inandout");
    }, 200);
  }
}, 2000);

fixedFooterContainer.addEventListener("click", (e) => {
  console.log(isInViewport(fixedFooterHeadline));
});

document.addEventListener("click", (e) => {
  console.log(e.target);
});

// fixedFooterContainer.addEventListener("mouseover", (e) => {
//   fixedFooterHeadline.classList.add("headline-zoom");
// });

// fixedFooterContainer.addEventListener("mouseout", (e) => {
//   fixedFooterHeadline.classList.remove("headline-zoom");
// });
injectHeadline(processHeadline());
