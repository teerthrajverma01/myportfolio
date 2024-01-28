import { Fragment } from "react";
import { IoIosMail } from "react-icons/io";

import "./MySelf.css";

const MySelf = () => {
  return (
    <Fragment>
      <div id="myself">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>Teerthraj Verma</div>
          <div>FullStack Developer</div>
          <hr></hr>
          <div>Contact</div>
          <hr></hr>
          <div>
            <div>
              <p>Mumbai, India</p>
            </div>
            <div>
              <IoIosMail className=" mailicon icon" />
              <p>teerthrajverma181001@gmail.com</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MySelf;
