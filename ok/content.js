// content.js
var newListItem = document.createElement("li");
newListItem.style.display = "block";

var newLink = document.createElement("a");
newLink.className = "dynamic-overflow-container text-nav";
newLink.href = "#";
newLink.id = "nav-custom-button";
newLink.target = "_self";

var innerDiv = document.createElement("div");
var iconSpan = document.createElement("span");
iconSpan.className = "icon-nav-custom-button";
var textSpan = document.createElement("span");
textSpan.className = "font-header-2 dynamic-ellipsis-item";
textSpan.textContent = "Custom Button";

innerDiv.appendChild(iconSpan);
newLink.appendChild(innerDiv);
newLink.appendChild(textSpan);

newListItem.appendChild(newLink);

var navMenu = document.querySelector(".nav-menu");
navMenu.appendChild(newListItem);
