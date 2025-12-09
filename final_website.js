/* Elizabeth Moniz | CS 463 Final Project | 9 December 2025 */

/* NAV BAR MENU ELEMENTS */
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

/* CONTACT PAGE FORM */
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    document.getElementById("success").style.display = "block";

    document.getElementById("name").reset();
    document.getElementById("email").reset();
    document.getElementById("phone").reset();
    document.getElementById("message").reset();
});



/* BOOTSTRAP */
/* for the image carousel to prevent it from changing the whole sites styles */
const carousel_wrapper = document.getElementById('carousel-wrapper');
const carousel_shadow = carousel_wrapper.attachShadow({mode: `open`});
carousel_shadow.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <style>
        .carousel-block {
            height: 900px;
        }
        .carousel-wrapper {
            background-color: var(--lightest-green);
            border: 7px groove var(--light-green);
            width: 25em;
            height: auto;
            max-width: 1000px;
            max-height: 1500px;
            margin: 0 auto;
        }
        .carousel-item img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
        }
        .carousel-caption {
            position: static;
            text-align: center;
            margin-top: 1rem;
            margin-bottom: 2rem;
            margin-left: 2em;
            margin-right: 2em;
            color: var(--brown);
        }
        h5 {
            font-size: 1em;
        }
        p1 {
            font-size: 0.7em;
        }
    </style>
    <div class="carousel-block">
        <div class="carousel-wrapper">
            <div id="indicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#indicators" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#indicators" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#indicators" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="media/here in the afterglow.png" alt="digital painting of a truck hauling flowers driving down a colorful city road">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><i>Here In The Afterglow</i></h5>
                        <p1>Digital painting created after feeling inspiration from a short romance novel.</p1>
                    </div>
                </div>
            <div class="carousel-item">
                <img src="media/concrete company.png" alt="digital painting in shades of brown of a town square with buildings and a person's silhouette">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><i>Concrete Company</i></h5>
                        <p1>Digital painting to study texture, brush styles, and background layering.</p1>
                    </div>
            </div>
            <div class="carousel-item">
                <img src="media/memories.png" alt="digital painting of a lamp post at night illuminating a rose with falling petals">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><i>Memories</i></h5>
                        <p1><i>inspired by Memories by Lang Leav</i></p1>
                        <p1>Digital painting with a prompt to recreate a book cover</p1>
                    </div>
            </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#indicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#indicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    </div>
`;

/* automatically having it repeat */
const carouselElement = carousel_shadow.getElementById('indicators')
const carousel = new bootstrap.Carousel(carouselElement, {
    wrap: true
});

/* having there be options to move through it */
carousel_shadow.querySelector('.carousel-control-prev').addEventListener('click', () => carousel.prev());
carousel_shadow.querySelector('.carousel-control-next').addEventListener('click', () => carousel.next());