const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () =>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Your feedback is appreciated.We will use it to improve our services. </p>
        `
    }
});

    function removeActive() {
        ratingEls.forEach((ratingEl) => {
            ratingEl.classList.remove("active");
        });
    }
    