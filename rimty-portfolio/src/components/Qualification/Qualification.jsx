import "./Qualification.css";

function Qualification() {
  return (
    <section id="qualification">
      <div className="container col-xxl-8 px-4 py-5">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My Personal Journey</span>

        <div className="qualification-sections">
          <div
            id="education"
            className="animate__animated animate__slideInLeft animate__delay-10s"
          >
            {/* <!-- Education content  --> */}
            <div className="qualification-content ">
              <div className="qualification-button button-flex  justify-content-center">
                <i className="uil uil-graduation-cap qualification-icon "></i>
                Education
              </div>
              {/* <!-- Q1 --> */}
              <div className="qualification-data" id="education">
                <div>
                  <span class="qualification-point"></span>
                  <span class="qualification-line"></span>
                </div>
                <div>
                  <h3 className="qualification-title">
                    Bachelor of Computer Science & Engineering
                  </h3>
                  <span className="qualification-subtitle">
                    University of Rajshahi , Bangladesh{" "}
                  </span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2014 ~ 2018
                  </div>
                </div>
              </div>

              {/* <!-- Q2 --> */}
              <div className="qualification-data" id="education">
                <div>
                  <span className="qualification-point"></span>
                  {/* <!-- <span class="qualification-line"></span> --> */}
                </div>

                <div>
                  <h3 className="qualification-title">
                    Master’s of Computer Science & Engineering{" "}
                  </h3>
                  <span className="qualification-subtitle">
                    University of Rajshahi , Bangladesh{" "}
                  </span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2018 ~ 2020
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="course"
            className="animate__animated animate__slideInRight animate__delay-10s"
          >
            {/* <!-- course content  --> */}
            <div className="qualification-content ">
              <div className="qualification-button button-flex">
                <i className="uil uil-file-landscape-alt qualification-icon"></i>
                Course
              </div>
              {/* <!-- C1 --> */}
              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    The Complete 2023 Web Development Bootcamp{" "}
                  </h3>
                  <span className="qualification-subtitle">Udemy</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023
                  </div>
                </div>
              </div>

              {/* <!-- C2 --> */}

              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    User Experience Design Esentials-Adobe XD UI UX Design
                  </h3>
                  <span className="qualification-subtitle">Udemy</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023
                  </div>
                </div>
              </div>

              {/* <!-- C3 --> */}
              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    Become a FrontEnd Developer
                  </h3>
                  <span className="qualification-subtitle">Educative</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>
              </div>

              {/* <!-- c4 --> */}

              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                  <span class="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    {" "}
                    Intermediate JavaScript : Building Frontend Components{" "}
                  </h3>
                  <span className="qualification-subtitle">Educative</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>
              </div>

              {/* <!-- C5 --> */}

              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    Learn Figma : User Interface Design Esentials - UI/UX Design{" "}
                  </h3>
                  <span className="qualification-subtitle">Udemy</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>
              </div>

              {/* <!-- C6 --> */}

              <div className="qualification-data">
                <div>
                  <span className="qualification-point"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    Design Thinking : the fundamentals{" "}
                  </h3>
                  <span className="qualification-subtitle">Udemy</span>

                  <div className="qualification-calender">
                    <i className="uil uil-calendar-alt"></i>
                    2022
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Course content --> */}
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
    </section>
  );
}
export default Qualification;
