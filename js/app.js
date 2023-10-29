
// Start measuring time
let startTime = performance.now();

// Get all section elements
const sections = document.querySelectorAll("section");

// Get the list for navigation items
const navList = document.getElementById("navbar__list");

// Create navigation menu items dynamically
function createNavItems() {
  sections.forEach((section) => {
    const sectionName = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");

    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");

    linkItem.className = "menu__link";
    linkItem.href = `#${sectionId}`;
    linkItem.textContent = sectionName;

    listItem.append(linkItem);
    navList.append(listItem);

    linkItem.addEventListener("click", function () {
      linkItem.classList.add("activeLinks");
    });

    linkItem.onblur = function () {
      linkItem.classList.remove("activeLinks");
    };
  });
}

// Call the function to create the navigation menu
createNavItems();

// Get the header element
const header = document.getElementsByClassName("page__header")[0];
const main = document.getElementsByTagName("main")[0];

// Detect scrolling and show/hide the navigation bar
let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", function () {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollPosition > prevScrollPosition) {
    header.style.top = "0"; // Keep the header visible
  } else {
    header.style.top = "0"; // Keep the header visible
  }

  prevScrollPosition = currentScrollPosition;
});

// Create a scroll-to-top button
const createScrollTopButton = function () {
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerHTML = "Back To Top";
  scrollTopBtn.className = "scrolltotop";
  main.append(scrollTopBtn);

  const showScrollButton = function () {
    if (window.scrollY > window.innerHeight) {
      scrollTopBtn.classList.add("scrolltotopshow");
    } else {
      scrollTopBtn.classList.remove("scrolltotopshow");
    }
  };

  window.addEventListener("scroll", showScrollButton);

  const scrollWindow = function () {
    if (window.scrollY !== 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 30);
        scrollWindow();
      }, 10);
    }
  };

  scrollTopBtn.addEventListener("click", scrollWindow);
};

// Call the scroll to top button function
createScrollTopButton();

// Collapse sections when clicking on headers
const sectionHeaders = document.getElementsByTagName("h2");
for (let i = 0; i < sectionHeaders.length; i++) {
  const header = sectionHeaders[i];
  header.addEventListener("click", function () {
    this.classList.toggle("active");
    const section = this.nextElementSibling;
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
}

// Highlight the active section in the viewport
window.onscroll = () => {
  sections.forEach((element) => {
    if (element.getBoundingClientRect().top >= -400 && element.getBoundingClientRect().top <= 150) {
      element.classList.add("your-active-class");
    } else {
      element.classList.remove("your-active-class");
    }
  });
};

// Smoothly scroll to a section when clicking a link
const links = document.querySelectorAll(".menu__link");
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const anchor = this.getAttribute("href");
  const offsetTop = document.querySelector(anchor).offsetTop;
  window.scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// Stop measuring time
let endTime = performance.now();

// Log the time taken in milliseconds
console.log(`${endTime - startTime} milliseconds`);