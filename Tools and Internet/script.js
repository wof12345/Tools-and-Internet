let slideIndex = 1;
myslides(slideIndex);

let cnt1 = 0;

function plusSlides2(n) {
  cnt1++;
  console.log(n); ///  1
  console.log(slideIndex); ///   1 4
  myslides((slideIndex += n * 3)); ///    2  3  4
  console.log(slideIndex); ///     2  3  4  5
}

function plusSlides1(n) {
  console.log(n);

  myslides((slideIndex += n * 3));
  console.log(slideIndex);
}

function myslides(n) {
  let slide = document.getElementsByClassName("grid8");
  let len = slide.length;

  if (n > len) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;

    console.log(slideIndex);
  }
  for (let i = 0; i < len; i++) {
    slide[i].style.display = "none";
  }

  if (slideIndex % 3 == 0) {
    slide[slideIndex - 1].style.display = "block"; /// 3
    slide[slideIndex - 2].style.display = "block"; ///  4
    slide[slideIndex - 3].style.display = "block"; /// 5
  }
  if (slideIndex % 3 != 0) {
    slide[slideIndex - 1].style.display = "block"; /// 3
    slide[slideIndex].style.display = "block"; ///  4
    slide[slideIndex + 1].style.display = "block"; /// 5
  }
}

let slideIndex1 = 1;
myslides1(slideIndex1);

function plusSlides(n) {
  cnt1++;
  console.log(n); ///  1
  console.log(slideIndex1); ///  1
  myslides1((slideIndex1 += n * 3)); ///    2  3  4
  console.log(slideIndex); ///     2  3  4
}

function plusSlides4(n) {
  console.log(n);

  myslides1((slideIndex1 += n * 3));
  console.log(slideIndex1);
}
function myslides1(n) {
  let slide = document.getElementsByClassName("grid9");
  let len = slide.length;

  if (n > len) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slide.length;
  }
  for (let i = 0; i < len; i++) {
    slide[i].style.display = "none";
  }
  if (slideIndex1 % 3 == 0) {
    slide[slideIndex1 - 1].style.display = "block"; /// 3
    slide[slideIndex1 - 2].style.display = "block"; ///  4
    slide[slideIndex1 - 3].style.display = "block"; /// 5
  }
  if (slideIndex1 % 3 != 0) {
    slide[slideIndex1 - 1].style.display = "block"; /// 3
    slide[slideIndex1].style.display = "block"; ///  4
    slide[slideIndex1 + 1].style.display = "block"; /// 5
  }
}

let sum = 0,
  total,
  input = 0,
  input1 = 0;
let updateArray = new Array(),
  f = 0;
let button = document.querySelector("#order1");
let button1 = document.querySelector("#order2");
let button2 = document.querySelector("#order3");
let button3 = document.querySelector("#order4");
let button4 = document.querySelector("#order5");
let button5 = document.querySelector("#order6");
let product = document.querySelector(".product2");
let product1 = document.querySelector(".product3");
let price = document.querySelector(".price3");
let price1 = document.querySelector(".price2");
let number = document.querySelector("#case-Count");
let number1 = document.querySelector("#case-Count1");
let number2 = document.querySelector("#case-Count3");
let number3 = document.querySelector("#case-Count4");
let number4 = document.querySelector("#case-Count5");
let number5 = document.querySelector("#case-Count6");
let total1 = document.querySelector(".total");

console.log(parseInt(innerText));

/****************************************************total balance******************************/
let cnt = 0,
  cnt2 = 0;

function balance(n) {
  updateArray[f] = n;
  cnt++;
  product1.innerText = cnt;

  for (let i = 0; i < updateArray.length; i++) {
    sum += updateArray[i];
    console.log(sum);
    price.innerHTML = `$` + (sum + 2);
    total1.innerHTML = `$` + (sum + 2);
  }
  ///updateArray.pop();
}

/*if(g==1){
      updateArray[f] = n ;
      for(let h = 0 ; h < updateArray.length;h++){
          total = parseInt(total-updateArray[h]);
          console.log(totalBalance);
          balanceUpdate.innerHTML=total;
         }
         updateArray.pop();

  }
}*/

/*******************************************************MENU**************************************** */
button.addEventListener("click", function () {
  let num = parseInt(number.value);
  let out = num + 1;
  number.value = out;

  let output1 = input + 1;
  product1.innerText = number.value;
  price1.innerText = `$` + 10.5;
  let output = output1 * 10.5;
  console.log(output);

  balance(output);

  ///price.innerHTML=`$`+ output;
});

/*******************************************************MENU1**************************************** */
button1.addEventListener("click", function () {
  let num1 = parseInt(number1.value);
  let out1 = num1 + 1;
  number1.value = out1;

  let output1 = input + 1;
  product1.innerText = number1.value;
  price1.innerText = `$` + 14.5;
  let output = output1 * 14.5;

  balance(output);

  ///price.innerText=`$`+output;
});

/*******************************************************MENU2**************************************** */

button2.addEventListener("click", function () {
  let num = parseInt(number2.value);
  let out = num + 1;
  number2.value = out;

  let output1 = input + 1;
  product1.innerText = number2.value;
  price1.innerText = `$` + 18.5;
  let output = output1 * 18.5;

  balance(output);
});

/*******************************************************MENU3**************************************** */

button3.addEventListener("click", function () {
  let num = parseInt(number3.value);
  let out = num + 1;
  number3.value = out;

  let output1 = input + 1;
  product1.innerText = number3.value;

  price1.innerText = `$` + 28.5;
  let output = output1 * 28.5;
  balance(output);
});

/*******************************************************MENU4**************************************** */

button4.addEventListener("click", function () {
  let num = parseInt(number4.value);
  let out = num + 1;
  number4.value = out;

  let output1 = input + 1;
  product1.innerText = number4.value;
  price1.innerText = `$` + 12.5;
  let output = output1 * 12.5;
  balance(output);
});
/*******************************************************MENU5**************************************** */

button5.addEventListener("click", function () {
  let num = parseInt(number5.value);
  let out = num + 1;
  number5.value = out;
  let output1 = input + 1;
  product1.innerText = cnt;
  price1.innerText = `$` + 10.5;
  let output = output1 * 10.5;

  balance(output);
});

//footer

let fixedFooterContainer = document.querySelector(`.footer_fixed`);
let fixedFooterHeadline;
let totalCharCount = 0;

let headlinePrefab = function (headline) {
  return `<div class="footer_fixed-headline w-mc h-100 position-absolute p-2 moving_animation-inandout">
${headline}
</div>`;
};

function extractAndUpdateHeadLines(data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    archivedData.headlines.push(data[0].headline);
  }

  injectHeadline(processHeadline());
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
  fixedFooterHeadline.style = `animation-duration: ${totalCharCount / 2}s`;
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
extractAndUpdateHeadLines("data here");
