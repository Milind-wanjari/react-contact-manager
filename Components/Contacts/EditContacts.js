import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContact, editContact } from "../../Actions/Actions";
import InputGroup from "../Layout/InputGroup";

class EditContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      username: "",
      error: {},
      id: this.props.match.params.id,
      contact: {}
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }  
  
  static getDerivedStateFromProps(nextProps,nextState) {    
    return {
      contact: nextProps.contact
    };
  }
  //set data for input field
  componentDidUpdate(nextProps, prevState) {
    const {contact} = this.props;
    if(nextProps.contact !== contact){
      const { name, email, phone, username } = this.props.contact;
      this.setState({
        name, email, phone, username
      })
    }
  }

  formUpdate = e => {
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
    const updContact = {
      id,
      name,
      email,
      phone,
      username
    };
    const { id } = this.props.match.params;

    //// UPDATE CONTACT ////
    this.props.editContact(updContact, id);

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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, phone, username, error } = this.state;
    return (
      <div className="edit_contact">
        <form onSubmit={this.formUpdate}>
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
EditContacts.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    contact: state.contact,
    name: state.contact.name
  };
};
export default connect(
  mapStateToProps,
  { getContact, editContact }
)(EditContacts);
