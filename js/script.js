$(function () {
    $('.portfolio_menu button').click(function () {
        var get_id = this.id;
        var get_current = $('.portfolio_image .' + get_id);

        $('.post_image').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#show_all').click(function () {
        $('.post_image').show(500);
    });
});


// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         items: 6
//     });
// });

// if($(window).width() < 420) {
//      $(".owl-carousel").owlCarousel({
//         items: 3
//     });
// };

$(document).ready(function () {
    $('#slider').owlCarousel({
        items: 6,
        nav: true,
        dots: true,
        margin: 10,
        responsive: {
            0: { items: 1 }, // Адаптивность, 
            300: { items: 3 }, // Адаптивность, ширина от 0 - до 300px - 1 элемент в ряду
            600: { items: 6 }, // Адаптивность, ширина от 0 - до 600px - 3 элементов в ряду
        }
    });
});








