import { useState } from "react";
import "./App.css";
import Section from "./components/section";
import FormContainer from "./components/FormContainer";
import ResumeDisplay from "./components/ResumeDisplay";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState(null);
  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState(null);
  const [experienceEntries, setExperienceEntries] = useState([]);

  return (
    <div className="app-container">
      <FormContainer
        handlePersonal={setPersonalInfo}
        personalInfo={personalInfo}
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
        personalSection={personalInfo}
        educationSection={educationInfo}
        experienceSection={educationInfo}
      ></ResumeDisplay>
    </div>
  );
}

export default App;
