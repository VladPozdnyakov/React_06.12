import React, { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return <button className={s.button}>{this.props.name}</button>;
  }
}

export default Button;
