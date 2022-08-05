const hamburger = document.querySelector(".hamburger-container");
const menu = document.querySelector(".menu");
const mainNavListItems = document.querySelectorAll(".main-nav-list-item");
const overlay = document.querySelector(".overlay");
const buttonWrapper = document.querySelector(".nav-button-wrapper");
const featuresList = document.querySelector("#features-list");
const companyList = document.querySelector("#company-list");

const menuHandler = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
};

const submenuHandler = (e) => {
  const dropdown = e.target.nextElementSibling;
  const submenu = e.target.children[0];
  submenu.classList.toggle("active");

  let className;
  if (submenu === featuresList) {
    className = "dropdown";
  }
  if (submenu === companyList) {
    className = "dropdown2";
  }
  dropdown.classList.toggle(className);
  dropdown.nextElementSibling.classList.toggle(className);
  if (dropdown.nextElementSibling.nextElementSibling) {
    dropdown.nextElementSibling.nextElementSibling.classList.toggle(className);
  }
  buttonWrapper.classList.toggle(className);
  e.target.classList.toggle("rotate");
};

hamburger.addEventListener("click", menuHandler);
mainNavListItems.forEach((mainNavListItem) =>
  mainNavListItem.addEventListener("click", submenuHandler)
);
