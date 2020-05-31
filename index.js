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

  if (currentSlide === 0) {
    const fullname = document.getElementById('fullname').value;
    if (fullname === '' || !genderPicked)
      return;
    else {
      document.getElementById('image-box-gender').src = `./img/${genderPicked}.png`;

      let nameToDisplayDOM = document.getElementById('nameToDisplay');

      if (genderPicked === 'gender-female')
        nameToDisplayDOM.innerHTML = 'Łukasz';
      else
        nameToDisplayDOM.innerHTML = 'Kinga';

      document.getElementById('user-name').innerHTML = fullname;
    }
  }


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
    // console.log("Its last slide");
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
    // console.log("Its first slide");
  }
};

setUpEventListeners = () => {
  document.querySelector(".cta__next").addEventListener("click", function () {
    // console.log("next");
    moveToNextSlide();
  });

  document.querySelector(".cta__back").addEventListener("click", function () {
    // console.log("back");
    moveToPreviousSlide();
  });

  document
    .querySelector(".text-input")
    .addEventListener("keyup", function (event) {
      values.name = event.target.value;
    });

  gender.forEach(el => el.addEventListener("click", () => {
    const fullname = document.getElementById('fullname').value;

    genderPicked = el.id;

    if (fullname !== '') {
      document.getElementById('user-name').innerHTML = fullname
      moveToNextSlide()
    }
  }))
};
