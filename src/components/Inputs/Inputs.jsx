import React from "react";
import "./Inputs.module.css";
import s from "./Inputs.module.css";

const Inputs = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <label className={s.label}>
      {label}
      <input className={s.input} {...inputProps} onChange={onChange} />
      {errorMessage && <span>{errorMessage}</span>}
    </label>
  );
};

export default Inputs;
