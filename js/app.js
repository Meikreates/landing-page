/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

document.addEventListener('DOMContentLoaded', function() {
    // Define Global Variables
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
  
    // Build the Nav dynamically
    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionDataNav = section.getAttribute('data-nav');
  
      const li = document.createElement('li');
      const a = document.createElement('a');
  
      a.textContent = sectionDataNav;
      a.classList.add('menu__link');
      a.href = `#${sectionId}`;
      li.appendChild(a);
  
      navList.appendChild(li);
    });
  
    // Add class 'active' to section when near the top of the viewport
    function setActiveClass() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          section.classList.add('your-active-class');
        } else {
          section.classList.remove('your-active-class');
        }
      });
    }
  
    // Set sections as active when the page loads
    setActiveClass();
  
    // Scroll to section on link click with smooth scrolling
    navList.addEventListener('click', function (e) {
      e.preventDefault();
  
      if (e.target.classList.contains('menu__link')) {
        const targetSectionId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  
    // Add an event listener to set sections as active when scrolling
    window.addEventListener('scroll', setActiveClass);
  });
  
