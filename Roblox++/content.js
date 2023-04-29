const button = document.createElement("button");
const link = document.createElement("link");

link.rel = "stylesheet";
link.href = chrome.extension.getURL("style.css");
document.head.appendChild(link);

button.innerHTML = "Roblox++";
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
    <div class="rohydr-popup-header">
      <h3>Roblox++ Popup</h3>
      <label class="rohydr-toggle">
        <input type="checkbox">
        <span class="rohydr-toggle-slider"></span>
      </label>
    </div>
    <div class="rohydr-popup-content">
      <p>This is the popup content.</p>
    </div>
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

window.addEventListener("scroll", () => {
  if (isPopupVisible) {
    const buttonRect = button.getBoundingClientRect();
    popup.style.top = `${buttonRect.bottom}px`;
    popup.style.left = `${buttonRect.left}px`;
    popup.style.position = "fixed";
  }
});

const navbar = document.querySelector(".navbar-right");
navbar.prepend(button);
