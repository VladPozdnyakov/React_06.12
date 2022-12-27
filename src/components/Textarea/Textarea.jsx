import React from "react";
import Counter from "../Counter/Counter";
import s from "./Textarea.module.css";

const Textarea = (props) => {
  const { label, errorMessage, onChange, id, ...textareaProps } = props;

  return (
    <label className={s.label}>
      {label}
      <textarea
        className={s.textarea}
        {...textareaProps}
        onChange={onChange}
        rows="7"
      />
      {errorMessage && <span>{errorMessage}</span>}
      <Counter value={props.value} maxLength={600} />
    </label>
  );
};

export default Textarea;
