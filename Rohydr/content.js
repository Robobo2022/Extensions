const button = document.createElement("button");
const link = document.createElement("link");

link.rel = "stylesheet";
link.href = chrome.extension.getURL("style.css");
document.head.appendChild(link);

button.innerHTML = "RoHydr";
button.classList.add("rohydr-button");

let popup = null;

button.addEventListener("click", () => {
  if (popup) {
    popup.remove();
    popup = null;
    return;
  }
  
  popup = document.createElement("div");
  popup.classList.add("rohydr-popup");
  popup.innerHTML = `
    <h3>RoHydr Popup</h3>
    <p>This is the popup content.</p>
  `;

  document.body.appendChild(popup);
});

const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);
