// // Scroll Animation using Intersection Observer
// document.addEventListener("DOMContentLoaded", () => {
//   const reveals = document.querySelectorAll(".reveal");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       }
//     });
//   }, { threshold: 0.2 });

//   reveals.forEach(el => observer.observe(el));
// });


 const buttons = document.querySelectorAll(".btnss");
  const btnContainer = document.querySelector(".card-btn");
  let offset = 0;

  // active button toggle
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });


  console.log('import R')

if (window.innerWidth <= 768) {
  var buttonSwiper = new Swiper(".card-btn-wrapper", {
    slidesPerView: 3, 
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}







// Modal functionality
function initModal() {
    const productDetailModal = document.getElementById('productDetailModal');
    const modalProductImg = document.getElementById('modalProductImg');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalProductPrice = document.getElementById('modalProductPrice');
    
    // Add event listeners to all view detail buttons
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', function() {
            // Get data from the button's data attributes
            const imgSrc = this.getAttribute('data-img');
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            
            // Update modal content
            modalProductImg.src = imgSrc;
            modalProductTitle.textContent = title;
            modalProductPrice.textContent = price;
        });
    });
    
    // Reset modal when it's closed
    productDetailModal.addEventListener('hidden.bs.modal', function () {
        modalProductImg.src = '';
        modalProductTitle.textContent = '';
        modalProductPrice.textContent = '';
    });
}

// Added initModal() to the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    initCategorySlider();
    initSearch();
    setActiveNavLink();
    initModal(); // Added this line
});










document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close on nav link click
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


 