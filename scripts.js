const ratingMain = document.getElementById("ratingMain");
const buttonNumbers = document.querySelectorAll("button.buttonRate");
const buttonSubmit = document.getElementById("buttonSubmit");
const mainAfterSubmit = document.getElementById("mainAfterSubmit");
const spanRatingSubmited = document.getElementById("spanRatingSubmited");

buttonNumbers.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    const numberButtonSelected = e.target.innerHTML;
    spanRatingSubmited.innerHTML = `You selected ${numberButtonSelected} out of 5`;
    if (numberButtonSelected > 0 || numberButtonSelected <= 5) {
      buttonSubmit.addEventListener("click", () => {
        ratingMain.style.display = "none";
        mainAfterSubmit.classList.toggle("mainDisplayedOnClick");
      });
    }
  });
});
