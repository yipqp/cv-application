import React, { useState } from "react";
import Section from "./section";
import "../styles/FormContainer.css";

const FormContainer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const personalDetails = [
    { title: "first name", inputType: "text", className: "firstName" },
    { title: "last name", inputType: "text", className: "lastName" },
    { title: "email", inputType: "email" },
    { title: "phone #", inputType: "tel", className: "phoneNum" },
  ];

  const education = [
    { title: "school", inputType: "text" },
    { title: "degree", inputType: "text" },
    { title: "start year", inputType: "text", className: "startYear" },
    { title: "end year", inputType: "text", className: "endYear" },
  ];

  const experience = [
    { title: "company name", inputType: "text", className: "companyName" },
    { title: "position title", inputType: "text", className: "positionTitle" },
    { title: "start date", inputType: "text", className: "startDate" },
    { title: "end date", inputType: "text", className: "endDate" },
    { title: "description", inputType: "textarea" },
  ];

  return (
    <div className="form-container">
      <Section
        title="personal details"
        formGroups={personalDetails}
        className="personal-details-form"
        isShown={activeIndex === 0}
        onClick={() => {
          setActiveIndex(0);
        }}
        formData={props.personalInfo}
        onChange={props.handlePersonal}
      ></Section>
      <Section
        title="education"
        formGroups={education}
        className="education-form"
        isShown={activeIndex === 1}
        onClick={() => {
          setActiveIndex(1);
        }}
        formData={props.educationInfo}
        formEntries={props.educationEntries}
        onChange={props.handleEducation}
        setFormEntries={props.handleEducationEntries}
      ></Section>
      <Section
        title="experience"
        formGroups={experience}
        className="experience-form"
        isShown={activeIndex === 2}
        onClick={() => {
          setActiveIndex(2);
        }}
        formData={props.experienceInfo}
        formEntries={props.experienceEntries}
        onChange={props.handleExperience}
        setFormEntries={props.handleExperienceEntries}
      ></Section>
    </div>
  );
};

export default FormContainer;
