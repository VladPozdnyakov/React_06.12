import React, { Component } from "react";
import s from "./Error.module.css";

class Error extends Component {
  render() {
    return <div className={s.error}>{this.props.error}</div>;
  }
}

export default Error;
