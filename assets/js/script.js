'use strict';

// Toggle the "active" class for an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Reset filters and dropdowns for the given page
const resetFilters = (activePage) => {
  const dropdown = activePage.querySelector("[data-select]");
  const dropdownValue = activePage.querySelector("[data-selecct-value]");
  const filterBtns = activePage.querySelectorAll("[data-filter-btn]");
  const filterItems = activePage.querySelectorAll("[data-filter-item]");

  if (dropdownValue) {
    dropdownValue.innerText = "All"; // Reset dropdown to "All"
  }

  // Reset all filter buttons
  filterBtns.forEach(btn => btn.classList.remove("active"));
  if (filterBtns[0]) {
    filterBtns[0].classList.add("active"); // Set "All" button as active
  }

  // Show all filterable items
  filterItems.forEach(item => item.classList.add("active"));
};

// Navigation logic to switch pages
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    pages.forEach((page, pageIndex) => {
      if (pageIndex === index) {
        page.classList.add("active");
        link.classList.add("active");
        resetFilters(page); // Reset filters for the activated page
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
    window.scrollTo(0, 0); // Scroll to the top on page switch
  });
});

// Filter and dropdown logic for all pages
const filterItemsByPage = document.querySelectorAll("[data-page]");
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

  // Filter button functionality
  const filterBtns = page.querySelectorAll("[data-filter-btn]");
  if (filterBtns) {
    filterBtns.forEach(button => {
      button.addEventListener("click", () => {
        const selectedValue = button.innerText.toLowerCase();

        // Update active button
        filterBtns.forEach(btn => btn.classList.remove("active"));
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

// // Modal logic for testimonials and overlays
// const modals = document.querySelectorAll("[data-modal-container]");
// const modalCloseBtns = document.querySelectorAll("[data-modal-close-btn]");
// const overlays = document.querySelectorAll("[data-overlay]");
// const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");

// // Toggle modal function
// const toggleModal = (modal, overlay) => {
//   modal.classList.toggle("active");
//   overlay.classList.toggle("active");
// };

// // Attach event listeners for modals
// testimonialsItems.forEach(item => {
//   item.addEventListener("click", () => {
//     const modal = document.querySelector("[data-modal-container]");
//     const overlay = document.querySelector("[data-overlay]");
//     // Update modal content dynamically if needed
//     toggleModal(modal, overlay);
//   });
// });

// // Attach close events to modals
// modalCloseBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const modal = btn.closest("[data-modal-container]");
//     const overlay = document.querySelector("[data-overlay]");
//     toggleModal(modal, overlay);
//   });
// });

// overlays.forEach(overlay => {
//   overlay.addEventListener("click", () => {
//     const modal = document.querySelector("[data-modal-container].active");
//     if (modal) toggleModal(modal, overlay);
//   });
// });


// Modal variables
const modals = document.querySelectorAll("[data-modal-container]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close-btn]");
const overlays = document.querySelectorAll("[data-overlay]");
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");

// Modal content variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Toggle modal function
const toggleModal = (modal, overlay) => {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Attach event listeners for testimonials
testimonialsItems.forEach(item => {
  item.addEventListener("click", () => {
    const modal = document.querySelector("[data-modal-container]");
    const overlay = document.querySelector("[data-overlay]");

    // Dynamically update modal content
    const testimonialImg = item.querySelector("[data-testimonials-avatar]");
    const testimonialTitle = item.querySelector("[data-testimonials-title]");
    const testimonialText = item.querySelector("[data-testimonials-text]");

    if (testimonialImg) {
      modalImg.src = testimonialImg.src;
      modalImg.alt = testimonialImg.alt || "Testimonial Avatar";
    }

    if (testimonialTitle) {
      modalTitle.innerText = testimonialTitle.innerText;
    }

    if (testimonialText) {
      modalText.innerText = testimonialText.innerText;
    }

    // Open the modal
    toggleModal(modal, overlay);
  });
});

// Attach close events to modals
modalCloseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest("[data-modal-container]");
    const overlay = document.querySelector("[data-overlay]");
    toggleModal(modal, overlay);
  });
});

overlays.forEach(overlay => {
  overlay.addEventListener("click", () => {
    const modal = document.querySelector("[data-modal-container].active");
    if (modal) toggleModal(modal, overlay);
  });
});


// Form validation logic
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      // Enable the submit button if the form is valid
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}
