import { Fragment, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [prevstate, nextstate] = useState(false);

  function clickhandler() {
    nextstate((prevstate) => !prevstate);
  }
  return (
    <Fragment>
      <nav className="navblock">
        <div className="menu">
          <div className="myselficondiv ">
            <a className="myselficon " href="#MySelf">
              HELLO
            </a>
          </div>
          <FiMenu className="navbar" onClick={clickhandler} />

          <div className="navelements">
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
              <a href="#GitIgnore">GitIgnore</a>
            </div>
          </div>
        </div>
        {prevstate && (
          <div className="navbarelements">
            <div className="indnavbarelement">
              <a href="#AboutMe">AboutMe</a>
            </div>
            <div className="indnavbarelement">
              <a href="#Skills">Skills</a>
            </div>
            <div className="indnavbarelement">
              <a href="#Projects">Projects</a>
            </div>
            <div className="indnavbarelement">
              <a href="#Experience">Experience</a>
            </div>
            <div className="indnavbarelement">
              <a href="#Education">Education</a>
            </div>
            <div className="indnavbarelement">
              <a href="#GitIgnore">GitIgnore</a>
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;

{
  /* <FiMenu /> */
}
