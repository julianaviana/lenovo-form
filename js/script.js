$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });
    $('.registration-form input[type="number"]').on('focus', function () {
            $(this).removeClass('input-error');
    });

    $('.registration-form select#sel').on('focus', function () {
        $(this).removeClass('input-error');
});


    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"],input[type="email"],input[type="number"]').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // submit

    $('.registration-form .btn-submit').on('click', function () {
        $("#sel, #company, #reason, #states").each(function () {
            if ($(this).val() == "") {
                   $(this).addClass('input-error');
                   next_step = false;
               } else {
                    $(this).removeClass('input-error');
               }
           });
          
       });
   
});

    