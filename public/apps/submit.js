function disableSubmitBtn() {
  const submitBtn = document.getElementById("submit");
  const formInputs = [...document.querySelectorAll(".form__section input, .form__section textarea")];
  
  let textarea = document.querySelector(".form__textarea");
  console.log(textarea)

  textarea.addEventListener("input", () => {
    if (textarea.input == true) {
        console.log("okay")
    } 
        
  })
validateForm();
function validateForm() {
  let x = document.forms["contact"]["name"].value;
  if (x == "a") {
    alert("Name must be filled out");
    return false;
  }
}
//   submitBtn.disabled = true;
//   let controlArray = [];
  
//   formInputs.forEach(input => {
//       input.addEventListener("keydown", function() {
//           console.log("added")
//       })
//       console.log(controlArray)
//   })
}

export default disableSubmitBtn;
