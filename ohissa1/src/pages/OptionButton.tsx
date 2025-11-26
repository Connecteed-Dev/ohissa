import React from "react";
import { useNavigate } from "react-router-dom";

interface OptionButtonProps {
  label: string;
  to: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      style={{
        padding: "12px 32px",
        fontSize: "1.1rem",
        fontWeight: 500,
        color: "#fff",
        background: "rgba(0,0,0,0.25)",
        border: "2px solid #fff",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background 0.2s, color 0.2s",
        margin: "0 8px",
      }}
      onMouseOver={e => (e.currentTarget.style.background = "#00bfae")}
      onMouseOut={e => (e.currentTarget.style.background = "rgba(0,0,0,0.25)")}
    >
      {label}
    </button>
  );
};

export default OptionButton;
