onInit = () => {
  const current = getCurrentSlide();
  current.classList.add("active");

  setUpEventListeners();
};

getCurrentSlide = () =>
  document.getElementsByClassName("form-view")[currentSlide];
getCurrentDot = () =>
  document.getElementsByClassName("step-line__dot")[currentSlide];

moveToNextSlide = () => {
  //need to be changed to slides.length later

  if (currentSlide <= 5) {
    current = getCurrentSlide();
    currentDot = getCurrentDot();

    current.classList.remove("active");
    currentDot.classList.add("step-line__dot--done");

    currentSlide++;

    next = getCurrentSlide();
    nextDot = getCurrentDot();

    next.classList.add("active");
    nextDot.classList.add("step-line__dot--active");
  } else {
    console.log("Its last slide");
  }
};

moveToPreviousSlide = () => {
  if (currentSlide > 0) {
    current = getCurrentSlide();
    currentDot = getCurrentDot();

    current.classList.remove("active");
    currentDot.classList.remove("step-line__dot--active");

    currentSlide--;

    previous = getCurrentSlide();
    previousDot = getCurrentDot();

    previous.classList.add("active");
    previousDot.classList.remove("step-line__dot--done");
    previousDot.classList.add("step-line__dot--active");
  } else {
    console.log("Its first slide");
  }
};

setUpEventListeners = () => {
  document.querySelector(".cta__next").addEventListener("click", function () {
    console.log("next");
    moveToNextSlide();
  });

  document.querySelector(".cta__back").addEventListener("click", function () {
    console.log("back");
    moveToPreviousSlide();
  });

  document
    .querySelector(".text-input")
    .addEventListener("keyup", function (event) {
      values.name = event.target.value;
    });
};
