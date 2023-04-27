// content.js

document.addEventListener("DOMContentLoaded", function() {
  // Create the new list item element
  var newListItem = document.createElement("li");
  newListItem.style.display = "block";

  // Create the new link element
  var newLink = document.createElement("a");
  newLink.className = "dynamic-overflow-container text-nav";
  newLink.href = "#";
  newLink.id = "nav-custom-button";
  newLink.target = "_self";

  // Create the inner elements for the link
  var innerDiv = document.createElement("div");
  var iconSpan = document.createElement("span");
  iconSpan.className = "icon-nav-custom-button";
  var textSpan = document.createElement("span");
  textSpan.className = "font-header-2 dynamic-ellipsis-item";
  textSpan.textContent = "Custom Button";

  // Build the link element
  innerDiv.appendChild(iconSpan);
  newLink.appendChild(innerDiv);
  newLink.appendChild(textSpan);

  // Add the link to the list item
  newListItem.appendChild(newLink);

  // Add the new list item to the navigation menu
  var navMenu = document.querySelector(".nav-menu");
  if (navMenu) {
    navMenu.appendChild(newListItem);
  }

  // Create a new text element and add it to the page
  var newText = document.createElement("p");
  newText.textContent = "New text added by RoHydr";
  newText.style.color = "red";
  document.body.appendChild(newText);
});
