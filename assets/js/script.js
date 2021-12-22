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


    $(".owl-carousel").owlCarousel({
        rtl:true,
        loop : true ,
        dots :false,
        autoplay : true ,
        responsive :
        {
            0 :
            {
                items : 1
            },
            576 : 
            {
                items : 2
            },
            768 :
            {
                items : 3
            },
            1100 :
            {
                items : 4
            }
        }
    })
});