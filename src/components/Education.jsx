import { Fragment } from "react";
import "./Education.css";
const Education = () => {
  return (
    <Fragment>
      <div id="Education" className="indimainblocks">
        <h3>Education</h3>
        <hr />
        <div className="educations">
          <div className="indieducation">
            <h4>Thakur College of Engineering and Technology</h4>
            <h5>Electronics Engineering: (Bachelors Degree)</h5>
            <p>CGPA: 9.05</p>
            <p className="year">(2019-2023)</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
