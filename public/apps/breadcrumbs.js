let breadcrumbs = () => {
  let articleSections = [...document.getElementById("Kompetenzen").children];
  const breadcrumbs = document.createElement("div");
  breadcrumbs.className = "breadcrumbs";
  document.querySelector(".page__content").appendChild(breadcrumbs);

  articleSections.forEach((article) => {
    const crumb = document.createElement("div");
    crumb.className = "crumb";
    document.querySelector(".breadcrumbs").appendChild(crumb);
  });

  breadcrumbs.firstChild.classList.add("crumb--active");
};

export default breadcrumbs;