import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo({ handleInputChange }) {
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
        <h2>General Information</h2>
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
        <form className="generalInfoForm" action="">
          <div>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Telephone number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleInputChange}
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default GeneralInfo;
