import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

import * as states from './store';

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Footer(state)}
    `;
}

render(states.Home);

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
