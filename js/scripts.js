
$(document).ready(function () {
    // Navigation Menu
    $('#burgerCheckbox').change(function () {
        if ($(this).prop('checked')) {
            $('.navigation-menu').addClass('checked');
        } else {
            $('.navigation-menu').removeClass('checked');
        }
    });
});