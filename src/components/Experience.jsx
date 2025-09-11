import { useState } from "react";
import "../styles/Experience.css";

function Experience({ data, handleInputChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="thumbnail">
        <h2>Experience</h2>
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
        <form className="experience-form" action="">
          <div>
            <label htmlFor="company">Name of company</label>
            <input
              type="text"
              name="company"
              id="company"
              defaultValue={data.company}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="position">Title of position</label>
            <input
              type="text"
              name="position"
              id="position"
              defaultValue={data.position}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea
              type="text"
              name="responsibilities"
              id="responsibilities"
              defaultValue={data.responsibilities}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="startYear">Start year</label>
            <input
              type="text"
              name="startYear"
              id="startYear"
              placeholder="YYYY"
              defaultValue={data.startYear}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="endYear">End year</label>
            <input
              type="text"
              name="endYear"
              id="endYear"
              placeholder="YYYY"
              defaultValue={data.endYear}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Experience;
