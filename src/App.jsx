import { useState } from "react";

function App() {
  const [formatData, setFormatData] = useState({
    name: "",
    gender: "",
    age: "",
    fatherName: "",
    motherName: "",
    city: "",
    state: "",
    country: "",
    college: "",
    semester: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormatData({ ...formatData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formatData);
    alert("Form submitted successfully");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={formatData.name} onChange={handleChange} />
        </div><br />

        <div>
          <label>Gender:</label>
          <select name="gender" value={formatData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div><br />

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formatData.age}
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Father's Name:</label>
          <input
            name="fatherName"
            value={formatData.fatherName}
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Mother's Name:</label>
          <input
            name="motherName"
            value={formatData.motherName}
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>State:</label>
          <select name="state" value={formatData.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Tamil Nadu</option>
          </select>
        </div><br />

        <div>
          <label>City:</label>
          <select name="city" value={formatData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Chennai</option>
          </select>
        </div><br />

        <div>
          <label>Country:</label>
          <input
            name="country"
            value={formatData.country}
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>College:</label>
          <select name="college" value={formatData.college} onChange={handleChange}>
            <option value="">Select College</option>
            <option>GAT</option>
            <option>RNSIT</option>
            <option>BIMA</option>
            <option>PES</option>
          </select>
        </div><br />

        <div>
          <label>Semester:</label>
          <input
            name="semester"
            value={formatData.semester}
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Skills:</label>
          <input
            name="skills"
            value={formatData.skills}
            onChange={handleChange}
          />
        </div><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
