import "../styles/ResumeDisplay.css";
import { v4 as uuidv4 } from "uuid";

const ResumeDisplay = ({
  personalProfile,
  educationEntries,
  experienceEntries,
}) => {
  const profileObj = personalProfile.get("user-profile");
  const fullName = `${profileObj.firstName} ${profileObj.lastName}`;
  const phoneNum = profileObj.phoneNum;
  const email = profileObj.email;
  return (
    <div className="resume-display">
      <div className="resume-header">
        <h2 className="name-header">{fullName}</h2>
        <div className="applicant-info-container">
          <div className="phone-num">{phoneNum}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <div className="resume-body">
        <div className="education-container container">
          <h3 className="section-header">Education</h3>
          {Array.from(educationEntries.values()).map((e) => {
            return (
              <div className="item-container" key={e.id}>
                <div className="header">
                  <h4>{e.school}</h4>
                  <div>{`${e.startYear} - ${e.endYear}`}</div>
                </div>
                <div className="sub-header">
                  <span>{e.degree}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experience-container container">
          <h3 className="section-header">Experience</h3>
          {Array.from(experienceEntries.values()).map((e) => {
            const descriptionBulletPts = e.description
              .replace(/\r\n/g, "\n")
              .split("\n")
              .filter((line) => line);
            return (
              <div className="item-container" key={e.id}>
                <div className="header-container">
                  <div className="header">
                    <h4>{e.positionTitle}</h4>
                    <div>{`${e.startDate} - ${e.endDate}`}</div>
                  </div>
                  <div className="sub-header">{e.companyName}</div>
                </div>

                <div className="description-container">
                  <ul className="bullet-points">
                    {descriptionBulletPts.map((bullet) => {
                      return <li key={uuidv4()}>{bullet}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeDisplay;
