import { useState } from "react";
import SectionForm from "./SectionForm";
import "../styles/Section.css";

const Section = (props) => {
  const isPersonalDetails = props.title === "personal details";
  const [activeEntryIndex, setActiveEntryIndex] = useState("");
  const showClass = props.isShown ? "show" : "hide";
  const handleCancel = () => {
    setActiveEntryIndex("");
  };
  return (
    <div className="section-container">
      <button onClick={props.onClick} className="card-header">
        <h2 className={props.isShown ? "underline" : ""}>{props.title}</h2>
      </button>
      <div className={`entries-container ${showClass}`}>
        {Array.from(props.formEntries.values()).map((entry) => (
          <div
            className={
              isPersonalDetails
                ? "entry-container add-container"
                : "entry-container"
            }
            key={entry.id}
          >
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
              className={
                isPersonalDetails ? "add-entry" : `entry-header ${showClass}`
              }
            >
              {
                isPersonalDetails
                  ? `${Object.values(entry)[1]}  ${
                      Object.values(entry)[2]
                    }` /* in user profile, title of card is first and last name */
                  : Object.values(
                      entry
                    )[1] /* title of card is the first input name */
              }
            </button>
            <SectionForm
              show={props.isShown && activeEntryIndex === `${entry.id}`}
              formGroups={props.formGroups}
              className={props.className}
              onChange={props.onChange}
              formData={props.formData}
              formEntries={props.formEntries}
              setFormEntries={props.setFormEntries}
              onCancel={handleCancel}
              title={props.title}
              id={entry.id}
            ></SectionForm>
          </div>
        ))}
        {props.title !== "personal details" ? (
          <div className="entry-container add-container">
            <button
              className={`add-entry ${showClass}`}
              onClick={() => {
                if (activeEntryIndex === `${props.title}-add`) {
                  setActiveEntryIndex("");
                } else {
                  props.onChange(null);
                  setActiveEntryIndex(`${props.title}-add`);
                }
              }}
            >
              {isPersonalDetails ? `profile` : "add entry"}
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Section;
