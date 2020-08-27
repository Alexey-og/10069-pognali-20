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

var desiredCountriesExpand = document.querySelector(".desired-countries__expand");
var countrySelection = document.querySelector(".country-selection");
var countrySelectionCloseButton = document.querySelector(".country-selection__close");

/* var travelmateFilterItem = document.querySelector(".travelmate-filter__item");
var travelmateFilterTitle = document.querySelector(".travelmate-filter__title"); */

/* var filterLetter = document.querySelectorAll(".filter__letter");
var filterCountries = document.querySelectorAll(".filter__countries");
var filterLetters = document.querySelector(".filter__letters"); */


pageHeader.classList.remove("page-header--no-js");

if (countrySelection) {
  countrySelection.classList.add("hidden");
}

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

if (businessRates) {
  businessRatesClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRates.classList.add("hidden");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      businessRates.classList.add("hidden");
    }
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

if (desiredCountriesExpand) {
  desiredCountriesExpand.addEventListener("click", function (evt) {
    evt.preventDefault();
    countrySelection.classList.remove("hidden");
  });
}

if (countrySelectionCloseButton) {
  countrySelectionCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    countrySelection.classList.add("hidden");
  });
}
