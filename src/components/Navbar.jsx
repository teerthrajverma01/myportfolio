import { Fragment } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navblock">
        <div className="navelements">
          <div className="myselficondiv indnavelement">
            <a className="myselficon " href="#MySelf">
              HELLO
            </a>
          </div>
          <div className="indnavelement">
            <a href="#AboutMe">AboutMe</a>
          </div>
          <div className="indnavelement">
            <a href="#Skills">Skills</a>
          </div>
          <div className="indnavelement">
            <a href="#Projects">Projects</a>
          </div>
          <div className="indnavelement">
            <a href="#Experience">Experience</a>
          </div>
          <div className="indnavelement">
            <a href="#Education">Education</a>
          </div>
          <div className="indnavelement">
            <a href="#Interest">Interest</a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
