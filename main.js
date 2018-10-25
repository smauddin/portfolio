$('#home').hide();
$('#homeToggle').on('click', () => {
    $('#home').toggle();
    $('#education').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});

$('#education').hide();
$('#educationToggle').on('click', () => {
    $('#education').toggle();
    $('#home').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});


$('#portfolio').hide();
$('#portfolioToggle').on('click', () => {
    $('#portfolio').toggle();
    $('#home').hide();
    $('#education').hide();
    $('#contact').hide();
});

$('#contact').hide();
$('#contactToggle').on('click', () => {
    $('#contact').toggle();
    $('#home').hide();
    $('#education').hide();
    $('#portfolio').hide();
});
