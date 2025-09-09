import "./App.css";
import CVPreview from "./components/CVPreview.JSX";
import GeneralInfo from "./components/GeneralInfo";
import { useState } from "react";

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setGeneralInfoData({ ...generalInfoData, [key]: newValue });
  };

  return (
    <>
      <GeneralInfo handleInputChange={handleInputChange}></GeneralInfo>
      <CVPreview generalInfo={generalInfoData}></CVPreview>
    </>
  );
}

export default App;
