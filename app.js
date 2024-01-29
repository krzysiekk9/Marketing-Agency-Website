const questions = document.querySelectorAll(
  ".section2 .questions-container .question-wrapper .question"
);
const questionsDiv = document.querySelectorAll(
  ".section2 .questions-container .question-wrapper .question-answer"
);
const questionsText = document.querySelectorAll(
  ".section2 .questions-container .question-wrapper .answer-text"
);
const iconsAll = document.querySelectorAll(
  ".section2 .questions-container .question-wrapper .question .question-icon .icon"
);

const removeVisibility = function () {
  questionsDiv.forEach((e) => {
    e.classList.add("hidden");
  });
  questionsText.forEach((e) => {
    e.classList.add("hidden");
  });
};
const iconType = ["plus", "minus"];

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const answerDiv = e.target
      .closest(".question-wrapper")
      .querySelector(".question-answer");
    const answerText = e.target
      .closest(".question-wrapper")
      .querySelector(".question-answer .answer-text");
    const icon = e.target
      .closest(".question-wrapper")
      .querySelector(".question .question-icon .icon");

    const chanegeIcon = function (iconType) {
      icon.src = `./img/${iconType}.svg`;
    };
    const chanegeAllIcons = function () {
      iconsAll.forEach((icon) => {
        icon.src = `./img/plus.svg`;
      });
    };

    if (
      !answerDiv.classList.contains("hidden") ||
      !answerText.classList.contains("hidden")
    ) {
      answerDiv.classList.add("hidden");
      answerText.classList.add("hidden");
      chanegeIcon(iconType[0]);
    } else {
      chanegeAllIcons();
      chanegeIcon(iconType[1]);
      removeVisibility();
      answerDiv.classList.toggle("hidden");
      answerText.classList.toggle("hidden");
    }
  });
});

/**********************************/

ScrollReveal().reveal(".landing-page--text", {
  distance: "120%",
  duration: 1500,
  origin: "bottom",
  delay: 300,
  reset: true,
});

ScrollReveal().reveal(".section1-text", {
  delay: 300,
  duration: 1500,
});

ScrollReveal().reveal(".toForm-btn", {
  distance: "120%",
  duration: 1500,
  origin: "top",
  delay: 400,
});

// ScrollReveal().reveal(".section2-img-first", {
//   duration: 1000,
//   delay: 200,
// });

// ScrollReveal().reveal(".section2-img-second", {
//   duration: 1000,
//   delay: 500,
// });

ScrollReveal().reveal(".questions-container", {
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".application-text-container", {
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".submit-btn", {
  distance: "120%",
  duration: 1500,
  origin: "top",
  delay: 300,
  reset: true,
});

/***********************************************/
const aboutBtn = document.querySelector(".aboutUs-btn");
const faqBtn = document.querySelector(".faq-btn");
const formBtn = document.querySelector(".form-btn");
const contactBtn = document.querySelector(".contact-btn");
const goToForm = document.querySelector(".toForm-btn");

const getMoreBtn = document.querySelector(".more-btn");
const preSection1 = document.querySelector(".preSection1");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

getMoreBtn.addEventListener("click", function () {
  preSection1.scrollIntoView({ behavior: "smooth" });
});

aboutBtn.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
faqBtn.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});
formBtn.addEventListener("click", function () {
  section3.scrollIntoView({ behavior: "smooth" });
});
contactBtn.addEventListener("click", function () {
  section4.scrollIntoView({ behavior: "smooth" });
});

goToForm.addEventListener("click", function () {
  section3.scrollIntoView({ behavior: "smooth" });
});
