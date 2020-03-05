import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addContact } from "../../Actions/Actions";
import InputGroup from "../Layout/InputGroup";

class AddContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      username: "",
      error: {}
    };
  }
  updateContact = e => {
    e.preventDefault();
    const { name, email, phone, username } = this.state;
    if (name === "") {
      this.setState({ error: { name: "name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { email: "email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "phone is required" } });
      return;
    }
    if (username === "") {
      this.setState({ error: { username: "username is required" } });
      return;
    }
    const newContact = {
      name,
      email,
      phone,
      username
    };
    //// UPDATE CONTACT ////
    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      username: "",
      error: {}
    });
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, username, error } = this.state;
    return (
      <div className="edit_contact">
        <form onSubmit={this.updateContact}>
          <InputGroup
            label="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.onChange}
            error={error.name}
          />
          <InputGroup
            label="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.onChange}
            error={error.email}
          />
          <InputGroup
            label="phone"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={this.onChange}
            error={error.phone}
          />
          <InputGroup
            label="User name"
            name="username"
            placeholder="User name"
            value={username}
            onChange={this.onChange}
            error={error.username}
          />
          <input type="submit" value="Save" className="btn save_btn" />
        </form>
      </div>
    );
  }
}
AddContacts.propTypes = {
  addContact: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    contact: state.contact
  };
};
export default connect(
  mapStateToProps,
  { addContact }
)(AddContacts);
