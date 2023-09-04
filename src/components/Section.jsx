import React, { useState } from "react";
import SectionForm from "./SectionForm";
import "../styles/Section.css";

const Section = (props) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="section-container">
      <button onClick={handleClick} className="card-header">
        <h2 className={show ? "underline" : ""}>{props.title}</h2>
      </button>
      <SectionForm
        formGroups={props.formGroups}
        className={props.className}
        show={show}
      ></SectionForm>
    </div>
  );
};

export default Section;
