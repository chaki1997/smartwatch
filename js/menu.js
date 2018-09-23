$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("kak");
    } else {
        
       $("header").removeClass("kak");
    }
});