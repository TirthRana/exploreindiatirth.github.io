function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

function selectOption(option) {
  var dropdownBtn = document.querySelector(".dropdown-btn");
  dropdownBtn.innerHTML = option;
  toggleDropdown();
}
