import { Fragment } from "react";
import "./Projects.css";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Projects = () => {
  return (
    <Fragment>
      <div id="Projects" className="indimainblocks">
        <h3>Projects</h3>
        <hr />
        <div className="projectblock">
          <div className="projects">
            <div className="indiproject">
              <div className="indiproject_title">
                <h4>Quadruped Robot</h4>
                <div className="linkblocks">
                  {/* <div className="linkblock secondary-border">
                    <h5>Code</h5>
                    <FaArrowUpRightFromSquare />
                  </div> */}
                  <a
                    href="https://www.youtube.com/shorts/yfbJGc5DXPE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkblock secondary-border"
                  >
                    <h5>View</h5>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <p className="indiprojectcontent">
                Worked on Walking mechanisms in Four-legged robot as final B.E
                Project. Implemented locomotion algorithms for gait planning and
                motion control to achieve stable walking.
              </p>
              <p className="techstack">
                TechStack: Arduino, Python3.x, Py-game.
              </p>
            </div>
            <hr />
            <div className="indiproject">
              <div className="indiproject_title">
                <h4>Delivery Drone</h4>
                <div className="linkblocks">
                  {/* <div className="linkblock secondary-border">
                    <h5>Code</h5>
                    <FaArrowUpRightFromSquare />
                  </div> */}
                  <a
                    href="https://www.youtube.com/watch?v=w7zr_ZOqLyo&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkblock secondary-border"
                  >
                    <h5>View</h5>
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <p className="indiprojectcontent">
                Worked on Drone in Robot Operating System environment as a part
                of E-yantra Competition.
              </p>
              <p className="techstack">
                Tech-Stack: ROS (Robot Operating System), Python3.x, C++.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
