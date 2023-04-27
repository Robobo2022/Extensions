const button = document.createElement("button");
button.innerHTML = "RoHydr";
button.classList.add("rohydr-button");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);

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
