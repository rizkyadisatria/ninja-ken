const slider = document.querySelectorAll(".content");
const slideRight = document.querySelector(".slide-right");
const slideLeft = document.querySelector(".slide-left");
const slideBtn = document.querySelector(".slide-btn");

let curSlide = 0;
let maxSlide = slider.length;

const slideMove = (currentSlide) => {
  slider.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slideMove(curSlide);
  activeDot(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slideMove(curSlide);
  activeDot(curSlide);
};

slideRight.addEventListener("click", nextSlide);

slideLeft.addEventListener("click", prevSlide);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

slider.forEach((_, i) => {
  slideBtn.insertAdjacentHTML(
    "beforeend",
    `<button class="btn" data-slide="${i}"></button>`
  );
});

const dotBtn = document.querySelectorAll(".btn");

const removeCurrentDot = () => {
  dotBtn.forEach((dot) => (dot.style.backgroundColor = ``));
};

dotBtn.forEach((btn, i) => {
  if (i === 0) btn.style.backgroundColor = `rgb(196, 236, 122)`;
});

slideBtn.addEventListener("click", (e) => {
  const click = e.target.closest(".btn");
  if (!click) return;

  removeCurrentDot();
  click.style.backgroundColor = `rgb(196, 236, 122)`;

  if (e.target.classList.contains("btn")) {
    const { slide } = e.target.dataset;
    slideMove(slide);
  }
});

const activeDot = (slide) => {
  removeCurrentDot();

  const active = document.querySelector(`.btn[data-slide="${slide}"]`);
  active.style.backgroundColor = `rgb(196, 236, 122)`;
};

slider.forEach((content) => {
  content.addEventListener("click", () => {
    content.classList.toggle("pop-up");
  });
});

const section = document.querySelectorAll(".section");

// faq.addEventListener("click", (e) => {
//   const question = e.target.closest(".question");
//   if (!question) return;
//   question.classList.toggle("show");
//   title.forEach((t) => {
//     if (t.classList.contains(show)) {
//     }
//   });
// });

section.forEach((section) => {
  const que = section.querySelector(".question");
  const ans = section.querySelector(".answer");
  const plus = section.querySelector(".plus");
  const title = section.querySelector(".faq-title");

  title.addEventListener("click", () => {
    que.classList.toggle("show");
    if (que.classList.contains("show")) {
      ans.style.display = "block";
      plus.innerText = "-";
    } else {
      ans.style.display = "none";
      plus.innerText = "+";
    }
  });
});
