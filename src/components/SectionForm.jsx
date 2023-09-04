import React from "react";
import "../styles/SectionForm.css";

function SectionForm(props) {
  const showClass = props.show ? "show" : "";
  return (
    <form action="" className={props.className + " " + showClass}>
      {props.formGroups.map((group) => {
        const { title, inputType, className = title } = group;
        return (
          <label className={className} htmlFor={title} key={title}>
            {title}
            <input id={title} type={inputType} name={title} />
          </label>
        );
      })}
    </form>
  );
}

export default SectionForm;
