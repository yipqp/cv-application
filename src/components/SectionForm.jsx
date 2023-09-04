import React from "react";
import "../styles/SectionForm.css";

function SectionForm(props) {
  const showClass = props.show ? "show" : "";
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onChange({ ...props.formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = formData.entries();
    let newFormEntry = {};
    for (const val of entries) {
      newFormEntry = { ...newFormEntry, [val[0]]: val[1] };
    }
    props.setFormEntries?.([...props.formEntries, newFormEntry]);
  };
  return (
    <form
      action=""
      className={props.className + " " + showClass}
      onSubmit={handleSubmit}
    >
      {props.formGroups.map((group) => {
        const { title, inputType, className = title } = group;
        const useTextArea = inputType === "textarea";
        if (useTextArea) {
          return (
            <div className={className} key={title}>
              {title}
              <textarea
                name={className}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>
          );
        }
        return (
          <label className={className} htmlFor={title} key={title}>
            {title}
            <input
              id={title}
              type={inputType}
              name={className}
              onChange={handleChange}
            />
          </label>
        );
      })}
      <div className="button-container">
        <button type="button" className="delete-button">
          delete
        </button>
        <button type="reset" className="cancel-button">
          cancel
        </button>
        <button type="submit" className="save-button">
          save
        </button>
      </div>
    </form>
  );
}

export default SectionForm;
