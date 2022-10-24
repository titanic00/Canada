// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import jQuery from "jquery";
import 'slick-carousel';

window.$ = window.jQuery = jQuery;

$(() => {

    //

    $('.header__search').on('click', () => {
        if ($(window).width() < 768) {
            $('.header__link').toggleClass('header__link--disabled');
        };
        if ($(window).width() < 890) {
            $('.header__inner').addClass('header__inner--block');
        };
        $('.header__search--form').on('click', () => {
            if ($('.header__inner').hasClass('header__inner--block'))
                $('.header__inner').removeClass('header__inner--block');
        });
        $('.header__form').toggleClass('header__form--disabled');
        $('.header__nav').toggleClass('header__nav--disabled');
        $('.header__search').toggleClass('header__search--disabled');
        $('.header-icon__account').toggleClass('header-icon__account--disabled');
        $('.header__burger').toggleClass('header__burger--disabled');
        $('.header__search--form').removeClass('header__search--disabled');
    });

    $('.header__form-close').on('click', () => {
        $('.header__form').toggleClass('header__form--disabled');
        $('.header__nav').toggleClass('header__nav--disabled');
        $('.header__search').toggleClass('header__search--disabled');
        $('.header-icon__account').toggleClass('header-icon__account--disabled');
        $('.header__burger').toggleClass('header__burger--disabled');
        $('.header__inner').removeClass('header__inner--block');
        if ($('.header__link').hasClass('header__link--disabled')) {
            $('.header__link').toggleClass('header__link--disabled');
        };
        if ($('.header__inner').hasClass('header__inner--block')) {
            $('.header__inner').removeClass('header__inner--block');
        };
    });

    //

    $('.header-icon__account').on('click', () => {
        $('.header__menu-item--767px').css('display', 'flex');
        $('.header__inner').addClass('header__inner--disabled');
        $('.unfold-account').addClass('unfold--open');
    });

    $('.header__menu-close').on('click', () => {
        $('.header__inner').removeClass('header__inner--disabled');
        $('.header__menu-item--767px').css('display', 'none');
        $('.unfold-account').removeClass('unfold--open');
    });

    //

    $('.header__account').on('click', () => {
        if ($(event.target).hasClass('header__account--767px'))
            return;
        if (!($('.header__language--unfold').hasClass('header__menu--disabled'))) {
            $('.header__language--unfold').toggleClass('header__menu--disabled');
        }
        else if (!($('.header__weather--unfold').hasClass('header__menu--disabled'))) {
            $('.header__weather--unfold').toggleClass('header__menu--disabled');
        }

        if ($('.header__language').hasClass('header__language--focused')) {
            $('.header__language').toggleClass('header__language--focused');
        }
        else if ($('.header__weather').hasClass('header__weather--focused')) {
            $('.header__weather').toggleClass('header__weather--focused');
        }

        $('.header__account--unfold').toggleClass('header__menu--disabled');
        $('.header__account').toggleClass('header__account--focused');
    });

    $('.header__language').on('click', () => {
        if (!($('.header__account--unfold').hasClass('header__menu--disabled'))) {
            $('.header__account--unfold').toggleClass('header__menu--disabled');
        }
        else if (!($('.header__weather--unfold').hasClass('header__menu--disabled'))) {
            $('.header__weather--unfold').toggleClass('header__menu--disabled');
        }

        if ($('.header__account').hasClass('header__account--focused')) {
            $('.header__account').toggleClass('header__account--focused');
        }
        else if ($('.header__weather').hasClass('header__weather--focused')) {
            $('.header__weather').toggleClass('header__weather--focused');
        }

        $('.header__language--unfold').toggleClass('header__menu--disabled');
        $('.header__language').toggleClass('header__language--focused');
    });

    $('.header__weather').on('click', () => {
        if (!($('.header__account--unfold').hasClass('header__menu--disabled'))) {
            $('.header__account--unfold').toggleClass('header__menu--disabled');
        }
        else if (!($('.header__language--unfold').hasClass('header__menu--disabled'))) {
            $('.header__language--unfold').toggleClass('header__menu--disabled');
        }

        if ($('.header__language').hasClass('header__language--focused')) {
            $('.header__language').toggleClass('header__language--focused');
        }
        else if ($('.header__account').hasClass('header__account--focused')) {
            $('.header__account').toggleClass('header__account--focused');
        }

        $('.header__weather--unfold').toggleClass('header__menu--disabled');
        $('.header__weather').toggleClass('header__weather--focused');
    });

    $(document).on('click', () => {
        if (event.target.classList[0] !== 'header__account' && event.target.classList[0] !== 'header__language' && event.target.classList[0] !== 'header__weather') {
            $('.header__menu--unfold').addClass('header__menu--disabled');
            $('.header__weather').removeClass('header__weather--focused');
            $('.header__language').removeClass('header__language--focused');
            $('.header__account').removeClass('header__account--focused');
        }
    })

    // 
    $('.materials-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 0,
        responsive: [
            {
                breakpoint: 1217,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 918,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.materials-slider--articles').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        rows: 1
        //    prevArrow: '<button type="button" class="slick-prev"><img src=\'../../img/scrollbar-arrow-left.svg\' alt=\'arrow left\'></button>',
        //    nextArrow: '<button type="button" class="slick-next"><img src=\'../../img/scrollbar-arrow-right.svg\' alt=\'arrow right\'></button>'
    });

    //----------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------------//

    // тут сделал так, что отображается только 7 цифр
    /*
        $('.materials-slider--articles').children('.slick-dots').addClass('slick-dots--articles');
        $('.slick-dots--articles li').css('display', 'none');
    
        let penultimatePage = $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').text();
    
        $('.slick-dots--articles li:first-child, .slick-dots--articles li:last-child, .slick-dots--articles li:nth-child(1), .slick-dots--articles li:nth-child(2), .slick-dots--articles li:nth-child(3), .slick-dots--articles li:nth-child(4), .slick-dots--articles li:nth-child(5)').css('display', 'block');
    
        // если у нас больше 7 страниц, то подрубаем дотсы справа
        if ($('.slick-dots--articles > li').children().length <= 7) {
            $('.slick-dots--articles li:nth-child(6)').css('display', 'block');
        } else if ($('.slick-dots--articles > li').children().length > 7) {
            $('.slick-dots--articles li:last-child').prev('li').css('display', 'block');
            $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').html('...');
            $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').prop('disabled', true);
        }
    
        // если кликаем 3+ кнопки, то второй кнопкой будут точки
        $('.slick-dots--articles li').on('click', () => {
            if ($('.slick-dots--articles li:nth-child(3)').hasClass('slick-active') || $('.slick-dots--articles li:nth-child(4)').hasClass('slick-active') || $('.slick-dots--articles li:nth-child(5)').hasClass('slick-active')) {
                $('.slick-dots--articles li:nth-child(2) button').html('...');
                $('.slick-dots--articles li:nth-child(2) button').prop('disabled', true);
            }
        });
    
        // дотсы для второй кнопки
    
        let secondPage = $('.slick-dots--articles li:first-child button').parent().next('li').children('button').text();
    
        $('.materials-slider--articles .slick-arrow').on('click', () => {
            if ($('.slick-dots--articles li:nth-child(3)').hasClass('slick-active') || $('.slick-dots--articles li:nth-child(4)').hasClass('slick-active') || $('.slick-dots--articles li:nth-child(5)').hasClass('slick-active')) {
                $('.slick-dots--articles li:nth-child(2) button').html('...');
                $('.slick-dots--articles li:nth-child(2) button').prop('disabled', true);
            }
        });
    
        // при кликах на стрелки
    
        let currentPage = 1;
        // для проверки, на последней ли мы странице
        const lastPage = parseInt($('.slick-dots--articles li:last-child button').text());
        const firstPage = parseInt($('.slick-dots--articles li:first-child button').text());
    
        $('.materials-slider--articles .slick-prev').css('display', 'none');
    
        // вариант с кликом вправо
        $('.materials-slider--articles .slick-next').on('click', () => {
            $('.materials-slider--articles .slick-prev').css('display', 'block');
            // текущая страница, нужна для того, чтобы отображать кнопки новых страниц
            currentPage = parseInt($('.materials-slider--articles li.slick-active').children('button').text());
            // если на последней странице, то убираем стрелку
            if (currentPage === lastPage) {
                $('.materials-slider--articles .slick-next').css('display', 'none');
            }
            if ($('.slick-dots--articles li.slick-active').css('display') === 'none') {
                // убираем старые кнопки
                $('.slick-dots--articles li:nth-child(' + (currentPage - 3) + ')').css('display', 'none');
                $('.slick-dots--articles li:nth-child(' + (currentPage - 1) + ')').css('display', 'none');
                $('.slick-dots--articles li:nth-child(' + (currentPage - 2) + ')').css('display', 'none');
                // добавляем новые кнопки
                $('.slick-dots--articles li:nth-child(' + currentPage + ')').css('display', 'block');
                $('.slick-dots--articles li:nth-child(' + (currentPage + 1) + ')').css('display', 'block');
                $('.slick-dots--articles li:nth-child(' + (currentPage + 2) + ')').css('display', 'block');
                // убираем дотсы
                if ($('.slick-dots--articles li:last-child button').parent().prev('li').prev('li').css('display') === 'block') {
                    $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').html(penultimatePage);
                    $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').prop('disabled', false);
                }
            }
        });
    
        // вариант с кликом влево
    
        $('.materials-slider--articles .slick-prev').on('click', () => {
            $('.materials-slider--articles .slick-next').css('display', 'block');
            // текущая страница, нужна для того, чтобы отображать кнопки новых страниц
            currentPage = parseInt($('.materials-slider--articles li.slick-active').children('button').text());
            // если на последней странице, то убираем стрелку
            if (currentPage === firstPage) {
                $('.materials-slider--articles .slick-prev').css('display', 'none');
            }
            // убираем дотсы
            if ($('.slick-dots--articles li:first-child button').parent().next('li').next('li').css('display') === 'block') {
                $('.slick-dots--articles li:first-child button').parent().next('li').children('button').html(secondPage);
                $('.slick-dots--articles li:first-child button').parent().next('li').children('button').prop('disabled', false);
            }
            if ($('.slick-dots--articles li.slick-active').css('display') === 'none') {
                // убираем старые кнопки
                $('.slick-dots--articles li:nth-child(' + (currentPage + 3) + ')').css('display', 'none');
                $('.slick-dots--articles li:nth-child(' + (currentPage + 1) + ')').css('display', 'none');
                $('.slick-dots--articles li:nth-child(' + (currentPage + 2) + ')').css('display', 'none');
                // добавляем новые кнопки
                $('.slick-dots--articles li:nth-child(' + currentPage + ')').css('display', 'block');
                $('.slick-dots--articles li:nth-child(' + (currentPage - 1) + ')').css('display', 'block');
                $('.slick-dots--articles li:nth-child(' + (currentPage - 2) + ')').css('display', 'block');
                $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').html('...');
                $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').prop('disabled', true);
            }
        });
    
        // кликаем сразу на последнюю кнопку
    
        $('.slick-dots--articles li:last-child').on('click', () => {
            $('.materials-slider--articles .slick-prev').css('display', 'block');
            // текущая страница, нужна для того, чтобы отображать кнопки новых страниц
            currentPage = parseInt($('.materials-slider--articles li.slick-active').children('button').text());
            console.log(currentPage)
            // если на последней странице, то убираем стрелку
            if (currentPage === lastPage) {
                $('.materials-slider--articles .slick-next').css('display', 'none');
            }
            $('.slick-dots--articles li').css('display', 'none');
            $('.slick-dots--articles li:first-child').css('display', 'block');
            $('.slick-dots--articles li:nth-child(2)').css('display', 'block');
            $('.slick-dots--articles li:nth-child(2) button').html('...');
            $('.slick-dots--articles li:nth-child(2) button').prop('disabled', true);
            $('.slick-dots--articles li:last-child').css('display', 'block');
            $('.slick-dots--articles li:last-child button').parent().prev('li').css('display', 'block');
            $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').html(penultimatePage);
            $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').prop('disabled', false);
            //
            $('.slick-dots--articles li:nth-child(' + (currentPage - 4) + ')').css('display', 'block');
            $('.slick-dots--articles li:nth-child(' + (currentPage - 2) + ')').css('display', 'block');
            $('.slick-dots--articles li:nth-child(' + (currentPage - 3) + ')').css('display', 'block');
            // добавляем новые кнопки
    
        }
        )
    
        // кликаем на первую кнопку
    
        $('.materials-slider--articles li:first-child').on('click', () => {
            $('.materials-slider--articles .slick-next').css('display', 'block');
            // текущая страница, нужна для того, чтобы отображать кнопки новых страниц
            currentPage = parseInt($('.materials-slider--articles li.slick-active').children('button').text());
            // если на последней странице, то убираем стрелку
            if (currentPage === firstPage) {
                $('.materials-slider--articles .slick-prev').css('display', 'none');
            }
            $('.slick-dots--articles li').css('display', 'none');
            $('.slick-dots--articles li:first-child').css('display', 'block');
            $('.slick-dots--articles li:nth-child(2)').css('display', 'block');
            $('.slick-dots--articles li:first-child button').parent().next('li').children('button').html(secondPage);
            $('.slick-dots--articles li:first-child button').parent().next('li').children('button').prop('disabled', false);
            $('.slick-dots--articles li:last-child').css('display', 'block');
            $('.slick-dots--articles li:last-child button').parent().prev('li').css('display', 'block');
            $('.slick-dots--articles li:last-child button').parent().prev('li').children('button').html('...');
            $('.slick-dots--articles li:first-child button').parent().prev('li').children('button').prop('disabled', true);
            //
            $('.slick-dots--articles li:nth-child(' + (currentPage + 4) + ')').css('display', 'block');
            $('.slick-dots--articles li:nth-child(' + (currentPage + 2) + ')').css('display', 'block');
            $('.slick-dots--articles li:nth-child(' + (currentPage + 3) + ')').css('display', 'block');
        });
    */
    //----------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------------//


    $('.articlepage__comments-btn').on('click', () => {
        $('.articlepage__comments-btn').attr("disabled", "disabled");
        $('.articlepage__form--newcomment').toggleClass('articlepage__form--disabled');
    });

    $(document).on('submit', '.articlepage__form--newcomment', () => {
        $('.articlepage__form--newcomment').toggleClass('articlepage__form--disabled');
        $('.articlepage__comments-btn').removeAttr("disabled");
    });

    if ($(window).width() < 1217) {
        if ($('.login').hasClass('login--membership')) {
            return;
        }
        $('.login').toggleClass('login--membership');
    };

    $('.header__burger').on('click', () => {
        $('.header__burger').toggleClass('header__burger--cross');
        $('.unfold-burger').toggleClass('unfold--open');
        $('.header__search').toggleClass('header__search--disabled');
        $('.header__profile').toggleClass('header__search--disabled');
        $('.header__link').toggleClass('header__link--disabled');
    });

    let currentLanguage = 'Русский';
    let currentCity = 'Торонто';

    $('.header__burger-dropdown--language').on('click', () => {
        $('.header__burger-dropdown__list--language').toggleClass('header__burger-dropdown__list--disabled');
        $('.header__burger-dropdown__list-item--language').on('click', () => {
            currentLanguage = event.target.innerHTML;
            $('.header__burger-language--selected').html(currentLanguage);
            $('.header__burger-dropdown__list--language').addClass('header__burger-dropdown__list--disabled');
        });
    });

    $('.header__burger-dropdown--weather').on('click', () => {
        $('.header__burger-dropdown__list--weather').toggleClass('header__burger-dropdown__list--disabled');
        $('.header__burger-dropdown__list-item--weather').on('click', () => {
            currentCity = event.target.innerHTML;
            $('.header__burger-weather--selected').html(currentCity);
            $('.header__burger-dropdown__list--weather').addClass('header__burger-dropdown__list--disabled');
        });
    });

    //----------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------------//

    if ($(window).width() < 450) {
        $('.aside__list-item').toggleClass('aside__list-item--hover');
    };
});