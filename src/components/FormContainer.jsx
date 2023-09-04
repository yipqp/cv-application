import React, { useState } from "react";
import Section from "./section";
import "../styles/FormContainer.css";

const FormContainers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const personalDetails = [
    { title: "first name", inputType: "text", className: "first" },
    { title: "last name", inputType: "text", className: "last" },
    { title: "email", inputType: "email" },
    { title: "phone #", inputType: "tel" },
  ];

  const education = [
    { title: "school", inputType: "text" },
    { title: "degree", inputType: "text" },
    { title: "start year", inputType: "text", className: "start" },
    { title: "end year", inputType: "text", className: "end" },
  ];

  const experience = [
    { title: "company name", inputType: "text", className: "company" },
    { title: "position title", inputType: "text", className: "position" },
    { title: "start date", inputType: "text", className: "start" },
    { title: "end date", inputType: "text", className: "end" },
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
      ></Section>
      <Section
        title="education"
        formGroups={education}
        className="education-form"
        isShown={activeIndex === 1}
        onClick={() => {
          setActiveIndex(1);
        }}
      ></Section>
      <Section
        title="experience"
        formGroups={experience}
        className="experience-form"
        isShown={activeIndex === 2}
        onClick={() => {
          setActiveIndex(2);
        }}
      ></Section>
    </div>
  );
};

export default FormContainers;
