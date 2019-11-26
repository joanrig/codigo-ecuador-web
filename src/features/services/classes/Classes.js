import React from "react";
import { connect } from "react-redux";
import { Container, Divider } from "semantic-ui-react";
import "./Classes.css";
import { classesText } from "../../../common/servicesText/classesText";
// import { labeledStatement } from "@babel/types";
import { pythonText } from "../../../common/servicesText/pythonText";

function Classes(props) {
  const lang = localStorage.getItem("language");
  const headline = classesText[lang];
  const generatePythonClasses = () => {
    return pythonText.map(course => (
      <div className={`course-info ${course.color}`}>
        <br />
        <div className='large python-title'>{course[lang].title}</div>
        <br />

        <div className='python-duration'>
          <i>{course[lang].duration}</i>
        </div>
        <br />

        <div className='python-description'>{course[lang].description}</div>
        <br />
        <div className='python-bullets'>
          {course[lang].bulletPoints.map(point => (
            <ul>
              <li>{point}</li>
            </ul>
          ))}
        </div>
        <br />
        <Divider />
      </div>
    ));
  };

  return (
    <Container className='main-container'>
      <div className='courses-text'>
        <div className='center headline banner-headline'>
          <span className='gold'>Our Curriculum</span>
        </div>
        {headline.text}
      </div>
      <br />
      <br />

      {generatePythonClasses()}
    </Container>
  );
}

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Classes);
