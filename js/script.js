$(document).ready(function(){
    $('.courseicon').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );

    $('.courseicon').click(function(){
        $('.modalDialog').css('opacity', 1);
        $('.modalDialog').css('pointer-events', 'auto');
    });

    $('.close').click(function(){
        $('.modalDialog').css('opacity', 0);
        $('.modalDialog').css('pointer-events', 'none');
    });
    
});