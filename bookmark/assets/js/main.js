$(document).ready(function(){
    // close mobile menu
    $('#close-mb-menu').click(function(){
        $('.mobile-menu').css('left','-100%');
    });
    // open mobile menu
    $('#open-mb-menu').click(function(){
        $('.mobile-menu').css('left','0');
    });

    // tabs
    $('.key-1').click(function(){
        $('.tab-1').show();
        $('.tab-2').hide();
        $('.tab-3').hide();
        $('.key-1').addClass("c_active");
        $('.key-2').removeClass("c_active");
        $('.key-3').removeClass("c_active");
    });
    $('.key-2').click(function(){
        $('.tab-2').show();
        $('.tab-1').hide();
        $('.tab-3').hide();
        $('.key-2').addClass("c_active");
        $('.key-1').removeClass("c_active");
        $('.key-3').removeClass("c_active");
    });
    $('.key-3').click(function(){
        $('.tab-3').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.key-3').addClass("c_active");
        $('.key-1').removeClass("c_active");
        $('.key-2').removeClass("c_active");
    });
});