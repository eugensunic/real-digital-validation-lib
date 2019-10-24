import React, { Component } from "react";

class ErrorContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.message) return <div></div>;
    return <div className="error-container">{this.props.message}</div>;
  }
}

export default ErrorContainer;
