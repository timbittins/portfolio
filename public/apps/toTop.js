let toTopButtonFunction = (scrollFunction, topFunction) => { console.log("Top")
  const toTopButton = document.getElementById("toTop");
  let windowHeight = window.innerHeight - 10;

  toTopButton.style.display = "none";

  function scrollFunction() {
    if (
      document.body.scrollTop > windowHeight ||
      document.documentElement.scrollTop > windowHeight
    ) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  document.onscroll = function () {
    scrollFunction();
  };

  toTopButton.addEventListener("click", topFunction);
};

export default toTopButtonFunction;
