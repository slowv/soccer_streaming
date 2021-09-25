$(document).ready(() => {
    let offChat = false;
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

    $(window).scroll(function() {
        const videoBox = $("#box-video");
        const videoRoot = $('#video-root');
        const window_offset = videoBox.offset().top - $(window).scrollTop();
       if (window_offset <= 0) {
           videoRoot.addClass('mini');
       } else {
           videoRoot.removeClass('mini');
       }
    });
});
