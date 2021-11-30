console.log("test animation");

let allSliders = [...document.querySelectorAll(".section-slider")];

allSliders.forEach((sectionSlider) => {

  let generalSlider = slidr
    .create(`${sectionSlider.id}`, {
      breadcrumbs: true,
      overflow: true,
      theme: "#4f3af4",
      timing: { cube: "0.5s ease-in" },
      transition: "cube",
    })
    .add("h", ["slider-one", "slider-two", "slider-three", "slider-one"])
    .start();  ;


});

