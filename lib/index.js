function slide(direction) {
  const bottomRow = $("#bottomRow");
  const bottomRowImages = $("#bottomRow img");
  const topRow = $("#topRow");
  const topRowImages = $("#topRow img");
  if (direction == "next") {
    topRow.removeClass("flexStart");
    bottomRow.removeClass("flexStart");
    topRow.addClass("flexEnd");
    bottomRow.addClass("flexEnd");
    topRowImages.last().animate({
      width: "0"
    }, 250, () => {
      topRow.prepend(topRowImages.last());
      topRowImages.last().width("fit-content");
    });
    bottomRowImages.last().animate({
      width: "0"
    }, 250, () => {
      bottomRow.prepend(bottomRowImages.last());
      bottomRowImages.last().width("fit-content");
    });
  } else {
    topRow.removeClass("flexEnd");
    bottomRow.removeClass("flexEnd");
    topRow.addClass("flexStart");
    bottomRow.addClass("flexStart");
    topRowImages.first().animate({
      width: "0"
    }, 250, () => {
      topRowImages.first().width("fit-content");
      topRow.append(topRowImages.first().hide().fadeIn(1000));
    });
    bottomRowImages.first().animate({
      width: "0"
    }, 250, () => {
      bottomRowImages.first().width("fit-content");
      bottomRow.append(bottomRowImages.first().hide().fadeIn(1000));
    });
  }
}