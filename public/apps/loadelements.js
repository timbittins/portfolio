const loadElements = () => {
  setContent();
  showMoveButtons();
}

function setContent() {
  const pageContent = document.querySelector(".page__content");
  pageContent.classList.add("page__content--func");

  const contentArticles = [...document.querySelectorAll(".content__article")];
  contentArticles.forEach((article) => {
    article.classList.add("content__article--func");
  });
}

function showMoveButtons() {
  const moveBtns = [...document.querySelectorAll(".button__move")];
  moveBtns.forEach((btn) => {
    btn.style.display = "block";
  });
}

export default loadElements;