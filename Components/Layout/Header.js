import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { headerTitle } = this.props;
    return (
      <nav className="header_nav">
        <ul className="nav-manu-section">
          <li className="nav-manu">
            <Link className="active1" to="/">
              home
            </Link>
          </li>
          <li className="nav-manu">
            <Link className="active1" to="/contact/add">
              Add Contacts
            </Link>
          </li>
          <li className="nav-manu">
            <Link className="active1" to="/About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
Header.defaultProps = {
  headerTitle: 1
};
Header.propTypes = {
  headerTitle: PropTypes.string.isRequired
};
export default Header;
