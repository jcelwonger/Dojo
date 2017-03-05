$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        var firstName = $(this).find('input[name="first_name"]').val();
        var lastName = $(this).find('input[name="last_name"]').val();
        var emailAddress = $(this).find('input[name="email_address"]').val();
        var phoneNum = $(this).find('input[name="phone_num"]').val();
        var newUser = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + emailAddress + "</td><td>" + phoneNum + "</td></tr>";
        $('table tbody').append(newUser);
        $('form')[0].reset();
    });
});
