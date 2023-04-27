const button = document.createElement("button");
const link = document.createElement("link");

link.rel = "stylesheet";
link.href = chrome.extension.getURL("style.css");
document.head.appendChild(link);

button.innerHTML = "RoHydr";
button.classList.add("rohydr-button");

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
    <h3>RoHydr Popup</h3>
    <p>This is the popup content.</p>
  `;

  document.body.appendChild(popup);
  const buttonRect = button.getBoundingClientRect();
  popup.style.top = `${buttonRect.bottom}px`;
  popup.style.left = `${buttonRect.left}px`;
  setTimeout(() => {
    popup.classList.add("show");
    isPopupVisible = true;
  }, 0);
});

const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);
