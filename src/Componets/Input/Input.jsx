import React, { Component } from "react";
import Error from "../Error.jsx/Error";
import s from "./Input.module.css";

class Input extends Component {
  render() {
    return (
      <label className={s.label}>
        {this.props.label}
        <input
          className={s.input}
          placeholder={this.props.placeholder}
          value={this.props.value}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          rows="3"
        />
        <Error error={this.props.error ? this.props.error : ""} />
      </label>
    );
  }
}

export default Input;
