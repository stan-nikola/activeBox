$(function () {

    
    /*FixedHeader */

    let header = $("#header");
    let intro = $("#intro");
    let introH=intro.innerHeight();
    let scrollPos = $(window).scrollTop();

     let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);
    

    $(window).on("scroll resize", function () {
        
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);

       
                   

    });

    function checkScroll(scrollPos, introH) {
        
         if (scrollPos > introH)
        { header.addClass("fixed");}
        else
        { header.removeClass("fixed"); }
    }

    /*SmoothScroll */
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop:elementOffset -80

        }, 700);
        
    });

    /* navToggle*/
   
    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
        
    });

    /*Revoews https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewSlider");

        slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots:true
        
});




    

});
    


