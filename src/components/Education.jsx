import { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
      <div className="container">
        <div className="thumbnail">
          <h2>Education</h2>
          {!isEditing && (
            <button className="edit-button" onClick={handleEdit}>
              Edit
              <span>
                <img
                  src="src/assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                  alt=""
                />
              </span>
            </button>
          )}
        </div>

        {isEditing && (
          <form className="education-form" action="">
            <div>
              <label htmlFor="institution">Name of institution</label>
              <input type="text" name="institution" id="institution" />
            </div>
            <div>
              <label htmlFor="study">Title of study</label>
              <input type="text" name="study" id="study" />
            </div>

            <div className="education-years">
              <div className="year-container">
                <label htmlFor="startYear">Start year</label>
                <input
                  type="text"
                  name="startYear"
                  id="startYear"
                  placeholder="YYYY"
                />
              </div>
              <div className="year-container">
                <label htmlFor="endYear">End year</label>
                <input
                  type="text"
                  name="endYear"
                  id="endYear"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Education;
