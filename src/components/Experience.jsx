import { Fragment } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Experience.css";
const Experience = () => {
  return (
    <Fragment>
      <div id="Experience" className="indimainblocks">
        <h3>Experience/Internship</h3>

        <hr />
        <div className="experiences">
          <div className="indiexperience">
            <div className="indiexp_header">
              <div className="indiexp_subheader">
                <h4 className="indiexp_title">Freelance</h4>
                <a
                  href="https://www.freelancer.com/u/BrokeBros404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkblock secondary-border"
                >
                  <h5>View</h5>
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
              <p className="indiexp_timeline">Aug2023 - ongoing</p>
            </div>
            <p className="indiexp_desc">
              Currently working as Freelance Fullstack Developer on various
              freelancer-Platforms.Successfully delivered Web Applications for
              multiple Clients
            </p>
          </div>
          <hr />
          <div className="indiexperience">
            <div className="indiexp_header">
              <div className="indiexp_subheader">
                <h4 className="indiexp_title">
                  Nazareth Foundation: Worked on Solar Devices
                </h4>
                <a
                  href="https://drive.google.com/file/d/1bCS0mL95XOjqZlI06DIjlagYbdTEle3D/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkblock secondary-border"
                >
                  <h5>Certificate</h5>
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
              <p className="indiexp_timeline">Jan2022 – Feb2022</p>
            </div>
            <p className="indiexp_desc">
              Solar-devices like Solar lantern, Solar cooker which was later
              distributed to slum area near Dharavi as a part of Gov Initiative
            </p>
          </div>
          <hr />
          <div className="indiexperience">
            <div className="indiexp_header">
              <div className="indiexp_subheader">
                <h4 className="indiexp_title">
                  InhouseInternship: Machine learning Foundation
                </h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/3E3LM86W3TTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkblock secondary-border"
                >
                  <h5>Certificate</h5>
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
              <p className="indiexp_timeline">June2021 – July2022</p>
            </div>
            <p className="indiexp_desc">
              Completed Coursera Course on Foundation of Machine Learning as a
              part of inhouse Internship
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
