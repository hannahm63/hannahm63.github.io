$(document).ready(function () {

    let aboutPage = $("#about-nav");
    let projectsPage = $("#projects-nav");
    let resumePage = $("#resume-nav");
    let contactPage = $("#contact-nav");

    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");

        console.log($(this).attr("id"));

        if (aboutPage.hasClass("active")) {
            console.log("about Page active");
            $("#homePage").addClass("hide");
            $("#projectsPage").addClass("hide");
            $("#contactPage").addClass("hide");
            $("#aboutPage").removeClass("hide");
        };

        if (projectsPage.hasClass("active")) {
            console.log("project Page active");
            $("#homePage").addClass("hide");
            $("#aboutPage").addClass("hide");
            $("#contactPage").addClass("hide");
            $("#projectsPage").removeClass("hide");
        };

        if (contactPage.hasClass("active")) {
            console.log("contact Page active");
            $("#homePage").addClass("hide");
            $("#aboutPage").addClass("hide");
            $("#projectsPage").addClass("hide");
            $("#contactPage").removeClass("hide");
        };

    });

    $(".navbar-brand").on("click", function () {
        console.log("name clicked");
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