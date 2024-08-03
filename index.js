// DOM => document object modal



document.addEventListener("DOMContentLoaded", function() {
    function init() {
        const hamburger = document.querySelector(".hamburger");
        const sidebarCloseButton = document.querySelector(".close-button");
        const sidebarContainer = document.querySelector(".sidebar-container");

        const openSidebar = () => {
            sidebarContainer.classList.add("show-sidebar");
        }

        const closeSidebar = () => {
            sidebarContainer.classList.remove("show-sidebar");
        };

        hamburger.addEventListener("click", openSidebar);
        sidebarCloseButton.addEventListener("click", closeSidebar);
    }

    function navRelatedCode() {
        const navbarContainer = document.querySelector(".nav-container");
        window.addEventListener("scroll", function() {
            const scrolNumber = window.scrollY;
            const targetNumber = window.innerWidth >= 992 ? 70 : 50;
            if (scrolNumber >= targetNumber) {
                navbarContainer.classList.add("sticky-nav");
            } else {
                navbarContainer.classList.remove("sticky-nav");
            }
        });
    }

    init();
    navRelatedCode();
});
