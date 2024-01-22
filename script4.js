// const sections = document.querySelector('.card');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// let currentSectionIndex = 0;
// nextButton.addEventListener('click', () => {
//   Container.scrollLeft += 200; // Adjust the scroll amount as needed
//   sections[currentSectionIndex].classList.remove('active');
//   currentSectionIndex = (currentSectionIndex + 1) % sections.length;
//   sections[currentSectionIndex].classList.add('active');
// });

// prevButton.addEventListener('click', () => {
//   Container.scrollLeft -= 200; // Adjust the scroll amount as needed
// });
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("scrolled"); // Add the "scrolled" class
    } else {
      nav.classList.remove("scrolled"); // Remove the "scrolled" class
    }
  });
  