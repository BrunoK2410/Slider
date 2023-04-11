function slide(direction) {
  const bottomRowImagesContainer = $("#bottomRowImages");
  const bottomRowImages = $("#bottomRowImages img");
  const topRow = $("#topRow");
  const topRowImages = $("#topRow img");
  if (direction == "next") {
    topRowImages.last().animate(
      {
        width: "0",
      },
      250,
      () => {
        topRow.prepend(topRowImages.last());
        topRowImages.last().width("");
      }
    );
    bottomRowImages.last().animate(
      {
        width: "0",
      },
      250,
      () => {
        bottomRowImagesContainer.prepend(bottomRowImages.last());
        bottomRowImages.last().width("");
      }
    );
  } else {
    topRowImages.first().animate(
      {
        width: "0",
      },
      250,
      () => {
        topRowImages.first().width("");
        topRow.append(topRowImages.first().hide().fadeIn(1000));
      }
    );
    bottomRowImages.first().animate(
      {
        width: "0",
      },
      250,
      () => {
        bottomRowImages.first().width("");
        bottomRowImagesContainer.append(
          bottomRowImages.first().hide().fadeIn(1000)
        );
      }
    );
  }
}
