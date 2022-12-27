import React, { useState } from "react";
import Button from "../Button/Button";
import Inputs from "../Inputs/Inputs";
import Textarea from "../Textarea/Textarea";

import s from "./Form.module.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    birthday: "",
    phone: "",
    website: "",
    aboutMe: "",
    technologies: "",
    lastProject: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    lastname: "",
    birthday: "",
    phone: "",
    website: "",
    aboutMe: "",
    technologies: "",
    lastProject: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Write your username",
      label: "Username",
      type: "text",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Write your LastName",
      label: "Lastname",
      type: "text",
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Write your birthday",
      label: "Birthday",
      type: "date",
    },
    {
      id: 4,
      name: "phone",
      placeholder: "Write your phone",
      label: "Phone",
      type: "text",
    },
    {
      id: 5,
      name: "website",
      placeholder: "Write your website",
      label: "Website",
      type: "text",
    },
  ];

  const textarea = [
    {
      id: 1,
      name: "aboutMe",
      placeholder: "Write about you",
      label: "About Me",
      type: "text",
    },
    {
      id: 2,
      name: "technologies",
      placeholder: "Write about your stack technologies",
      label: "Stack Technologies",
      type: "text",
    },
    {
      id: 3,
      name: "lastProject",
      placeholder: "Write about your last project",
      label: "Last Project",
      type: "text",
    },
  ];

  const checkIfStartsWithCapitalLetter = (word) => {
    return word.charAt(0) === word.charAt(0).toUpperCase();
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);

      return true;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormError = {};

    Object.keys(values).forEach((el) => {
      if (!values[el]) {
        newFormError[el] = "There no value. Please add some";

        return;
      }

      if (el === "username") {
        if (checkIfStartsWithCapitalLetter(values[el])) {
          newFormError[el] = "";

          return;
        }

        newFormError[el] = "Username should be starter with Uppercase";
      }

      if (el === "lastname") {
        if (checkIfStartsWithCapitalLetter(values[el])) {
          newFormError[el] = "";
          return;
        }

        newFormError[el] = "Lastname should be starter with Uppercase";
      }

      if (el === "birthday") {
        if (new Date(values[el]) <= new Date()) {
          newFormError[el] = "";

          return;
        }

        newFormError[el] = "Birthday should be present";
      }

      if (el === "phone") {
        if (values[el] < 6 || values[el].length > 12) {
          newFormError[el] = "Phone should has 12 symbols";

          return;
        }

        newFormError[el] = "";
      }

      if (el === "website") {
        if (isValidUrl(values[el])) {
          newFormError[el] = "";

          return;
        }

        newFormError[el] = "Please input a valid url";
      }

      if (el === "aboutMe") {
        if (values[el].length > 600) {
          newFormError[el] = "You have exceeded the character limit";

          return;
        }
        newFormError[el] = "";
      }
      if (el === "technologies") {
        if (values[el].length > 600) {
          newFormError[el] = "You have exceeded the character limit";

          return;
        }
        newFormError[el] = "";
      }
      if (el === "lastProject") {
        if (values[el].length > 600) {
          newFormError[el] = "You have exceeded the character limit";

          return;
        }
        newFormError[el] = "";
      }
    });

    setFormErrors(newFormError);
  };

  const onChange = (e) => {
    setFormErrors({ ...formErrors, [e.target.name]: "" });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className={s.app}>
      <h1 className={s.title}>Create Your Form</h1>
      <form className={s.form} onReset={handleReset}>
        {inputs.map((input) => (
          <Inputs
            key={input.id}
            {...input}
            value={values[input.name]}
            errorMessage={formErrors[input.name]}
            onChange={onChange}
          />
        ))}
        {textarea.map((textarea) => (
          <Textarea
            key={textarea.id}
            {...textarea}
            value={values[textarea.name]}
            errorMessage={formErrors[textarea.name]}
            onChange={onChange}
          />
        ))}
        <div className={s.buttons}>
          <Button name={"Cancel"} />
          <Button onClick={handleSubmit} name={"Save"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
