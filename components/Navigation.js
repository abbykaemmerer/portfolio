export default () => `
<nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
<button id="toggler" class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navLinks">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a href="#home" class="nav-link">HOME</a>
        </li>
        <li class="nav-item">
            <a href="#about" class="nav-link">ABOUT</a>
        </li>
        <!-- <li class="nav-item">
            <a href="#experience" class="nav-link">EXPERIENCE</a>
        </li> -->
        <li class="nav-item">
            <a href="#portfolio" class="nav-link">PORTFOLIO</a>
        </li>
        <li class="nav-item">
            <a href="#contact" class="nav-link">CONTACT</a>
        </li>

    </ul>
</div>
</nav>

`;
