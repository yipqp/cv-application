import React, { useState } from "react";
import SectionForm from "./SectionForm";
import "../styles/Section.css";

const Section = (props) => {
  return (
    <div className="section-container">
      <button onClick={props.onClick} className="card-header">
        <h2 className={props.isShown ? "underline" : ""}>{props.title}</h2>
      </button>
      <SectionForm
        formGroups={props.formGroups}
        className={props.className}
        show={props.isShown}
        onChange={props.onChange}
        formData={props.formData}
        formEntries={props.formEntries}
        setFormEntries={props.setFormEntries}
      ></SectionForm>
    </div>
  );
};

export default Section;
