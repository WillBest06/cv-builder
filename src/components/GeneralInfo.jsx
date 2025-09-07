import "../styles/GeneralInfo.css";

function GeneralInfo() {
  return (
    <div className="container">
      <div className="thumbnail">
        <h2>General Information</h2>
        <button>
          Edit
          <span>
            <img
              src="src/assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </span>
        </button>
      </div>
      <form action="">
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="phoneNumber">Telephone number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
