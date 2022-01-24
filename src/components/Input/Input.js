import "./Input.css";

import React from "react";
import "./Input.css";

export const Input = (props) => {
  const {
    color = "primary",
    size = "medium",
    variant = "standard",
    value,
    onChange,
    label,
    ...rest
  } = props;
  return (
    <div className="group">
      <input
        className={`ar-input-${size} ar-input-${variant} ar-input-${color}-${variant}`}
        type="text"
        required
        {...rest}
        value={value}
        onChange={onChange}
      />
      <span className="highlight"></span>
      <span className={`${size} bar`}></span>
      <label className={`ar-input-${variant}-label`}>{label}</label>
    </div>
  );
};
