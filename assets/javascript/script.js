$(document).ready(function () {

    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");

        let aboutPage = $("#about-nav");
        let projectsPage = $("#projects-nav");
        let contactPage = $("#contact-nav");

        console.log($(this).attr("id"));

        if (aboutPage.hasClass("active")) {
            console.log("about Page active");
            $("#homePage").addClass("hide");
            $("#aboutPage").removeClass("hide");
        };

        if (projectsPage.hasClass("active")) {
            console.log("project Page active");
        };

        if (contactPage.hasClass("active")) {
            console.log("contact Page active");
        };

    });

    $(".navbar-brand").on("click", function () {
        console.log("name clicked");
        $("#aboutPage").addClass("hide");
        $("#homePage").removeClass("hide");
    });

    $(".viewResume").on("click", function () {
        window.open("./assets/pdf/Hannah_Melton_Resume.pdf");
    });

});