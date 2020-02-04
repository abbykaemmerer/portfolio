

// $('.nav a').on('click', function(e){
//     if(this.hash !== ''{
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//             }, 
//             800
//         );
//     }
// });

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});

$(function scrollNav(){
    // eslint-disable-next-line func-names
    $(document).scroll(function (){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});