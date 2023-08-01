(function($) {

  "use strict";

  // Tab Section
  var initTabs = function(){
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }


  // Responsive Navigation with Button
      var initHamburgerMenu = function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".menu-list");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("responsive");
        }

        const navLink = document.querySelectorAll(".item-anchor");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("responsive");
        }
      };

    var swiper = new Swiper(".product-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        699: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });


// document ready
  $(document).ready(function(){
    initTabs();
    initHamburgerMenu();
  });

})(jQuery);