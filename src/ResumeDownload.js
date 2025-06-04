import React from "react";

const ResumeDownload = () => {
  return (
    <button
      onClick={() => window.open('/Akhil_P_Resume.pdf', '_blank')}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        transition: "background-color 0.3s ease"
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0056b3"}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = "#007bff"}
    >
      Download Resume
    </button>
  );
};

export default ResumeDownload;
