import "./App.css";
import CVPreview from "./components/CVPreview.JSX";
import Education from "./components/Education";
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
      </section>

      <CVPreview generalInfo={generalInfoData}></CVPreview>
    </>
  );
}

export default App;
