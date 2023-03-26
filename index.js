function slide(direction) {
  const topRow = $("#topRow");
  const topRowImages = $("#topRow img");
  const bottomRow = $("#bottomRow");
  const bottomRowImages = $("#bottomRow img");
  const topLength = $("#topRow img").length;
  const bottomLength = $("#bottomRow img").length - 2;
  const buttonCont = $("#buttonContainer");

  for (let i = 0; i < topLength; i++) {
    if (direction == "next") {
      topRow.append(topRowImages[(topLength - 1 + i) % topLength]);
    } else {
      topRow.append(topRowImages[(i + 1) % topLength]);
      topRowImages.first().hide().fadeIn();
    }
  }

  for (let i = 0; i < bottomLength; i++) {
    if (direction == "next") {
      bottomRow.append(bottomRowImages[(bottomLength - 1 + i) % bottomLength]);
    } else {
      bottomRow.append(bottomRowImages[(i + 1) % bottomLength]);
      bottomRowImages.first().hide().fadeIn();
    }
  }
  bottomRow.append(buttonCont);
}

// $("#nextArrow").on("click", () => {
//   const topRow = $("#topRow");
//   const topRowImages = $("#topRow img");
//   const bottomRow = $("#bottomRow");
//   const bottomRowImages = $("#bottomRow img");
//   const topLength = $("#topRow img").length;
//   const bottomLength = $("#bottomRow img").length - 2;
//   const buttonCont = $("#buttonContainer");
//   for (let i = 0; i < topLength; i++) {
//     topRow.append(topRowImages[(topLength - 1 + i) % topLength]);
//   }

//   for (let i = 0; i < bottomLength; i++) {
//     bottomRow.append(bottomRowImages[(bottomLength - 1 + i) % bottomLength]);
//   }
//   bottomRow.append(buttonCont);
// });

//   $("#prevArrow").on("click", () => {
//     const topRow = $("#topRow");
//     const topRowImages = $("#topRow img");
//     const bottomRow = $("#bottomRow");
//     const bottomRowImages = $("#bottomRow img");
//     const topLength = $("#topRow img").length;
//     const bottomLength = $("#bottomRow img").length - 2;
//     const buttonCont = $("#buttonContainer");
//     for (let i = 0; i < topLength; i++) {
//       topRow.append(topRowImages[(i + 1) % topLength]);
//     }

//     for (let i = 0; i < bottomLength; i++) {
//       bottomRow.append(bottomRowImages[(i + 1) % bottomLength]);
//     }
//     bottomRow.append(buttonCont);
//   });
// });

// $(document).ready(function () {
//   $("#nextArrow").on("click", () => {
//     const topRow = document.getElementById("topRow");
//     const topRowImages = topRow.querySelectorAll("img");
//     const bottomRow = document.getElementById("bottomRow");
//     const bottomRowImages = bottomRow.querySelectorAll("img");
//     const topLength = topRowImages.length;
//     const bottomLength = bottomRowImages.length - 2;
//     const buttonCont = document.getElementById("buttonContainer");

//     for (let i = 0; i < topLength; i++) {
//       if (i == topLength - 1) {
//         topRowImages[i - 1].classList.add("active");
//       } else if (i < topLength - 1) {
//         topRowImages[i + 1].classList.remove("active");
//       }

//       topRow.append(topRowImages[(topLength - 1 + i) % topLength]);
//     }

//     for (let i = 0; i < bottomLength; i++) {
//       if (i == bottomLength - 1) {
//         bottomRowImages[i - 1].classList.add("active");
//       } else if (i < bottomLength - 1) {
//         bottomRowImages[i + 1].classList.remove("active");
//       }
//       bottomRow.appendChild(
//         bottomRowImages[(bottomLength - 1 + i) % bottomLength]
//       );
//     }
//     bottomRow.appendChild(buttonCont);
//   });

//   $("#prevArrow").on("click", () => {
//     const topRow = document.getElementById("topRow");
//     const topRowImages = topRow.querySelectorAll("img");
//     const bottomRow = document.getElementById("bottomRow");
//     const bottomRowImages = bottomRow.querySelectorAll("img");
//     const topLength = topRowImages.length;
//     const bottomLength = bottomRowImages.length - 2;
//     const buttonCont = document.getElementById("buttonContainer");

//     for (let i = 0; i < topLength; i++) {
//       if (i == 0) {
//         topRowImages[i].classList.add("active");
//       } else if (i > 0 && i < topLength - 1) {
//         topRowImages[i + 1].classList.remove("active");
//       }

//       topRow.appendChild(topRowImages[(i + 1) % topLength]);
//     }

//     for (let i = 0; i < bottomLength; i++) {
//       if (i == 0) {
//         bottomRowImages[i].classList.add("active");
//       } else if (i > 0 && i < bottomLength - 1) {
//         bottomRowImages[i + 1].classList.remove("active");
//       }
//       bottomRow.appendChild(bottomRowImages[(i + 1) % bottomLength]);
//     }
//     bottomRow.appendChild(buttonCont);
//   });
// });
