// console.log("test nav-animation");

//   let onloadWidth = window.innerWidth;

//   window.onload = () => {
//     if (onloadWidth > 900) {
//       slidrAnimation();
//     }
//   };



// function slidrAnimation() {


//   let allSectionSliders = [...document.querySelectorAll(".section-slider")];
//   let allSlides = [...document.querySelectorAll("[data-slider]")];

//   allSectionSliders.forEach((sectionSlider) => {
//     let listOfSlides = [...sectionSlider.querySelectorAll("[data-slider]")];

//     let listOfDatasets = () => {
//       let baseArray = [];
//       for (slide of listOfSlides) {
//         let slideData = slide.dataset.slider;
//         baseArray.push(slideData);
//       }
//       baseArray.push("slider-one");
//       return baseArray;
//     };

//     let generalSlider = slidr
//       .create(`${sectionSlider.id}`, {
//         breadcrumbs: true,
//         overflow: true,
//         theme: "#4f3af4",
//         timing: { cube: "0.5s ease-in" },
//         transition: "cube",
//       })
//       .add("h", listOfDatasets())
//       .start();
//   });
// }


// let activateSlider = () => {


//   window.addEventListener("resize", function () {
//     let resizeWidth = window.innerWidth;
//     if (resizeWidth > 900) {
//       slidrAnimation();
//     } else {
//       return;
//     }
//   });

// };






// activateSlider();
// // slidrAnimation();

// // export default slidrAnimation;
