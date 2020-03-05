import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchContact } from "../../Actions/Actions";

class SearchContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.searchContact(this.state.searchString);
  }
  onChange = e => {
    this.setState({ searchString: e.target.value });
    const search = e.target.value.trim().toLowerCase();
    this.props.searchContact(search);
  };
  render() {
    return (
      <div className="user_serch-container">
        <div className="form-group">
          <label htmlFor="search" className="form-label">
            Search by Name :
          </label>
          <input
            type="text"
            name="search"
            className="form-input"
            value={this.state.searchString}
            placeholder="type name here"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
SearchContact.propTypes = {
  searchContact: PropTypes.func.isRequired
};
export default connect(
  null,
  { searchContact }
)(SearchContact);
