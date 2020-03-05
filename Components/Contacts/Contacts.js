import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteContact } from "../../Actions/Actions";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.showUserInfo = this.showUserInfo.bind(this);
  }
  deleteUser = id => {
    this.props.deleteContact(id);
  };
  editUser = () => {};
  showUserInfo = () => {
    this.setState({
      showInfo: true
    });
  };

  render() {
    const { id, name, email, username, phone } = this.props.contactList;
    const { showInfo } = this.state;
    return (
      <div className="user_info">
        <div>Name : {name}</div>
        {showInfo ? (
          <div>
            <div>Email : {email}</div>
            <div>Phone : {phone}</div>
            <div>User Name : {username}</div>
          </div>
        ) : null}
        <div className="user_action_icon">
          <i className="user_info_icon" onClick={this.showUserInfo}>
            Info
          </i>
          <Link className="edit_url" to={`/contact/edit/${id}`}>
            <i className="edit_icon">Edit</i>
          </Link>
          <i className="delete_icon" onClick={this.deleteUser.bind(this, id)}>
            Delete
          </i>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { deleteContact }
)(Contacts);
