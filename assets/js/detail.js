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
});
