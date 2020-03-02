import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from './node_modules/lodash';

import Navigo from './node_modules/navigo';
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

    router.updatePageLinks();
}

render(states.Home);

router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();

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
