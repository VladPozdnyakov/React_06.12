import React, { Component } from "react";
import s from "./Input.module.css";

class Input extends Component {
  render() {
    return (
      <label className={s.label}>
        {this.props.label}
        <input className={s.input} placeholder={this.props.placeholder} />
      </label>
    );
  }
}

export default Input;
