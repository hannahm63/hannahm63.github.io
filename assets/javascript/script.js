$(document).ready(function () {

    let aboutPage = $("#about-nav");
    let projectsPage = $("#projects-nav");
    let contactPage = $("#contact-nav");

    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");

        if (aboutPage.hasClass("active")) {
            $("#homePage").addClass("hide");
            $("#projectsPage").addClass("hide");
            $("#contactPage").addClass("hide");
            $("#aboutPage").removeClass("hide");
        };

        if (projectsPage.hasClass("active")) {
            $("#homePage").addClass("hide");
            $("#aboutPage").addClass("hide");
            $("#contactPage").addClass("hide");
            $("#projectsPage").removeClass("hide");
        };

        if (contactPage.hasClass("active")) {
            $("#homePage").addClass("hide");
            $("#aboutPage").addClass("hide");
            $("#projectsPage").addClass("hide");
            $("#contactPage").removeClass("hide");
        };
    });

    $("#viewProjects").on("click", function () {
        $("#homePage").addClass("hide");
        $("#aboutPage").addClass("hide");
        $("#contactPage").addClass("hide");
        $("#projectsPage").removeClass("hide");
    })

    $(".navbar-brand").on("click", function () {
        aboutPage.removeClass("active");
        projectsPage.removeClass("active");
        contactPage.removeClass("active");

        $("#aboutPage").addClass("hide");
        $("#projectsPage").addClass("hide");
        $("#contactPage").addClass("hide");
        $("#homePage").removeClass("hide");
    });

    $(".viewResume").on("click", function () {
        window.open("./assets/pdf/Hannah_Melton_Resume.pdf");
    });
});