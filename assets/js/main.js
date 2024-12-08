(function ($) {
    ('use strict');

    /*----------------------------------------*/
    /*  Check if element exists
/*----------------------------------------*/
    $.fn.elExists = function () {
        return this.length > 0;
    };

    /*--
        Custom script to call Background
        Image from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });

    /*----------------------------------------*/
    /*  WOW
/*----------------------------------------*/
    new WOW().init();

    /*---------------------------------------
		Header Sticky
---------------------------------*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.header-sticky');
    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass('is-active');
            } else {
                sticky.addClass('is-active');
            }
        }
    });

    /*----------------------------------------*/
    /*  OnePage Nav
/*----------------------------------------*/

    var top_offset = $('.onepage-nav').height() - 60;
    $('.onepage-nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    var top_offset_mobile = $('.onepage-offcanvas-nav').height() - 60;
    $('.onepage-offcanvas-nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset_mobile,
        end: function () {
            var header = $('.header');
            var offcanvasModal = $('#offcanvasWithBothOptions');
            offcanvasModal.removeClass('show');
            offcanvasModal.css({ visibility: 'hidden' });
            header[0].lastChild.classList.remove('show');
        },
    });

    /*---------------------------------------
		Feature Slider
---------------------------------*/
    if ($('.feature-slider').elExists()) {
        var mySwiper = new Swiper('.feature-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    centeredSlides: true,
                },
            },
        });
    }

    /*---------------------------------------
		Feature Slider Two
---------------------------------*/
    if ($('.feature-slider-2').elExists()) {
        var mySwiper = new Swiper('.feature-slider-2', {
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                576: {
                    slidesPerView: 1.2,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                992: {
                    slidesPerView: 2.2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
            },
        });
    }

    /*---------------------------------------
		Partner Slider
---------------------------------*/
    if ($('.partner-slider').elExists()) {
        var mySwiper = new Swiper('.partner-slider', {
            loop: true,
            navigation: {
                nextEl: '.partner-button-next',
                prevEl: '.partner-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
            },
        });
    }

    /*---------------------------------------
		Partner Slider Two
---------------------------------*/
    if ($('.partner-slider-2').elExists()) {
        var mySwiper = new Swiper('.partner-slider-2', {
            loop: true,
            navigation: {
                nextEl: '.partner-button-next',
                prevEl: '.partner-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
            },
        });
    }

    /*---------------------------------------
		Partner Slider Three
---------------------------------*/
    if ($('.partner-slider-3').elExists()) {
        var mySwiper = new Swiper('.partner-slider-3', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
            },
        });
    }

    /*---------------------------------------
		Partner Slider Four
---------------------------------*/
    if ($('.partner-slider-4').elExists()) {
        var mySwiper = new Swiper('.partner-slider-4', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
            },
        });
    }

    /*---------------------------------------
		Testimonial Slider
---------------------------------*/
    if ($('.testimonial-slider').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider', {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1600: {
                    slidesPerView: 3,
                },
            },
        });
    }

    /*---------------------------------------
		Testimonial Slider Two
---------------------------------*/
    if ($('.testimonial-slider-2').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider-2', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            breakpoints: {
                992: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 50,
                },
            },
        });
    }

    /*---------------------------------------
		Testimonial Slider Three
---------------------------------*/
    if ($('.testimonial-slider-3').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider-3', {
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1600: {
                    slidesPerView: 3,
                },
            },
        });
    }

    /*---------------------------------------
		Testimonial Slider Four
---------------------------------*/
    if ($('.testimonial-slider-4').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider-4', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 750,
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
        });
    }

    /*---------------------------------------
		Testimonial Slider Four
---------------------------------*/
    if ($('.testimonial-slider-5').elExists()) {
        var mySwiper = new Swiper('.testimonial-slider-5', {
            loop: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            },
        });
    }

    /*---------------------------------------
		Screen Slider
---------------------------------*/
    if ($('.screen-slider').elExists()) {
        var mySwiper = new Swiper('.screen-slider', {
            loop: true,
            navigation: {
                nextEl: '.screen-button-next',
                prevEl: '.screen-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    /*---------------------------------------
		Post List Slider
---------------------------------*/
    if ($('.post-list-slider').elExists()) {
        var mySwiper = new Swiper('.post-list-slider', {
            loop: false,
            simulateTouch: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 5,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 25,
                },
            },
        });
    }

    /*---------------------------------------
		Blog Slider
---------------------------------*/
    if ($('.blog-slider').elExists()) {
        var mySwiper = new Swiper('.blog-slider', {
            loop: true,
            navigation: {
                nextEl: '.blog-button-next',
                prevEl: '.blog-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }

    /*----------------------------------------*/
    /*  HasSub Item
/*----------------------------------------*/
    $('.hassub-item li.hassub a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    /*----------------------------------------*/
    /*  Seeting Buton
/*----------------------------------------*/
    $('.setting-btn').on('click', function (e) {
        e.preventDefault();
        $('.setting-body').slideToggle();
    });

    /*------------------------------------
	    Magnific Popup
	    ------------------------------------- */
    if ($('.popup-vimeo').elExists()) {
        $('.popup-vimeo').magnificPopup({
            type: 'iframe',
            disableOn: function () {
                if ($(window).width() < 600) {
                    return false;
                }
                return true;
            },
        });
    }

    /*------------------------------------
	    Extbot Parallax
	    ------------------------------------- */
    if ($('.scene').elExists()) {
        $('.scene').each(function () {
            new Parallax($(this)[0]);
        });
    }

    /*----------------------------------------*/
    /*  AOS
/*----------------------------------------*/
    if ($('[data-aos]').length) {
        AOS.init({
            once: true,
        });
    }

    /*--------------------------------
    MailChimp
-------------------------------- */
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        url: 'https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef',
    });
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').addClass('active');
            $('.mailchimp-success')
                .html('' + resp.msg)
                .fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error')
                .html('' + resp.msg)
                .fadeIn(900);
        }
    }

    /*--------------------------------
    Ajax Contact Form
-------------------------------- */
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-messege');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData,
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text(
                            'Oops! An error occured and your message could not be sent.'
                        );
                    }
                });
        });
    });

    /*--------------------------------
    Scroll To Top
-------------------------------- */
    function scrollToTop() {
        var $scrollUp = $('.scroll-to-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = topPos;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate(
                {
                    scrollTop: 0,
                },
                600
            );
            evt.preventDefault();
        });
    }

    scrollToTop();
})(jQuery);

// Toggle Button Function to Show Navigation Bar Mobile
function showNavbar() {
    //input
    var checkBox = document.getElementById('show-nav')
    //navigation bar
    var content = document.getElementById('navbar')

    if(checkBox.checked == true){
        content.style.display = 'block'
        content.style.top = '0'
        content.style.animation = 'nav-display 0.3s'
    }else{
        content.style.animation = 'nav-nodisplay 0.2s forwards'
    }
}