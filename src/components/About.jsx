import { Fragment } from "react";

import "./About.css";
import aboutmeimg1 from "../assets/images/quadpose.jpg";
import aboutmeimg2 from "../assets/images/planepose.jpg";
const About = () => {
  return (
    <Fragment>
      <div id="AboutMe" className="indimainblocks">
        <h3>About ME</h3>
        <hr />
        <div className="aboutmesection">
          <div className="aboutmeinfo">
            <p>
              Hello, I am a FullStack Developer who can develop web applications
              and pages using up-to-date technologies. I develop web
              applications using the React.JS library of the JavaScript
              programming language and related technologies. I am proficient in
              using Next.JS, Git, React Router, Redux Toolkit, Tailwind CSS. My
              passion is to create modern and user-friendly websites and
              applications. A user-experience-oriented approach is very
              important to me, and for this reason, I always take care to stick
              to this principle in the projects I develop.
            </p>
            <p>
              In addition, I continue my education on other technologies such as
              Jest.JS, FastAPI, GraphQL, React Query, Formik, React Hook Form,
              React Native, Express.JS, TypeScript, and MongoDB. I am constantly
              researching new tools and techniques to make the development
              process more efficient using these technologies. I look forward to
              working with you with my experience, skills and passion.
            </p>
          </div>
          <div className="imgblock">
            <img className="aboutmeimage image1" src={aboutmeimg1} alt="" />
            <img className="aboutmeimage image2" src={aboutmeimg2} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
