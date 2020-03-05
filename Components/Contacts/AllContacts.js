import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contacts from "./Contacts";
import SearchContact from "./SearchContact";
import { allContact, searchContact } from "../../Actions/Actions";

class AllContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serach: false
    };
  }
  componentDidMount() {
    this.props.allContact();
  }
  render() {
    const { contacts } = this.props;
    return (
      <div className="all_contacts">
        <h3>Contact List</h3>
        <SearchContact cotactList={contacts} />
        <div className="user_info-container">
          {contacts.map(item => {
            return <Contacts key={item.id} contactList={item} />;
          })}
        </div>
      </div>
    );
  }
}
AllContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  allContact: PropTypes.func.isRequired
  
};
const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};
export default connect(
  mapStateToProps,
  { allContact, searchContact }
)(AllContacts);
