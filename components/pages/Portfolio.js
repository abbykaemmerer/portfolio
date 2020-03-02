export default (state) => `
<section id="portfolio">
    <h1 class="title">${state.title}</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="${state.img4}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img1}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img2}" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img3}" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <p class="git">view my <a href="https://www.dropbox.com/s/i99crph55wtkiz9/RESUME1.pdf?dl=0">resume</a> and <a href="https://github.com/abbykaemmerer" target="_blank">GitHub</a></p>
        <p><a href="https://abby-kaemmerer-capstone.netlify.com"> 4PAWS</a>
        <br>An eCommerce web application designed to help pet owners find the best products for their pets. It is a state driven, modular single page application with functional components created using JavaScript ES6, HTML 5, CSS 3, JSON, Node.js, npm, and git.
        </p>
        <br>
        <div>
            <p>Since graduating SavvyCoders and working at TDK Technologies, I have wanted to continue learning and growing as a Front-End Developer. I have created these projects, landing pages, and games in order to do so.</p>
            <li>&#8226;<a href="https://thegreatestcolorgameever.netlify.com" target="_blank"> The RGB Game</a></li>
            <li>&#8226;<a href="https://mueseumofcandy.netlify.com" target="_blank"> Museum of Candy</a></li>
            <li>&#8226;<a href="https://catadoption.netlify.com" target="_blank"> Cat Adoption Landing Page</a></li>
            <br>
            Works In Progress:
            <li>&#8226; Transitioning my portfolio to a more responsive application</li>
            <li>&#8226; Bachelorette Invite</li>
            <li>&#8226; Recipe Catalog</li>

        </div>
</section>

`;
