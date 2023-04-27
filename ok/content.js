// create the button element
const button = document.createElement("button");
button.innerHTML = "RoHydr";
button.classList.add("rohydr-button");

// add a click event listener to the button
button.addEventListener("click", () => {
  // replace this with your desired functionality
  console.log("Button clicked!");
});

// add the button to the page
const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);

// add some CSS styling to the button
const style = document.createElement("style");
style.innerHTML = `
.rohydr-button {
  background-color: #0083C3;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  top: 4px;
  margin-right: 8px;
}
`;
document.head.appendChild(style);
