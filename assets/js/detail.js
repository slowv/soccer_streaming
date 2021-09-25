$(document).ready(() => {
    let offChat = false;
    let isCloseMini = false;

    $('#btn-off-chat').click(() => {
        offChat = !offChat;
        if (offChat) {
            $('.tab-content').addClass('d-none');
            $('#btn-off-chat').html('MỞ KHUNG CHAT')
        } else {
            $('.tab-content').removeClass('d-none');
            $('#btn-off-chat').html('TẮT CHAT')
        }
    });

    $('.close-video').click(() => {
        const videoRoot = $('#video-root');
        videoRoot.removeClass('mini');
        isCloseMini = true;
    });

    $(window).scroll(function() {
        if ($(window).width() >= 768) {
            const videoBox = $("#box-video");
            const videoRoot = $('#video-root');
            const window_offset = videoBox.offset().top - $(window).scrollTop();
            if (window_offset <= 0) {
                if (!isCloseMini) {
                    videoRoot.addClass('mini');
                }
            } else {
                videoRoot.removeClass('mini');
                isCloseMini = false;
            }
        }
    });
});
