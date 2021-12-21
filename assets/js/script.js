$(document).ready(function () {
    $(".list-style-one").click(function (e) {
        let navList = document.querySelectorAll(".list-style-one");

        navList.forEach(function (item) {
            $(item).removeClass("active")
        });

        $(this).addClass("active");


    });

    $("#small_screen_nav_toggler").click(function (e) {
        e.stopPropagation();
        $("#sm_screen_navbar").addClass("nav-show");
        $(".overlay").addClass("show-overlay");

    });

    $("#off_closer").click(function (e) {
        e.stopPropagation();
        $("#sm_screen_navbar").removeClass("nav-show");
        $(".overlay").removeClass("show-overlay");
    });
    $(".overlay").click(function (e) {
        e.stopPropagation();
        $("#sm_screen_navbar").removeClass("nav-show");
        $(".overlay").removeClass("show-overlay");
    });
});