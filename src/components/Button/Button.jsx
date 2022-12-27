import React, { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button
        className={s.button}
        name={this.props.name}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
