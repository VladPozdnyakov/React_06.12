import React, { Component } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import s from "./Form.module.css";
import Button from "../Button/Button";

class Form extends Component {
  render() {
    const inputs = [
      {
        label: "First Name",
        placeholder: "Input First Name",
      },
      {
        label: "Last Name",
        placeholder: "Input Last Name",
      },
      {
        label: "Birthday",
        placeholder: "Input birthday",
      },
      {
        label: "Phone",
        placeholder: "Input phone",
      },
      {
        label: "Website",
        placeholder: "Input website",
      },
    ];
    const textarea = [
      {
        label: "About me",
        placeholder: "Tell about yourself",
      },
      {
        label: "Technologies",
        placeholder: "Tell about technologies",
      },
      {
        label: "Description last project",
        placeholder: "Tell about your last project",
      },
    ];
    return (
      <div className={s.form}>
        <h1 className={s.title}>Create Form</h1>
        <div>
          {inputs.map((input) => {
            return (
              <Input label={input.label} placeholder={input.placeholder} />
            );
          })}
        </div>
        <div className="dataArea">
          {textarea.map((item) => {
            return (
              <Textarea label={item.label} placeholder={item.placeholder} />
            );
          })}
        </div>
        <div className={s.buttons}>
          <Button name={"Cancel"} />
          <Button name={"Save"} />
        </div>
      </div>
    );
  }
}

export default Form;
