import "./App.css";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import { useState } from "react";

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationData, setEducationData] = useState({
    institution: "",
    studies: "",
    startYear: "",
    endYear: "",
  });

  const [experienceData, setExperienceData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startYear: "",
    endYear: "",
  });

  const handleGeneralInfoChange = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setGeneralInfoData({ ...generalInfoData, [key]: newValue });
  };

  const handleEducationChange = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setEducationData({ ...educationData, [key]: newValue });
  };

  const handleExperienceChange = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setExperienceData({ ...experienceData, [key]: newValue });
  };

  return (
    <>
      <section className="cv-input">
        <GeneralInfo
          handleInputChange={handleGeneralInfoChange}
          data={generalInfoData}
        ></GeneralInfo>
        <Education
          data={educationData}
          handleInputChange={handleEducationChange}
        ></Education>

        <Experience
          data={experienceData}
          handleInputChange={handleExperienceChange}
        ></Experience>
      </section>

      <CVPreview
        generalInfo={generalInfoData}
        education={educationData}
        experience={experienceData}
      ></CVPreview>
    </>
  );
}

export default App;
