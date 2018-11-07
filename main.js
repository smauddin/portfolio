// $('#home').hide();
$('#homeToggle').on('click', () => {
    $('#home').show();
    $('#education').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});

$('#education').hide();
$('#educationToggle').on('click', () => {
    $('#education').show();
    $('#home').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});


$('#portfolio').hide();
$('#portfolioToggle').on('click', () => {
    $('#portfolio').show();
    $('#home').hide();
    $('#education').hide();
    $('#contact').hide();
});

$('#contact').hide();
$('#contactToggle').on('click', () => {
    $('#contact').show();
    $('#home').hide();
    $('#education').hide();
    $('#portfolio').hide();
});
