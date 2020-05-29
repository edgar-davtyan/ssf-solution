$(document).ready(function () {
    $('.send').on('click', function () {
        var status = '';
        var name = $('.name');
        var email = $('.email');
        var msg = $('.message');
        if (name.val() == '')
            name.addClass('error');
        else
            name.removeClass('error');
        if (email.val() == '')
            email.addClass('error');
        else
            email.removeClass('error');
        if (msg.val() == '')
            msg.addClass('error');
        else
            msg.removeClass('error');

        if (name.val() != '' && email.val() != '' && msg.val() != '')
            status = 'ok';
        else
            status = 'fail';

        if (status == 'ok') {
            $.ajax({
                method: 'post',
                data: {'test' : 1},
                url: 'mail.php',
                success: function (response) {
                    alert(response);
                }
            });
        }
    });


});