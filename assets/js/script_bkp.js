// 'use strict';



// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//         // Clear filters when switching pages
//         clearFilters();
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }


// // Function to clear all active filters
// const clearFilters = function () {
//   // Reset the select dropdown value
//   const selectValue = document.querySelector("[data-selecct-value]");
//   const filterItems = document.querySelectorAll("[data-filter-item]");

//   if (selectValue) {
//     selectValue.innerText = "All"; // Reset to default (e.g., "All")
//   }

//   // Reset all filter items to be visible
//   filterItems.forEach(item => item.classList.add("active"));

//   // Reset filter buttons' active states
//   const filterBtns = document.querySelectorAll("[data-filter-btn]");
//   filterBtns.forEach(btn => btn.classList.remove("active"));
//   if (filterBtns[0]) {
//     filterBtns[0].classList.add("active"); // Set default filter button as active
//   }
// };


'use strict';

// Toggle the "active" class for an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Dropdown and filter variables
const selectElements = document.querySelectorAll("[data-select]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const selectValues = document.querySelectorAll("[data-selecct-value]");
const filterItemsByPage = document.querySelectorAll("[data-page]");

// Add event to navigation links to switch pages and reset filters
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages.forEach((page, pageIndex) => {
      if (pageIndex === index) {
        // Activate the clicked page
        page.classList.add("active");
        link.classList.add("active");
        resetFilters(page); // Reset filters for the activated page
      } else {
        // Deactivate other pages
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
    window.scrollTo(0, 0); // Scroll to top on page switch
  });
});

// Function to reset filters on the given page
const resetFilters = (activePage) => {
  // Reset dropdown
  const dropdown = activePage.querySelector("[data-select]");
  const dropdownValue = activePage.querySelector("[data-selecct-value]");
  const filterBtns = activePage.querySelectorAll("[data-filter-btn]");
  const filterItems = activePage.querySelectorAll("[data-filter-item]");

  if (dropdownValue) {
    dropdownValue.innerText = "All"; // Reset dropdown text to "All"
  }

  // Reset all filter buttons
  filterBtns.forEach(btn => btn.classList.remove("active"));
  if (filterBtns[0]) {
    filterBtns[0].classList.add("active"); // Set "All" filter as active
  }

  // Show all items
  filterItems.forEach(item => item.classList.add("active"));
};

// Add filter functionality to dropdowns and buttons
filterItemsByPage.forEach(page => {
  // Dropdown functionality
  const dropdown = page.querySelector("[data-select]");
  const dropdownItems = page.querySelectorAll("[data-select-item]");
  const dropdownValue = page.querySelector("[data-selecct-value]");
  const filterItems = page.querySelectorAll("[data-filter-item]");

  if (dropdown) {
    // Toggle dropdown menu
    dropdown.addEventListener("click", () => elementToggleFunc(dropdown));

    // Apply filter on dropdown selection
    dropdownItems.forEach(item => {
      item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        dropdownValue.innerText = item.innerText; // Update dropdown text
        elementToggleFunc(dropdown); // Close dropdown menu
        filterItems.forEach(filterItem => {
          // Show/hide items based on filter category
          if (selectedValue === "all" || selectedValue === filterItem.dataset.category) {
            filterItem.classList.add("active");
          } else {
            filterItem.classList.remove("active");
          }
        });
      });
    });
  }

  // Filter buttons functionality
  const buttons = page.querySelectorAll("[data-filter-btn]");
  if (buttons) {
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedValue = button.innerText.toLowerCase();

        // Update active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Apply filter
        filterItems.forEach(filterItem => {
          if (selectedValue === "all" || selectedValue === filterItem.dataset.category) {
            filterItem.classList.add("active");
          } else {
            filterItem.classList.remove("active");
          }
        });

        // Reset dropdown value
        if (dropdownValue) {
          dropdownValue.innerText = button.innerText;
        }
      });
    });
  }
});
