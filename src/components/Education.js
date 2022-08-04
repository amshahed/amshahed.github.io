import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    if (this.props.education && this.props.sectionTitles) {
      var sectionTitle = this.props.sectionTitles.education;
      var education = this.props.education.map((education, i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={education.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={
            <i className="fas fa-graduation-cap mx-auto experience-icon"></i>
          }
          key={i}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {education.degree}
          </h3>
          <h4 style={{ textAlign: "left" }}>
            <a
              className="vertical-timeline-element-subtitle"
              href={education.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {education.institute}
            </a>
          </h4>
        </VerticalTimelineElement>
      ));
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionTitle}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {education}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-book mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
