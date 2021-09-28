$(document).ready(() => {
    $('.button-navbar').click(() => {
        $('.button-navbar').toggleClass('active');
        $('#mainnav-mobi').toggleClass('d-none');
    });

    setTimeout(() => {
        if ($(window).width() >= 768) {
            $('.nha-cai').css('height', $('#newList').outerHeight())
        }
    }, 100);
})
