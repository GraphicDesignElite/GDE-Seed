
(function($) {          
    $(document).ready(function(){   
        $('.navbar-toggler').click(function(){
            $(this).toggleClass('open');
        });

        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) {
                $('#main-navigation').addClass('scrolled');
            }else {
                $('#main-navigation').removeClass('scrolled');
            }

            if ($(this).scrollTop() > 300) {
                $('#main-navigation').addClass('show');
            } else {
                $('#main-navigation').removeClass('show');
            }
        });
        
    });
})(jQuery);
