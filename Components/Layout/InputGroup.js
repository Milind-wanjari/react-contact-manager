import React, { Component } from "react";
import PropTypes from "prop-types";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      label: "",
      placeholder: "",
      value: "",
      error: "",
      onChange:''
    };
  }
  render() {
    const { type, name, label, placeholder, value, error,onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name} className="form-label">{label}</label>
        <input
          type={type}
          name={name}
          className="form-input"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className={"erorr "} >{error}</div>
      </div>
    );
  }
}
InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};
export default InputGroup;
