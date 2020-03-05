import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import AllContacts from "./Components/Contacts/AllContacts";
import AddContact from "./Components/Contacts/AddContact";
import EditContacts from "./Components/Contacts/EditContacts";
import About from "./Components/Pages/About";
import "./Components/CSS/style.css";

class BaseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header headerTitle={"contact manager"} />
            <Switch>
              <Route exact path="/" component={AllContacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContacts} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default BaseApp;
