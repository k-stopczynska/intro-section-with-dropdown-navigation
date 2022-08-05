const hamburger = document.querySelector(".hamburger-container");
const menu = document.querySelector(".menu");
const arrows = document.querySelectorAll(".arrow");
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
  e.target.nextElementSibling.classList.toggle("active");
  const dropdown = e.target.nextElementSibling.parentNode.nextElementSibling;
  const submenu = e.target.nextElementSibling;
  if (submenu === featuresList) {
    dropdown.classList.toggle("dropdown");
    dropdown.nextElementSibling.classList.toggle("dropdown");
    dropdown.nextElementSibling.nextElementSibling.classList.toggle("dropdown");
    buttonWrapper.classList.toggle("dropdown");
    e.target.classList.toggle("rotate");
  }

  if (submenu === companyList) {
    dropdown.classList.toggle("dropdown2");
    dropdown.nextElementSibling.classList.toggle("dropdown2");
    buttonWrapper.classList.toggle("dropdown2");
    e.target.classList.toggle("rotate");
  }
};

hamburger.addEventListener("click", menuHandler);
arrows.forEach((arrow) => arrow.addEventListener("click", submenuHandler));
