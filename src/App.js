import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFilterResumes = () => {
    // handle filter resumes logic
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <nav>
        <h1>Resume Scorer</h1>
        <div className="toggle-container">
          {/* <span>Light</span> */}
          <div className={`toggle ${isDarkMode ? "night" : "day"}`} onClick={toggleDarkMode}></div>
          {/* <span>Dark</span> */}
        </div>
      </nav>
      <div className="main-container">
        <div className="upload-container">
          <label>Upload Resumes</label>
          <input type="file" multiple />
          <label>Upload Job Description</label>
          <input type="file" />
          <button className="filter-button" onClick={handleFilterResumes}>Filter Resumes</button>
        </div>
      </div>
    </div>
  );
}

export default App;
