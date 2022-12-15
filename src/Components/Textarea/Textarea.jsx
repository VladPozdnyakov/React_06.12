import React, { Component } from "react";
import s from "./Textarea.module.css";

class Textarea extends Component {
  render() {
    return (
      <label className={s.label}>
        {this.props.label}
        <textarea
          maxLength={240}
          placeholder={this.props.placeholder}
          className={s.textarea}
          rows="7"
        />
      </label>
    );
  }
}

export default Textarea;
