import "../styles/CVPreview.css";

function CVPreview({ generalInfo, education }) {
  return (
    <div className="cv-preview">
      <h1>Live preview</h1>

      <div>
        <h2>General info</h2>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone number: {generalInfo.phoneNumber}</p>
      </div>
      <div>
        <h2>Education</h2>
        <p>Institution: {education.institution}</p>
        <p>Area of study: {education.studies}</p>
        <p>
          {education.startYear} - {education.endYear}
        </p>
      </div>
    </div>
  );
}

export default CVPreview;
