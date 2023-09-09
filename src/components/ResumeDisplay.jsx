import "../styles/ResumeDisplay.css";

const ResumeDisplay = ({ personalInfo, educationArr, experienceArr }) => {
  // const fullName = personalInfo.firstName + " " + personalInfo.lastName;
  let fullName = "";
  let phoneNum = "";
  let email = "";
  return (
    <div className="resume-display">
      <h2>{fullName}</h2>
      <div className="applicant-info-container">
        <div className="phone-num">{phoneNum}</div>
        <div className="email">{email}</div>
      </div>
      <div className="resume-body">
        <div className="education-container">
          <h3>Education</h3>
          {/* {props.education.map((item) => {})} */}
        </div>
        <div className="experience-container">
          <h3>Experience</h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeDisplay;
