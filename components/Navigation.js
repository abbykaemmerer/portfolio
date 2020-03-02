function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `
<nav>
<ul class="nav-menu">
<li>
${buildNavHTML(state.links.primary)}
</li>
</ul>
</nav>`;
