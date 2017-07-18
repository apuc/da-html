$(document).ready(function(){
    /*single afisha countdown*/
    var date = $('#countdown').attr('data-date');
    
    $('#countdown').countdown({
            date: date,
            format: "on",
            languge: 'ru'
        },
        function () {});
    /*close single afisha countdown*/
});