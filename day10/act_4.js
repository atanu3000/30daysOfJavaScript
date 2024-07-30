// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("form");
const submitter = document.getElementById("submitbtn");
const inputValue = document.querySelectorAll(".value")

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inputValue.forEach((input) => {
       console.log(input.value)
    })
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const option = document.getElementById("options");
const value = document.querySelector(".selected-value");

option.addEventListener("change", () => {
    value.innerText = option.value;
})