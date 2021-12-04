console.log("test animation");

let allSliders = [...document.querySelectorAll(".section-slider")];
let allSlides = [...document.querySelectorAll("[data-slider]")];
// console.log(allSliders);
// console.log(allSlides);

function testIt() {
  console.log("TestIt");
}

allSliders.forEach((sectionSlider) => {
  let listOfSlides = [...sectionSlider.querySelectorAll("[data-slider]")];

  let listOfDatasets = () => {
    let baseArray = [];

    for (slide of listOfSlides) {
      let slideData = slide.dataset.slider;
      baseArray.push(slideData);
    }
    baseArray.push("slider-one");
    return baseArray;
  };
  console.log(listOfDatasets())
 testIt()
  let generalSlider = slidr
    .create(`${sectionSlider.id}`, {
      breadcrumbs: true,
      overflow: true,
      theme: "#4f3af4",
      timing: { cube: "0.5s ease-in" },
      transition: "cube",
    })
    .add("h", listOfDatasets())
    .start();
});

// selectIndividualSlides();

// function selectIndividualSlides() {
//   let slider = allSliders.children;

//   allSliders.forEach(slider => {
//     let slideCollector = [];
//     // console.log(slider.children);
//     let individualSlides = [...slider.children];
//     // console.log(individualSlides);
//     let collection = [];
//     for (let slide of individualSlides) {
//       collection.push(slide.dataset.slider);
//     }
//     console.log(collection)

// individualSlides.forEach(singleSlide => {
//   let slideDatasets = [];
//   // console.log(singleSlide.dataset);
//   let eachDataset = singleSlide.dataset;
//   slideDatasets.push(singleSlide.dataset.slider);
//   console.log(slideDatasets)
// });

// slideCollector.push(slider.dataset.slider);
//   })
// }

// allSliders.forEach((sectionSlider) => {

//   let generalSlider = slidr
//     .create(`${sectionSlider.id}`, {
//       breadcrumbs: true,
//       overflow: true,
//       theme: "#4f3af4",
//       timing: { cube: "0.5s ease-in" },
//       transition: "cube",
//     })
//     .add("h", ["slider-one", "slider-two", "slider-three", "slider-one"])
//     .start();  ;
// });
