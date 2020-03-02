import Header from '.components/Header';

import Main from '.components/Main';

import Footer from '.components/Footer';


const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    'speed': 800
});

$(function scrollNav(){
    // eslint-disable-next-line func-names
    $(document).scroll(function(){
        var $nav = $('#mainNavbar');

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
