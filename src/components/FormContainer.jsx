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
    </div>
  );
};

export default FormContainers;
