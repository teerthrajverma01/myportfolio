import { Fragment } from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <Fragment>
      <div id="Skills" className="indimainblocks">
        <h3>My Skills</h3>
        <hr />
        <div className="skillblocks">
          <div className="indiskillblock">
            <h4>Languages</h4>
            <div className="indiskills ">
              <h5 className="indiskill primary-border">Java</h5>
              <h5 className="indiskill primary-border">JavaScript</h5>
            </div>
          </div>
          <hr />
          <div className="indiskillblock">
            <h4>FrontEndTech</h4>
            <div className="indiskills">
              <h5 className="indiskill primary-border">HTML5</h5>
              <h5 className="indiskill primary-border">CSS3</h5>
              <h5 className="indiskill primary-border">React</h5>
              <h5 className="indiskill primary-border">Redux</h5>
            </div>
          </div>
          <hr />
          <div className="indiskillblock">
            <h4>BackendTech</h4>
            <div className="indiskills">
              <h5 className="indiskill primary-border">Nodejs</h5>
              <h5 className="indiskill primary-border">Expressjs</h5>
            </div>
          </div>
          <hr />
          <div className="indiskillblock">
            <h4>Database</h4>
            <div className="indiskills">
              <h5 className="indiskill primary-border">MongoDB</h5>
              <h5 className="indiskill primary-border">SQL</h5>
            </div>
          </div>
          <hr />
          <div className="indiskillblock">
            <h4>And ...</h4>
            <div className="indiskills">
              <h5 className="indiskill primary-border">PostMan</h5>
              <h5 className="indiskill primary-border">FireBase</h5>
              <h5 className="indiskill primary-border">Git</h5>
              <h5 className="indiskill primary-border">GitHub</h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
