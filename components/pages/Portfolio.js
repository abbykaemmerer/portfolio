export default (state) => `
<section id="portfolio">
    <h1 class="title">${state.title}</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="${state.img5}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img4}" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img2}" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img3}" alt="Fourth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${state.img1}" alt="Fifth slide">
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
        <p class="git">view my
            <a href="https://www.dropbox.com/s/v6572urxzmterig/RESUME2021.pdf?dl=0" target="_blank">resume</a>
            and
            <a href="https://github.com/abbykaemmerer" target="_blank">GitHub</a>
        </p>
        <div>
            <p>Since graduating SavvyCoders and while working at TDK Technologies, I have wanted to continue learning and growing as a developer. I have created these projects, landing pages, and games in order to do so.</p>
        </div>
        <br>
        <div class="work">
            <li>&#8226;<a href="https://ocm-fict.netlify.app/" target="_blank"> Outdoor Color Magic</a></li>
            <p>
            A mobile responsive application promoting a fictional landscape architecture company, their services, and how to hire them.
            </p>
            <li>&#8226;<a href="https://abby-kaemmerer-capstone.netlify.com" target="_blank"> 4PAWS</a></li>
                <p>
                An eCommerce web application designed to help pet owners find the best products for their pets. It is a state driven, modular single page application with functional components created using JavaScript ES6, HTML 5, CSS 3, JSON, Node.js, npm, and git.
                <br><br>
                4PAWS was my capstone project built at the end of my coding bootcamp. Since it was my first personal project, it holds a special place in my heart.
                </p>
            <li>&#8226;<a href="https://thegreatestcolorgameever.netlify.com" target="_blank"> The RGB Game</a></li>
            <li>&#8226;<a href="https://mueseumofcandy.netlify.com" target="_blank"> Museum of Candy</a></li>
            <li>&#8226;<a href="https://catadoption.netlify.com" target="_blank"> Cat Adoption Landing Page</a></li>
            <br>
            Works In Progress:
            <li>&#8226; Smoothie Generator</li>
            <li>&#8226; Bachelorette Invite</li>
            <li>&#8226; Recipe Catalog</li>
        </div>
</section>

`;
