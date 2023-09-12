import { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import ResumeDisplay from "./components/ResumeDisplay";

function App() {
  const defaultProfileValues = {
    id: "user-profile",
    firstName: "My",
    lastName: "Name",
    email: "",
    phoneNum: "",
  };

  const personalProfileMap = new Map();
  personalProfileMap.set("user-profile", defaultProfileValues);

  const [personalInfo, setPersonalInfo] = useState(null);
  const [personalProfile, setPersonalProfile] = useState(personalProfileMap);
  const [educationInfo, setEducationInfo] = useState(null);
  const [educationEntries, setEducationEntries] = useState(new Map());
  const [experienceInfo, setExperienceInfo] = useState(null);
  const [experienceEntries, setExperienceEntries] = useState(new Map());

  return (
    <div className="app-container">
      <FormContainer
        handlePersonal={setPersonalInfo}
        personalInfo={personalInfo}
        personalProfile={personalProfile}
        handlePersonalProfile={setPersonalProfile}
        handleEducation={setEducationInfo}
        educationInfo={educationInfo}
        handleEducationEntries={setEducationEntries}
        educationEntries={educationEntries}
        handleExperience={setExperienceInfo}
        experienceInfo={experienceInfo}
        handleExperienceEntries={setExperienceEntries}
        experienceEntries={experienceEntries}
      ></FormContainer>
      <ResumeDisplay
        personalProfile={personalProfile}
        educationEntries={educationEntries}
        experienceEntries={experienceEntries}
      ></ResumeDisplay>
    </div>
  );
}

export default App;
