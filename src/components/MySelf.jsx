import { Fragment } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import "./MySelf.css";
import myphoto from "../assets/images/myphoto.jpeg";

const MySelf = () => {
  return (
    <Fragment>
      <div id="myself" className="indimainblocks">
        <div>
          <div className="imageblock">
            <img className="myimage" src={myphoto} alt="" />
          </div>
          <h1>Teerthraj Verma</h1>
          <h2>Full-Stack Developer</h2>
          <hr />
          <h3>Contact</h3>
          <hr />
          <div className="contactitems">
            <div className="indi_contactitem">
              <FaLocationDot className=" locicon primary-border" />
              <h5>Mumbai, India</h5>
            </div>
            <div className="indi_contactitem">
              <IoIosMail className=" mailicon primary-border" />
              <a href="mailto:teerthrajverma181001@gmail.com">
                teerthrajverma181001@gmail.com
              </a>
            </div>
          </div>
          <hr />
          <div className="contactitems">
            <div className="indi_contactitem">
              <FaLinkedin className=" linkedinicon primary-border" />
              <a href={`https://www.linkedin.com/in/teerthrajverma/`}>
                in/teerthrajverma
              </a>
            </div>
            <div className="indi_contactitem">
              <FaGithubSquare className=" linkedinicon primary-border" />
              <a href={`https://github.com/teerthrajverma01`}>
                teerthrajverma01
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MySelf;
