import breadcrumbs from "./breadcrumbs.js";
breadcrumbs();

const clickThroughArticles = () => {
  const moveLeftBtn = document.getElementById("moveLeft");
  const moveRightBtn = document.getElementById("moveRight");
  const breadcrumbs = [...document.querySelectorAll(".crumb")];
  let counter = 0;

  let pageArticle = document.getElementById("Kompetenzen");
  let numberOfSections = pageArticle.childElementCount - 1;

  let switchBreadcrumbs = () => {
    breadcrumbs.forEach((crumb) => {
      crumb.classList.remove("crumb--active");
    });
    breadcrumbs[counter].classList.add("crumb--active");
  }

  moveLeftBtn.addEventListener("click", () => {
    if (counter > 0) {
      counter -= 1;
      const articles = document.querySelector(".content__article--box");
      articles.style.transform = `translateX(-${counter * 100}%)`;
      moveRightBtn.classList.remove("button__move--disabled");
      switchBreadcrumbs();
    }
    if (counter === 0) {
      moveLeftBtn.classList.add("button__move--disabled");
    }
  });
  moveRightBtn.addEventListener("click", () => {
    if (counter >= 0 && counter < numberOfSections) {
      counter += 1;
      const articles = document.querySelector(".content__article--box");
      articles.style.transform = `translateX(-${counter * 100}%)`;
      moveLeftBtn.classList.remove("button__move--disabled");
      switchBreadcrumbs();
    }
    if (counter === numberOfSections) {
      moveRightBtn.classList.add("button__move--disabled");
      console.log(counter);
    }
  });
};

export default clickThroughArticles;
