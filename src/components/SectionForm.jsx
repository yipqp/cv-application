import "../styles/SectionForm.css";
import { v4 as uuidv4 } from "uuid";

function SectionForm(props) {
  const showClass = props.show ? "show-form" : "";
  const isPersonalDetails = props.title === "personal details";

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onChange({ ...props.formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = formData.entries();
    let objID;

    if (isPersonalDetails) {
      objID = "user-profile";
    } else if (props.id === "add") {
      objID = `${props.title}-${uuidv4()}`;
    } else {
      objID = props.id;
    }
    let newFormEntry = { id: objID };
    for (const val of entries) {
      newFormEntry = { ...newFormEntry, [val[0]]: val[1] };
    }
    props.setFormEntries(new Map(props.formEntries.set(objID, newFormEntry)));
    handleReset(e);
    props.onCancel();
  };

  const handleDelete = () => {
    const newMap = new Map(props.formEntries);
    newMap.delete(props.id);
    props.setFormEntries?.(newMap);
    props.onChange(null);
  };

  const handleReset = (e) => {
    e.target.reset();
    props.onChange(null);
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
                value={
                  (props.formData &&
                    className in props.formData &&
                    props.formData[className]) ||
                  ""
                }
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
              value={
                (props.formData &&
                  className in props.formData &&
                  props.formData[className]) ||
                ""
              }
              id={title}
              type={inputType}
              name={className}
              onChange={handleChange}
            />
          </label>
        );
      })}
      <div className="button-container">
        {!isPersonalDetails && (
          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            delete
          </button>
        )}
        <button
          type="reset"
          className="cancel-button"
          onClick={() => {
            props.onCancel();
            props.onChange(null);
          }}
        >
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
