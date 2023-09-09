import { useState } from "react";
import SectionForm from "./SectionForm";
import "../styles/Section.css";

const Section = (props) => {
  const [activeEntryIndex, setActiveEntryIndex] = useState("");
  const expandContainer = props.isShown ? "show" : "hide";
  const handleCancel = () => {
    setActiveEntryIndex("");
  };
  return (
    <div className="section-container">
      <button onClick={props.onClick} className="card-header">
        <h2 className={props.isShown ? "underline" : ""}>{props.title}</h2>
      </button>
      <div className={expandContainer}>
        {props.formEntries &&
          Array.from(props.formEntries.values()).map((entry) => (
            <div key={entry.id}>
              <button
                onClick={() => {
                  if (activeEntryIndex === entry.id) {
                    setActiveEntryIndex("");
                    props.onChange(null);
                  } else {
                    setActiveEntryIndex(entry.id);
                    props.onChange(entry);
                  }
                }}
                className={`${expandContainer} entry-header`}
              >
                {
                  Object.values(
                    entry
                  )[1] /* title of card is the property after id */
                }
              </button>
              <SectionForm
                formGroups={props.formGroups}
                className={props.className}
                onChange={props.onChange}
                show={props.isShown && activeEntryIndex === `${entry.id}`}
                formData={props.formData}
                formEntries={props.formEntries}
                setFormEntries={props.setFormEntries}
                onCancel={handleCancel}
                title={props.title}
                id={entry.id}
              ></SectionForm>
            </div>
          ))}
        <button
          className={`add-entry ${expandContainer}`}
          onClick={() => {
            if (activeEntryIndex === `${props.title}-add`) {
              setActiveEntryIndex("");
            } else {
              props.onChange(null);
              setActiveEntryIndex(`${props.title}-add`);
            }
          }}
        >
          add entry
        </button>
        <SectionForm
          show={props.isShown && activeEntryIndex === `${props.title}-add`}
          formGroups={props.formGroups}
          className={props.className}
          onChange={props.onChange}
          formData={props.formData}
          formEntries={props.formEntries}
          setFormEntries={props.setFormEntries}
          onCancel={handleCancel}
          title={props.title}
          id="add"
        ></SectionForm>
      </div>
    </div>
  );
};

export default Section;
