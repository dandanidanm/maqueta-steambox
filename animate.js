const $li = document.querySelectorAll(".faq__li");
const $bloqueNav = document.querySelector(".faq__navbar");
const $article = document.querySelectorAll(".article");
const $button = document.querySelector(".faq__nav-img");

$li.forEach((li, i) => {
  $li[i].addEventListener("click", () => {
    $li.forEach((li, i) => {
      $li[i].classList.remove("active");
    });

    $li[i].classList.add("active");
    $bloqueNav.classList.add("none");
    $article[i].classList.add("none-12");
    $button.classList.add("none-0");
  });
});

$button.addEventListener("click", () => {
  $article.forEach((element, i) => {
    $article[i].classList.remove("none-12");
  });
  $bloqueNav.classList.remove("none");
  $button.classList.remove("none-0");
});
