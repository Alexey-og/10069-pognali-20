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

var filterItemHobby = document.querySelector(".travelmate-filter__item--hobby");
var filterItemMusic = document.querySelector(".travelmate-filter__item--music");
var filterItemFood = document.querySelector(".travelmate-filter__item--food");
var filterItemTransport = document.querySelector(".travelmate-filter__item--transport");
var filterItemLevel = document.querySelector(".travelmate-filter__item--level");

var filterTitleHobby = document.querySelector(".travelmate-filter__title--hobby");
var filterTitleMusic = document.querySelector(".travelmate-filter__title--music");
var filterTitleFood = document.querySelector(".travelmate-filter__title--food");
var filterTitleTransport = document.querySelector(".travelmate-filter__title--transport");
var filterTitleLevel = document.querySelector(".travelmate-filter__title--level");

pageHeader.classList.remove("page-header--no-js");

window.addEventListener("scroll", function() {
  pageHeader.classList.add("page-header--scroll");
  if (pageYOffset === 0) {
    pageHeader.classList.remove("page-header--scroll");
  }
});



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

if (filterItemHobby) {
  filterTitleHobby.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterItemHobby.classList.toggle("travelmate-filter__item--rolled");
  });
}

if (filterItemMusic) {
  filterTitleMusic.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterItemMusic.classList.toggle("travelmate-filter__item--rolled");
  });
}

if (filterItemFood) {
  filterTitleFood.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterItemFood.classList.toggle("travelmate-filter__item--rolled");
  });
}

if (filterItemTransport) {
  filterTitleTransport.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterItemTransport.classList.toggle("travelmate-filter__item--rolled");
  });
}

if (filterItemLevel) {
  filterTitleLevel.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterItemLevel.classList.toggle("travelmate-filter__item--rolled");
  });
}
