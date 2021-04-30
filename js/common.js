$(document).ready(function () {


    $(window).load(function () {
        $('.loader').delay('1000').fadeOut();
    });



    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });




    $('.mgnb_wrap').hide();

    $('.m_menu').click(function () {
        $('.mgnb_wrap').fadeIn();
    });

    $('.close').click(function () {
        $('.mgnb_wrap').fadeOut();
    });




    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,

                }
    }
  ]
    });




    $(".more_l").slice(0, 0).show();

    $(".loadMore").on("click", function () {
        $(".more_l:hidden").slice(0, 2).show(); 

        if ($(".more_l:hidden").length == 0) {
            $(".loadMore").fadeOut();
        }
    });

    
    
    
});
