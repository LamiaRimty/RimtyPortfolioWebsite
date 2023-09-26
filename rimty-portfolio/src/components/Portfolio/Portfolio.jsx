import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container col-xxl-8 px-4 py-5 carousel carousel-dark slide">
        <h2 className="section-title">Portfolio</h2>
        <span className="section-subtitle">Most Recent work</span>

        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="images/memoir.png"
                className="portfolio-img d-block w-100"
                alt="memoir"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/LamiaRimty/Memoir">
                  <h5 className="carosal-title">Memoir</h5>
                </a>
                <p className="carosal-info">My personal Blog Website</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="2000">
              <img
                src="images/minder.png"
                className=" portfolio-img d-block w-100"
                alt="minder"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://github.com/LamiaRimty/Minder">
                  <h5 className="carosal-title">Minder</h5>
                </a>
                <p className="carosal-info">My little To-Do-list App</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/rimty cakery.png"
                className=" portfolio-img d-block w-100"
                alt="rimty cakery"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="https://drive.google.com/drive/u/0/home">
                  <h5 className="carosal-title">Rimty Cakery</h5>
                </a>
                <p className="carosal-info">
                  Bakery Website designed on Adobe Xd{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="b-example-divider"></div>
    </section>
  );
}
export default Portfolio;
