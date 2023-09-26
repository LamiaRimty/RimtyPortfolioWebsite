import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container col-xxl-8 px-4 py-5">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>
        <div className="container row flex-lg-row align-items-center g-5 py-5">
          {/* <h2 class="section-title display-5 fw-bold text-body-emphasis" id="">
            About Me
          </h2> */}

          <div className=" col-10 col-sm-8 col-lg-6 justify-content-center about-img animate__animated animate__slideInLeft animate__delay-4s">
            <img
              id="rimty"
              src="./images/Rimty.jpg"
              className="about-img d-block mx-lg-auto img-fluid"
              alt="Rimty"
              loading="lazy"
            />
          </div>
          <div className="col-10 col-sm-8 col-lg-6 detail  animate__animated animate__slideInRight animate__delay-4s">
            <p className="lead mx-auto" id="about-desc">
              Hello! I’m Rimty. I am a <em>Computer Science</em> graduate
              interested in UI/UX design and Front End Development. I am hard
              working and motivated to build this as my career.
              <br />
              <br />
              Beautiful <em>Bangladesh</em> is a small country in South Asia &
              that’s where I am from.I now live in the Netherlands.I initially
              came here in 2022.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="pdf/Rimty-CV.pdf"
                class="btn btn-outline-secondary btn-lg px-4 button button-flex cv"
              >
                Download CV
                <i className="uil uil-download-alt button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="px-4 py-5 my-5 text-center">
          <div class="about-img animate__animated animate__slideInLeft animate__delay-4s">
            <img
              id="rimty"
              class="d-block mx-auto mb-4"
              src="./images/Rimty.jpg"
              alt="rimty"
              width="180"
              height="200"
            />
          </div>

          <div class="col-lg-6 mx-auto">
            <p class="lead ">
             
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center about-button animate__animated animate__slideInUp">
              
            </div>
          </div>
        </div>
    
      */}
      <div className="b-example-divider"></div>
    </section>
  );
}
export default About;
