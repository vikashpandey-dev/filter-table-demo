import React from "react";

const CheckButton = ({ data, label, onChange }) => {
  const handleOnChange = (event) => {
    onChange(event);
  };
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={() => handleOnChange()}
      />
      <label className="form-check-label" for="flexSwitchCheckDefault">
        {label}
      </label>
    </div>
  );
};

export default CheckButton;
