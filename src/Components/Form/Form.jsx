import React, { Component } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import s from "./Form.module.css";
import Button from "../Button/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourForm: {
        firstName: "",
        lastName: "",
        birthday: "",
        phone: "",
        website: "",
        aboutMe: "",
        technologies: "",
        lastProject: "",
      },
      formWithErrors: {
        firstName: "",
        lastName: "",
        birthday: "",
        phone: "",
        website: "",
        aboutMe: "",
        technologies: "",
        lastProject: "",
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange = (e) => {
    switch (e.target.name) {
      case "firstName":
      case "lastName":
        if (
          e.target.value &&
          e.target.value[0] !== e.target.value[0].toUpperCase()
        ) {
          this.setState((state) => ({
            formWithErrors: {
              ...state.formWithErrors,
              [e.target.name]:
                e.target.name === "firstName"
                  ? "First name should start with Upper "
                  : "Last name should start with Upper",
            },
          }));
        }
        this.setState((state) => ({
          ourForm: {
            ...state.ourForm,
            [e.target.name]: e.target.value,
          },
        }));
        break;
      case "birthday":
        if (e.target.value && Date.now() < Date.parse(e.target.value)) {
          this.setState((state) => ({
            formWithErrors: {
              ...state.formWithErrors,
              [e.target.name]: "Birthday should be present",
            },
          }));
        }
        this.setState((state) => ({
          ourForm: {
            ...state.ourForm,
            [e.target.name]: e.target.value,
          },
        }));
        break;
      case "phone":
        if (/[a-zа-яё]/i.test(e.target.value[0])) {
          this.setState((state) => ({
            formWithErrors: {
              ...state.formWithErrors,
              [e.target.name]: "Phone should has 12 symbols",
            },
          }));
        }
        this.setState((state) => ({
          ourForm: {
            ...state.ourForm,
            [e.target.name]: e.target.value,
          },
        }));
        break;
      case "website":
        const http = "https://";
        if (
          http.length >= e.target.value.length &&
          !http.startsWith(e.target.value)
        ) {
          return this.setState((state) => ({
            formWithErrors: {
              ...state.formWithErrors,
              [e.target.name]: "Website should start with https://",
            },
          }));
        }
        this.setState((state) => ({
          ourForm: {
            ...state.ourForm,
            [e.target.name]: e.target.value,
          },
          formWithErrors: {
            ...state.formWithErrors,
            [e.target.name]: "",
          },
        }));
        break;
      case "aboutMe":
      case "technologies":
      case "lastProject":
        if (e.target.value && e.target.value.length >= 600) {
          return this.setState((state) => ({
            ourForm: {
              ...state.ourForm,
              [e.target.name]: e.target.value,
            },
            formWithErrors: {
              ...state.formWithErrors,
              [e.target.name]: "You have exceeded the number of characters",
            },
          }));
        }
        this.setState((state) => ({
          ourForm: { ...state.ourForm, [e.target.name]: e.target.value },
          formWithErrors: { ...state.formWithErrors, [e.target.name]: "" },
        }));
        break;
    }
  };

  onReset() {
    const keys = Object.keys(this.state.ourForm);
    const ourForm = keys.reduce((acc, key) => {
      acc = { ...acc, [key]: "" };
      return acc;
    }, {});
    const formWithErrors = { ...ourForm };
    this.setState(() => ({ ourForm, formWithErrors }));
  }
  // onSave = (e) => {};

  render() {
    const inputs = [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "Input First Name",
        type: "text",
        value: this.state.ourForm.firstName,
        onChange: this.onChange,
        error: this.state.formWithErrors.firstName,
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Input Last Name",
        type: "text",
        value: this.state.ourForm.lastName,
        onChange: this.onChange,
        error: this.state.formWithErrors.lastName,
      },
      {
        name: "birthday",
        label: "Birthday",
        placeholder: "Input birthday",
        type: "date",
        value: this.state.ourForm.birthday,
        onChange: this.onChange,
        error: this.state.formWithErrors.birthday,
      },
      {
        name: "phone",
        label: "Phone",
        placeholder: "Input phone",
        type: "text",
        value: this.state.ourForm.phone,
        onChange: this.onChange,
        error: this.state.formWithErrors.phone,
      },
      {
        name: "website",
        label: "Website",
        placeholder: "Input website",
        type: "text",
        value: this.state.ourForm.website,
        onChange: this.onChange,
        error: this.state.formWithErrors.website,
      },
    ];
    const textarea = [
      {
        name: "aboutMe",
        label: "About me",
        placeholder: "Tell about yourself",
        type: "text",
        value: this.state.ourForm.aboutMe,
        onChange: this.onChange,
        error: this.state.formWithErrors.aboutMe,
      },
      {
        name: "technologies",
        label: "Technologies",
        placeholder: "Tell about technologies",
        type: "text",
        value: this.state.ourForm.technologies,
        onChange: this.onChange,
        error: this.state.formWithErrors.technologies,
      },
      {
        name: "lastProject",
        label: "Description last project",
        placeholder: "Tell about your last project",
        type: "text",
        value: this.state.ourForm.lastProject,
        onChange: this.onChange,
        error: this.state.formWithErrors.lastProject,
      },
    ];
    return (
      <div className={s.form}>
        <h1 className={s.title}>Create Your Form</h1>
        <div>
          {inputs.map((input) => {
            return (
              <Input
                label={input.label}
                placeholder={input.placeholder}
                key={input.label}
                name={input.name}
                type={input.type}
                value={input.value}
                onChange={input.onChange}
                error={input.error}
              />
            );
          })}
        </div>
        <div className="dataArea">
          {textarea.map((item) => {
            return (
              <Textarea
                label={item.label}
                placeholder={item.placeholder}
                key={item.label}
                name={item.name}
                type={item.type}
                value={item.value}
                onChange={item.onChange}
                error={item.error}
              />
            );
          })}
        </div>
        <div className={s.buttons}>
          <Button name={"Cancel"} type={"reset"} onClick={this.onReset} />
          <Button name={"Save"} onClick={this.onSave} />
        </div>
      </div>
    );
  }
}

export default Form;
