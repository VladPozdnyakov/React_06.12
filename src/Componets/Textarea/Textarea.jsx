import React, { Component } from "react";
import Error from "../Error.jsx/Error";
import s from "./Textarea.module.css";

class Textarea extends Component {
  render() {
    return (
      <label className={s.label}>
        {this.props.label}
        <textarea
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          className={s.textarea}
          rows="7"
          onChange={this.props.onChange}
        />
        <div className={s.counter}>
          {this.props.value?.length > 600 ? 0 : 600 - this.props.value.length}
          /600
        </div>
        <Error error={this.props.error ? this.props.error : ""} />
      </label>
    );
  }
}

export default Textarea;
