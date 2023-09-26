import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div className="container col-xxl-8 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6  home-img animate__animated animate__zoomInDown  animate__delay-1s">
            <img
              src="images/BikerGirl.png"
              // src="https://i.etsystatic.com/8538461/r/il/21a140/1038308502/il_300x300.1038308502_j77d.jpg"
              class="d-block  mx-lg-auto img-fluid"
              alt="biker girl"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
          {/* <div class=" col-10 col-sm-8 col-lg-6 justify-content-center home-img animate__animated animate__slideInLeft animate__delay-1s">
            <img
              id="rimty"
              src="./images/Rimty.jpg"
              class="about-img d-block mx-lg-auto img-fluid"
              alt="Rimty"
              loading="lazy"
            />
          </div> */}
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 home-title animate__animated animate__rollIn">
              Hi, I'm Rimty!
            </h1>
            <h3 className="home-subtitle animate__animated animate__backInRight">
              UI/UX & Frontend Developer
            </h3>
            <p className="home-desc animate__animated animate__backInRight">
              Interested in UI/UX Design & Web Development
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="#contact"
                type="button"
                className="button btn-lg px-4 me-md-2 animate__animated animate__backInUp animate__delay-1s"
              >
                Contact Me
                <i className="uil uil-message button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
    </section>
  );
}
export default Home;
