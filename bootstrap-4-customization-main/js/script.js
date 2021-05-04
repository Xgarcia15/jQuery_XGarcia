$(document).ready(function() {

    console.log('the whole page is loaded');


//function will display three buttons on click.
    $('#show-me').click(function() {
        $('#new-buttons').addClass('show');
    })

    //When you click on the 'Get Started' button, the blue block and white text will hide.
    $('#get-started').click(function() {
        $('#blue-block').hide('bg-primary');
        $('#blue-content').hide('text-white');
    })

    //Function on click of button will fade out after 3 seconds
    setTimeout(function(){

        $('#shop-button').fadeIn(500);
    },3000);

})