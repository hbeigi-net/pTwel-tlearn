$(document).ready(function () {
    $(".list-style-one").click(function (e) { 
        let navList = document.querySelectorAll(".list-style-one");

        navList.forEach(function (item) { $(item).removeClass("active") });

        $(this).addClass("active");
        
    });
});