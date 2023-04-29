const button = document.createElement("button");
const link = document.createElement("link");
const colorPicker = document.createElement("input");

link.rel = "stylesheet";
link.href = chrome.extension.getURL("style.css");
document.head.appendChild(link);

button.innerHTML = "Roblox++";
button.classList.add("rohydr-button");

colorPicker.type = "color";
colorPicker.value = "#FFFFFF";
colorPicker.classList.add("rohydr-colorpicker");

let popup = null;
let isPopupVisible = false;

button.addEventListener("click", () => {
  if (isPopupVisible) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.remove();
      popup = null;
      isPopupVisible = false;
    }, 200);
    return;
  }

  popup = document.createElement("div");
  popup.classList.add("rohydr-popup");
  popup.innerHTML = `
    <div class="rohydr-popup-content">
      <label for="rohydr-colorpicker">Background Color</label>
      <br>
      <input type="color" id="rohydr-colorpicker" value="#FFFFFF">
    </div>
  `;

  document.body.appendChild(popup);
  const buttonRect = button.getBoundingClientRect();
  popup.style.top = `${buttonRect.bottom}px`;
  popup.style.left = `${buttonRect.left}px`;

  // Add event listener to color picker
  const colorPickerElement = popup.querySelector("#rohydr-colorpicker");
  colorPickerElement.addEventListener("change", () => {
    const mainContainer = document.querySelector("#container-main");
    const contentContainer = document.querySelector("#container-main > div.content");
    const profileContainer = document.querySelector("#container-main > div.content > div.profile-container.ng-scope");
    const profileHeader = document.querySelector("#container-main > div.content > div.profile-container.ng-scope > div > div.section.profile-header > div");

    mainContainer.style.backgroundColor = colorPickerElement.value;
    contentContainer.style.backgroundColor = colorPickerElement.value;

    if (profileContainer) {
      profileContainer.style.backgroundColor = colorPickerElement.value;
    }

    if (profileHeader) {
      profileHeader.style.backgroundColor = colorPickerElement.value;
    }

    localStorage.setItem("rohydr-color", colorPickerElement.value);
  });

  setTimeout(() => {
    popup.classList.add("show");
    isPopupVisible = true;
  }, 0);
});

const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);

const storedColor = localStorage.getItem("rohydr-color");
if (storedColor) {
  colorPicker.value = storedColor;
  const mainContainer = document.querySelector("#container-main");
  mainContainer.style.backgroundColor = storedColor;
  const profileContainer = document.querySelector("#container-main > div.content > div.profile-container.ng-scope");
  profileContainer.style.backgroundColor = storedColor;
  const profileHeader = document.querySelector("#container-main > div.content > div.profile-container.ng-scope > div > div.section.profile-header > div");
  profileHeader.style.backgroundColor = storedColor;
  const contentContainer = document.querySelector("#container-main > div.content");
  console.log(contentContainer); // Debugging line
  contentContainer.style.backgroundColor = storedColor;
  console.log(contentContainer.style.backgroundColor); // Debugging line
  
}
