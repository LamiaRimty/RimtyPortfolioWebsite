import "./Skills.css";

function Skills() {
  return (
    <section
      className="skills section animate__animated animate__fadeInDown"
      id="skills"
    >
      <div className="container px-4 py-5" id="hanging-icons">
        {/* <h2 class="pb-2 border-bottom">Hanging icons</h2> */}
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle  ">My Technical Levels</span>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="uil uil-arrow skills-icon"></i>
            </div>
            <div>
              <h3 className="fs-2 skills-title">Frontend Development</h3>
              <ol className="list-group-numbered">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Bootsrap</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Reactjs</li>
              </ol>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="uil uil-palette skills-icon"></i>
            </div>
            <div>
              <h3 className="fs-2   skills-title">Design</h3>

              <ol className="list-group-numbered">
                <li className="list-group-item">Figma</li>
                <li className="list-group-item">Adobe Photoshop CC</li>
                <li className="list-group-item">Adobe XD</li>
              </ol>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i className="uil uil-server-network-alt skills-icon"></i>
            </div>
            <div>
              <h3 className="fs-2 skills-title">Backend Development</h3>
              <ol className="list-group-numbered">
                <li className="list-group-item">Node</li>
                <li className="list-group-item">REST APIs</li>
                <li className="list-group-item">MongoDB</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
    </section>
  );
}
export default Skills;
