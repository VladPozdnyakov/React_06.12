import React, { Component } from "react";
import s from "./Textarea.module.css";

class Textarea extends Component {
  render() {
    return (
      <label className={s.label}>
        {this.props.label}
        <textarea
          placeholder={this.props.placeholder}
          className={s.textarea}
          rows="7"
        />
      </label>
    );
  }
}

export default Textarea;
