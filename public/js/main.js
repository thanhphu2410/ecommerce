"use strict";

(function($) {
    /*------------------
        Preloaderq
    --------------------*/
    function readURL(input) {
        $(".image-review").remove();
        for (let index = 0; index < input.files.length; index++) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $(".modal-body").append(
                    '<img class="image-review mr-2" src="' +
                        e.target.result +
                        '" width="64" height="44" />'
                );
            };

            reader.readAsDataURL(input.files[index]); // convert to base64 string
        }
    }

    $("#imgInp").on("change", function() {
        readURL(this);
    });

    $(window).on("load", function() {
        // $("#summernote").summernote({
        //     placeholder: "Leave your feedback",
        //     tabsize: 2,
        //     height: 80,
        //     toolbar: [
        //         ["style", ["style"]],
        //         ["font", ["bold", "underline"]]
        //         // ["insert", ["picture"]]
        //     ],
        //     callbacks: {
        //         onImageUpload: function(files) {}
        //     }
        // });

        $(".loader").fadeOut();
        $("#preloder")
            .delay(200)
            .fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $(".filter__controls li").on("click", function() {
            $(".filter__controls li").removeClass("active");
            $(this).addClass("active");
        });
        if ($(".product__filter").length > 0) {
            var containerEl = document.querySelector(".product__filter");
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $(".set-bg").each(function() {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
    });

    //Search Switch
    $(".search-switch").on("click", function() {
        $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function() {
        $(".search-model").fadeOut(400, function() {
            $("#search-input").val("");
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: "#mobile-menu-wrap",
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $(".collapse").on("shown.bs.collapse", function() {
        $(this)
            .prev()
            .addClass("active");
    });

    $(".collapse").on("hidden.bs.collapse", function() {
        $(this)
            .prev()
            .removeClass("active");
    });

    //Canvas Menu
    var check = false;
    $(".canvas__open").on("click", function() {
        if (!check) {
            $(".offcanvas-menu-wrapper").addClass("active");
        } else {
            $(".offcanvas-menu-wrapper").removeClass("active");
        }
        check = !check;
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $("#owl-example").owlCarousel({
        loop: true,
        items: 4,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true
    });

    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 1200,
        autoHeight: false,
        autoplayTimeout: 3000,
        autoplay: true
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(
        ".product__color__select label, .shop__sidebar__size label, .product__details__option__size label"
    ).on("click", function() {
        $(
            ".product__color__select label, .shop__sidebar__size label, .product__details__option__size label"
        ).removeClass("active");
        $(this).addClass("active");
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    // /*------------------
    //     CountDown
    // --------------------*/
    // // For demo preview start
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // var yyyy = today.getFullYear();

    // if (mm == 12) {
    //     mm = "01";
    //     yyyy = yyyy + 1;
    // } else {
    //     mm = parseInt(mm) + 1;
    //     mm = String(mm).padStart(2, "0");
    // }
    // var timerdate = mm + "/" + dd + "/" + yyyy;
    // // For demo preview end

    // // Uncomment below and use your date //

    // /* var timerdate = "2020/12/30" */

    // $("#countdown").countdown(timerdate, function(event) {
    //     $(this).html(
    //         event.strftime(
    //             "<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
    //                 "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" +
    //                 "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" +
    //                 "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"
    //         )
    //     );
    // });

    /*------------------
		Magnific
	--------------------*/
    $(".video-popup").magnificPopup({
        type: "iframe"
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $(".pro-qty");
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on("click", ".qtybtn", function() {
        var $button = $(this);
        var oldValue = $button
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button
            .parent()
            .find("input")
            .val(newVal);
    });

    var proQty = $(".pro-qty-2");
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on("click", ".qtybtn", function() {
        var $button = $(this);
        var oldValue = $button
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button
            .parent()
            .find("input")
            .val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $(".cn_num").each(function() {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text()
                },
                {
                    duration: 4000,
                    easing: "swing",
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                }
            );
    });
})(jQuery);
