import React from "react";
import "./ScopeChooser.css";
const ScopeChooser = ({ onScopeChange }) => {
  return (
    <div>
      <button
        className="BtnDoor"
        onClick={() => onScopeChange("doors")}
      ></button>
      <button
        className="BtnTreasure"
        onClick={() => onScopeChange("treasures")}
      ></button>
    </div>
  );
};
export default ScopeChooser;
