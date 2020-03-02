$(document).ready(function () {

    console.log("hello");

    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");

        let aboutPage = $("#about-nav");
        let projectsPage = $("#projects-nav");
        let contactPage = $("#contact-nav");

        if (aboutPage.hasClass("active")) {
            $("#homePage").addClass("hide");
        };

        if (projectsPage.hasClass("active")) {
            
        };

        if (contactPage.hasClass("active")) {
            
        };

    });

    $("#viewResume").on("click", function () {
        window.open("./assets/pdf/Hannah_Melton_Resume.pdf");
    });

    $(".resume-nav").on("click", function () {
        window.open("./assets/pdf/Hannah_Melton_Resume.pdf");
    });

});