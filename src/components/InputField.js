import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(this.props.propKey, e.target.value);
  }

  render() {
    const { type, name } = this.props.properties;
    return <input type={type} name={name} onChange={this.onChange} />;
  }
}

export default InputField;
