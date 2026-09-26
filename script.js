/* =========================================================
   APIPAH DERAJAT
   PERSONAL WEBSITE
   SCRIPT.JS
========================================================= */


/* =========================================================
   WAIT UNTIL DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {


        menuToggle.addEventListener(
            "click",
            function () {

                mainNav.classList.toggle("active");

                menuToggle.classList.toggle("active");

            }
        );


        /* -----------------------------------------------
           CLOSE MENU AFTER CLICKING NAVIGATION
        ------------------------------------------------ */

        const navLinks =
            mainNav.querySelectorAll(".nav-link");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove("active");

                    menuToggle.classList.remove("active");

                }
            );

        });


        /* -----------------------------------------------
           CLOSE MENU WHEN CLICKING OUTSIDE
        ------------------------------------------------ */

        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideMenu =
                    mainNav.contains(event.target);

                const clickedToggle =
                    menuToggle.contains(event.target);


                if (
                    !clickedInsideMenu &&
                    !clickedToggle
                ) {

                    mainNav.classList.remove("active");

                    menuToggle.classList.remove("active");

                }

            }
        );

    }



    /* =====================================================
       PORTFOLIO FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    if (
        filterButtons.length &&
        portfolioCards.length
    ) {


        filterButtons.forEach(function (button) {


            button.addEventListener(
                "click",
                function () {


                    /* -----------------------------------
                       REMOVE ACTIVE FROM ALL BUTTONS
                    ----------------------------------- */

                    filterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* -----------------------------------
                       ADD ACTIVE TO CLICKED BUTTON
                    ----------------------------------- */

                    this.classList.add("active");


                    const selectedFilter =
                        this.getAttribute(
                            "data-filter"
                        );


                    /* -----------------------------------
                       FILTER PORTFOLIO
                    ----------------------------------- */

                    portfolioCards.forEach(
                        function (card) {


                            const categories =
                                card.getAttribute(
                                    "data-category"
                                );


                            if (
                                selectedFilter === "all" ||
                                (
                                    categories &&
                                    categories
                                        .toLowerCase()
                                        .includes(
                                            selectedFilter
                                                .toLowerCase()
                                        )
                                )
                            ) {

                                card.classList.remove(
                                    "hide"
                                );

                            } else {

                                card.classList.add(
                                    "hide"
                                );

                            }

                        }
                    );

                }
            );

        });

    }



    /* =====================================================
       NAVIGATION ACTIVE STATE
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            '.main-nav .nav-link[href^="#"]'
        );


    if (
        sections.length &&
        navigationLinks.length
    ) {


        window.addEventListener(
            "scroll",
            function () {


                let currentSection = "";


                sections.forEach(
                    function (section) {


                        const sectionTop =
                            section.offsetTop - 150;


                        const sectionHeight =
                            section.offsetHeight;


                        if (
                            window.scrollY >=
                                sectionTop &&
                            window.scrollY <
                                sectionTop +
                                sectionHeight
                        ) {

                            currentSection =
                                section.getAttribute(
                                    "id"
                                );

                        }

                    }
                );


                navigationLinks.forEach(
                    function (link) {


                        link.classList.remove(
                            "active"
                        );


                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href ===
                            "#" + currentSection
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );

    }



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    const header =
                        document.querySelector(
                            ".site-header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.offsetTop -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });



    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(
            ".site-header"
        );


    if (header) {


        window.addEventListener(
            "scroll",
            function () {


                if (window.scrollY > 20) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            }
        );

    }



    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".skill-card, " +
            ".service-card, " +
            ".portfolio-card, " +
            ".project-item, " +
            ".blog-card, " +
            ".contact-card, " +
            ".about-card"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {


        const observer =
            new IntersectionObserver(
                function (
                    entries,
                    observerInstance
                ) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.classList.add(
                                    "show"
                                );


                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold:
                        0.12

                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       ESCAPE KEY
       CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "Escape" &&
                mainNav &&
                menuToggle
            ) {

                mainNav.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

            }

        }
    );


});