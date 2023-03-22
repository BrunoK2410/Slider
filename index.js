const prevButton = document.getElementById("prevArrow");
const nextButton = document.getElementById("nextArrow");
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");

$(document).ready(function () {
  $("#nextArrow").on("click", function () {
    const topRow = document.getElementById("topRow");
    const topRowImages = topRow.querySelectorAll("img");
    const bottomRow = document.getElementById("bottomRow");
    const bottomRowImages = bottomRow.querySelectorAll("img");
    const topLength = topRowImages.length;
    const bottomLength = bottomRowImages.length - 2;
    const buttonCont = document.getElementById("buttonContainer");

    nextButton.style.border = "1px solid #134880";
    nextButton.style.borderRadius = "5px";
    nextImg.src = "imgs/arrow-blue-right.png";
    prevButton.style.border = "1px solid #DDDDDD";
    prevImg.src = "imgs/arrow-gray-left.png";

    for (let i = 0; i < topLength; i++) {
      if (i == 5) {
        topRowImages[i - 1].classList.add("active");
      } else if (i < 5) {
        topRowImages[i + 1].classList.remove("active");
      }

      topRow.appendChild(topRowImages[(topLength - 1 + i) % topLength]);
    }

    for (let i = 0; i < bottomLength; i++) {
      if (i == 4) {
        bottomRowImages[i - 1].classList.add("active");
      } else if (i < 4) {
        bottomRowImages[i + 1].classList.remove("active");
      }
      bottomRow.appendChild(
        bottomRowImages[(bottomLength - 1 + i) % bottomLength]
      );
    }
    bottomRow.appendChild(buttonCont);
  });

  $("#prevArrow").on("click", function () {
    const topRow = document.getElementById("topRow");
    const topRowImages = topRow.querySelectorAll("img");
    const bottomRow = document.getElementById("bottomRow");
    const bottomRowImages = bottomRow.querySelectorAll("img");
    const topLength = topRowImages.length;
    const bottomLength = bottomRowImages.length - 2;
    const buttonCont = document.getElementById("buttonContainer");

    prevButton.style.border = "1px solid #134880";
    prevButton.style.borderRadius = "5px";
    prevImg.src = "imgs/arrow-blue-left.png";
    nextButton.style.border = "1px solid #DDDDDD";
    nextImg.src = "imgs/arrow-gray-right.png";

    for (let i = 0; i < topLength; i++) {
      if (i == 0) {
        topRowImages[i].classList.add("active");
      } else if (i > 0 && i < 5) {
        topRowImages[i + 1].classList.remove("active");
      }

      topRow.appendChild(topRowImages[(i + 1) % topLength]);
    }

    for (let i = 0; i < bottomLength; i++) {
      if (i == 0) {
        bottomRowImages[i].classList.add("active");
      } else if (i > 0 && i < 4) {
        bottomRowImages[i + 1].classList.remove("active");
      }
      bottomRow.appendChild(bottomRowImages[(i + 1) % bottomLength]);
    }
    bottomRow.appendChild(buttonCont);
  });
});
