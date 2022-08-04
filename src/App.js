import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    $.ajax({
      url: `data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data });
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header data={this.state.data.basic_info} />
        <About
          basicInfo={this.state.data.basic_info}
          sectionTitles={this.state.data.section_titles}
        />
        <Projects
          projects={this.state.data.projects}
          sectionTitles={this.state.data.section_titles}
        />
        <Skills
          skills={this.state.data.skills}
          sectionTitles={this.state.data.section_titles}
        />
        <Experience
          experience={this.state.data.experience}
          sectionTitles={this.state.data.section_titles}
        />
        <Education
          education={this.state.data.education}
          sectionTitles={this.state.data.section_titles}
        />
        <Footer socials={this.state.data.socials} />
      </div>
    );
  }
}

export default App;
