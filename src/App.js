import React, { Component } from "react";
import {
  basicValidation,
  numberValidation,
  textValidation,
  mailValidation,
  urlValidation
} from "./validation";

import InputField from "./components/InputField";
import ErrorContainer from "./components/ErrorContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: null,
      basicError: null,
      integer: null,
      integerError: null,
      text: null,
      textError: null,
      email: null,
      emailError: null,
      url: null,
      urlError: null
    };
  }

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  validateBasicInput = () => {
    if (basicValidation.isEmpty(this.state.basic)) {
      this.setState({ basicError: "field empty" });
    } else if (basicValidation.hasCharacter(this.state.basic, "@")) {
      this.setState({
        basicError: "should not contain exclamation sign (!)"
      });
    } else if (basicValidation.isGreaterThan(this.state.basic, 10)) {
      this.setState({
        basicError: "should have less than 10 characters"
      });
    } else {
      this.setState({ basicError: null });
    }
  };

  validateIntegerInput = () => {
    if (basicValidation.isEmpty(this.state.integer)) {
      this.setState({ integerError: "field empty" });
    } else if (numberValidation.isDecimal(this.state.integer)) {
      this.setState({
        integerError: "should contain whole number only"
      });
    } else if (!numberValidation.containsRange(this.state.integer, 0, 1000)) {
      this.setState({
        integerError: "should be inside [0,1000] range"
      });
    } else {
      this.setState({ integerError: null });
    }
  };

  validateText = () => {
    if (basicValidation.isEmpty(this.state.text)) {
      this.setState({ textError: "field empty" });
    } else if (basicValidation.isLesserThan(this.state.text, 10)) {
      this.setState({
        textError: "text should be greater than 10 characters"
      });
    } else if (
      !textValidation.isLetterOnly(this.state.text) &&
      !textValidation.isSpecialCharacter(this.state.text)
    ) {
      this.setState({
        textError: "should not contain numeric values"
      });
    } else if (textValidation.isSpecialCharacter(this.state.text)) {
      this.setState({
        textError: "should not contain special characters"
      });
    } else if (textValidation.isUpperCase(this.state.text)) {
      this.setState({
        textError: "should not container upper case letters"
      });
    } else {
      this.setState({ textError: null });
    }
  };

  validateEmail = () => {
    if (!mailValidation.isValidEmail(this.state.email)) {
      this.setState({ emailError: "email not valid" });
      return;
    }
    this.setState({ emailError: null });
  };

  validateUrl = () => {
    if (!urlValidation.isValidUrl(this.state.url)) {
      this.setState({ urlError: "url not valid" });
      return;
    }
    this.setState({ urlError: null });
  };

  validateInput(callback) {
    callback();
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ textAlign: "center", display: "inline" }}>
          <h2>Validation library</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h5>Basic validation</h5>
            <InputField
              propKey="basic"
              properties={{ name: "basic-validation", type: "text" }}
              onChange={this.onChange}
            />
            <button
              className="btn-submit"
              onClick={() => this.validateInput(this.validateBasicInput)}
            >
              Submit
            </button>
            <ErrorContainer message={this.state.basicError} />
          </div>

          <div className="col-sm-4">
            <h5>Whole number validation</h5>
            <InputField
              propKey="integer"
              properties={{ name: "integer-validation", type: "number" }}
              onChange={this.onChange}
            />
            <button
              className="btn-submit"
              onClick={() => this.validateInput(this.validateIntegerInput)}
            >
              Submit
            </button>
            <ErrorContainer message={this.state.integerError} />
          </div>

          <div className="col-sm-4">
            <h5>Text validation</h5>
            <InputField
              propKey="text"
              properties={{ name: "text-validation", type: "text" }}
              onChange={this.onChange}
            />
            <button
              className="btn-submit"
              onClick={() => this.validateInput(this.validateText)}
            >
              Submit
            </button>
            <ErrorContainer message={this.state.textError} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h5>Mail validation</h5>
            <InputField
              propKey="email"
              properties={{ name: "mail-validation", type: "email" }}
              onChange={this.onChange}
            />
            <button
              className="btn-submit"
              onClick={() => this.validateInput(this.validateEmail)}
            >
              Submit
            </button>
            <ErrorContainer message={this.state.emailError} />
          </div>

          <div className="col-sm-4">
            <h5>Url validation</h5>
            <InputField
              propKey="url"
              properties={{ name: "url-validation", type: "text" }}
              onChange={this.onChange}
            />
            <button
              className="btn-submit"
              onClick={() => this.validateInput(this.validateUrl)}
            >
              Submit
            </button>
            <ErrorContainer message={this.state.urlError} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
