// import breadcrumbs from "./breadcrumbs.js";
// // breadcrumbs();

// const clickThroughArticles = () => {
//   const moveLeftBtn = document.getElementById("moveLeft");
//   const moveRightBtn = document.getElementById("moveRight");
//   // const breadcrumbs = [...document.querySelectorAll(".crumb")];
//   let counter = 0;
  


//   function getArticleName(button) {
//     //  let articleName = button.getAttribute("data-article");
//     //    return articleName;
// console.log(button.getAttribute("data-article"));
// };


//   let pageArticle = document.getElementById("Vision");
//   let numberOfSections = pageArticle.childElementCount;

//   let calcArticleWidth = () => {
//     let article = document.querySelector(".content__article--func");
//     let articleWidth = (article.style.width = `${
//       (counter + numberOfSections) * 100
//     }%`);
//     // console.log(articleWidth);
//   };
//   calcArticleWidth();

//   let switchBreadcrumbs = () => {
//     breadcrumbs.forEach((crumb) => {
//       crumb.classList.remove("crumb--active");
//     });
//     breadcrumbs[counter].classList.add("crumb--active");
//   };

//   moveLeftBtn.addEventListener("click", () => {
//     if (counter > 0) {
//       counter -= 1;
//       const articles = document.querySelector(".content__article--box");
//       articles.style.transform = `translateX(-${counter * 100}%)`;
//       moveRightBtn.classList.remove("button__move--disabled");
//       switchBreadcrumbs();
//     }
//     if (counter === 0) {
//       moveLeftBtn.classList.add("button__move--disabled");
//     }
//   });
//   moveRightBtn.addEventListener("click", () => {
//     if (counter >= 0 && counter < numberOfSections) {
//       counter += 1;
//       const articles = document.querySelector(".content__article--box");
//       articles.style.transform = `translateX(-${counter * 100}%)`;
//       moveLeftBtn.classList.remove("button__move--disabled");
//       switchBreadcrumbs();
//     }
//     if (counter === numberOfSections) {
//       moveRightBtn.classList.add("button__move--disabled");
//       console.log(counter);
//     }
//   });
// };

// export default clickThroughArticles;
