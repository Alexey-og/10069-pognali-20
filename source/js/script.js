'use strict';

var pageHeader = document.querySelector(".page-header");
var pageHeaderButton = document.querySelector(".page-header__button");
var businessRatesShow = document.querySelector(".profile-list__show");
var businessRates = document.querySelector(".business-rates");
var businessRatesClose = document.querySelector(".business-rates__close");

pageHeader.classList.remove("page-header--no-js");

pageHeaderButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  pageHeader.classList.toggle("page-header--dropped");
});

if (businessRatesShow) {
  businessRatesShow.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRates.classList.remove("hidden");
  });
}

if (businessRatesClose) {
  businessRatesClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRates.classList.add("hidden");
  });
}
