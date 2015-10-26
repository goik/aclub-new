$(document).ready(function() {

    // end valid open window in blank
    $(".tb").each(function() {
        $(this).attr("target", "_blank");
    });
    // valid open window in blank

    // hide alt title
    var getAlt = "",
        getTitle = "";
    $("body").on("mouseenter", ".hta", function() {
        tag = $(this);
        getAlt = tag.attr("alt");
        getTitle = tag.attr("title");
        tag.attr("alt", "");
        tag.attr("title", "");
    });

    $("body").on("mouseleave", ".hta", function() {
        tag = $(this);
        tag.attr("alt", getAlt);
        tag.attr("title", getTitle);
    });
    // end hide alt title

    $("body").on("click", "a", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1200);
                return false;
            }
        }
    });


    var owlLargSlide = $(".js-main-slider-carcass").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        // lazyEffect:"fade",
        // transitionStyle:"fade",
        responsive: true,
        afterAction: function(elem) {}
    });


    var cardUsedCarousel = $(".card-used-carousel").owlCarousel({
        items: 5,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        // lazyEffect:"fade",
        // transitionStyle:"fade",
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".slider-card-used-prev").click(function() {
        cardUsedCarousel.trigger('owl.prev');
        return false;
    });

    $(".slider-card-used-next").click(function() {
        cardUsedCarousel.trigger('owl.next');
        return false;
    });


    var tripleCarouselRect = $(".triple-carousel-rect").owlCarousel({
        items: 3,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".triple-prev-special-offer").click(function() {
        tripleCarouselRect.trigger('owl.prev');
        return false;
    });

    $(".triple-next-special-offer").click(function() {
        tripleCarouselRect.trigger('owl.next');
        return false;
    });




    var round = $(".favorit-place-carousel").owlCarousel({
        items: 3,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".triple-prev-favorit-place").click(function() {
        round.trigger('owl.prev');
        return false;
    });

    $(".triple-next-favorit-place").click(function() {
        round.trigger('owl.next');
        return false;
    });



    var partner = $(".partner-carousel").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        afterAction: function(elem) {

            $(".currentPartner").each(function() {
                $(this).removeClass("currentPartner");
            });
            $(".partner-item").eq(this.owl.currentItem).addClass("currentPartner");
        }
    });

    $(".triple-prev-partner").click(function() {
        partner.trigger('owl.prev');
        return false;
    });

    $(".triple-next-partner").click(function() {
        partner.trigger('owl.next');
        return false;
    });

//    partner.data('owlCarousel').jumpTo(2);


    var card = $(".card-type-carousel").owlCarousel({
        items: 1,
        navigation: false,
        slideSpeed: 300,
        singleItem: true,
        responsive: false,
        afterAction: function(elem) {}
    });


    $("body").on("click", ".js-item-33", function(e) {
        card.data('owlCarousel').jumpTo(2);
        e.stopPropagation();
        return false;
    });

    $("body").on("click", ".js-item-22", function(e) {
        card.data('owlCarousel').jumpTo(1);
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    $("body").on("click", ".js-item-11", function(e) {
        card.data('owlCarousel').jumpTo(0);
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    $("body").on("click", ".sub-menu-item-link", function() {
        $(this).each(function() {
            $(this).removeClass("current")
        });
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    var to;

    // login-btn-dd
    $("body").on("mouseenter", ".login-drop-down", function() {
        clearTimeout(to);
        $(".def-btn.login-btn-dd").addClass("b-hover");
        $(this).find(".dd-login").css({
            display: "block"
        });
        $(this).find(".dd-login").stop().animate({
            opacity: 1
        }, 300);
    });

    $("body").on("mouseleave", ".login-drop-down", function() {
        to = setTimeout(function() {
            $(".def-btn.login-btn-dd").removeClass("b-hover");
            $(".dd-login").stop().animate({
                opacity: 0
            }, 300, function() {
                $(this).css({
                    display: "none"
                });
            });
        }, 650);
    });


    $("body").on("click", ".login-drop-down", function() {
        e.stopPropagation();
        e.preventDefault();
        return false;
    });


    $("body").click(function() {
        $(".def-btn.login-btn-dd").removeClass("b-hover");
        $(".dd-login").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
                display: "none"
            });
        });
    });


});
