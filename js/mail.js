$(document).ready(function () {

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            return false;
        }else{
            return true;
        }
    }

    $('#send_mail').on('click', function () {
        var status = '';
        var name = $('.name');
        var email = $('.email');
        var msg = $('.message');

        if (name.val().trim() == '')
            name.addClass('error');
        else
            name.removeClass('error');

        if (!isEmail(email.val().trim()))
            email.addClass('error');
        else
            email.removeClass('error');

        if (msg.val().trim() == '')
            msg.addClass('error');
        else
            msg.removeClass('error');

        if (name.val().trim() != '' && isEmail(email.val().trim()) && msg.val().trim() != '')
            status = 'ok';
        else
            status = 'fail';

        var form = $('body').find('#contact_form');
        if (status == 'ok') {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: {'name' : name.val(), 'email': email.val(), 'message': msg.val()},
                url: 'mail.php',
                success: function (response) {
                    form.find('#msg').text(response.msg).css('visibility', 'visible');
                    if (response.status)
                        form.find('#msg').css('color', 'green');
                    else
                        form.find('#msg').css('color', 'red');
                }
            });
        }
    });


});