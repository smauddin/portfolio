// $('#home').hide();
$('#technical-skill').hide();
$('#homeToggle').on('click', () => {
    $('#home').show();
    $('#education').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});

$('#technical-skill-toggle').on('click', () => {
    $('#technical-skill').show()
    $('#home').hide();
    $('#education').hide();
    $('#portfolio').hide();
    $('#contact').hide();
})

$('#education').hide();
$('#educationToggle').on('click', () => {
    $('#education').show();
    $('#technical-skill').hide();
    $('#home').hide();
    $('#portfolio').hide();
    $('#contact').hide();
});


$('#portfolio').hide();
$('#portfolioToggle').on('click', () => {
    $('#portfolio').show();
    $('#technical-skill').hide();
    $('#home').hide();
    $('#education').hide();
    $('#contact').hide();
});

$('#contact').hide();
$('#contactToggle').on('click', () => {
    $('#contact').show();
    $('#technical-skill').hide();
    $('#home').hide();
    $('#education').hide();
    $('#portfolio').hide();
});
