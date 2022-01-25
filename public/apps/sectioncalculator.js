
function clickThroughArticles(button) {
  const moveLeftBtn = document.getElementById("moveLeft");
  const moveRightBtn = document.getElementById("moveRight");
  const breadcrumbs = [...document.querySelectorAll(".crumb")];
  let counter = 0;

  let articleNameByDataValue = button.getAttribute("data-article");
    let pageArticle = document.getElementById(articleNameByDataValue);
    let numberOfSections = pageArticle.childElementCount;
  console.log(numberOfSections);

  let calcArticleWidth = () => {
    let article = document.querySelector(".content__article--func");
    let articleWidth = (article.style.width = `${
      (counter + numberOfSections) * 100
    }%`);
    // console.log(articleWidth);
  };
  calcArticleWidth();


   let deletingBreadcrumbs = document.querySelectorAll(".breadcrumbs");
   deletingBreadcrumbs.forEach((crumb) => {
       crumb.remove();
   })

   let articleSections = [
     ...document.getElementById(articleNameByDataValue).children,
   ];
   const newBreadcrumbs = document.createElement("div");
   newBreadcrumbs.className = "breadcrumbs";
   document.querySelector(".page__content").appendChild(newBreadcrumbs);

   articleSections.forEach((article) => {
     const crumb = document.createElement("div");
     crumb.className = "crumb";
     document.querySelector(".breadcrumbs").appendChild(crumb);
   });

   newBreadcrumbs.firstChild.classList.add("crumb--active");

  let switchBreadcrumbs = () => {
    breadcrumbs.forEach((crumb) => {
      crumb.classList.remove("crumb--active");
    });
    breadcrumbs[counter].classList.add("crumb--active");
  };

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




}


