$(document).ready(function () {

    console.log("hello");

    $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");

        $('html,body').animate({
            scrollTop: $("#projectSection").offset().top
        },
            'slow');

    });

    $("#viewResume").on("click", function () {
        window.open("./assets/pdf/Hannah_Melton_Resume.pdf");
    });

});