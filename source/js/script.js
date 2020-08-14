'use strict';

var pageHeader = document.querySelector(".page-header");
var pageHeaderButton = document.querySelector(".page-header__button");
var businessRatesShow = document.querySelector(".add-profile__show");
var businessRates = document.querySelector(".business-rates");
var businessRatesClose = document.querySelector(".business-rates__close");

var filter = document.querySelector(".filter");
var filterExpand = document.querySelector(".filter-header__expand");
var filterCollapse = document.querySelector(".filter-header__collapse");
var filterCloseButton = document.querySelector(".filter__close-button");

var filterLetter = document.querySelectorAll(".filter__letter");
var filterCountries = document.querySelectorAll(".filter__countries");
var filterLetters = document.querySelector(".filter__letters");


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

if (filterExpand) {
  filterExpand.addEventListener("click", function (evt) {
    evt.preventDefault();
    filter.classList.add("filter--expand");
  });
}

if (filterCollapse) {
  filterCollapse.addEventListener("click", function (evt) {
    evt.preventDefault();
    filter.classList.remove("filter--expand");
  });
}

if (filterCloseButton) {
  filterCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    filter.classList.remove("filter--expand");
  });
}


/* if (filterLetters) {
  filterLetters.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("filter__letter")) {
      filterCountries[filterLetter[evt.target]].classList.toggle("hidden");
    };
  });
} */
