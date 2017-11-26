import React, { Component } from "react";
import auth from "../authorization/auth";

export default class Logout extends Component {

  componentDidMount() {
    auth.logout();
    setTimeout(() => this.props.history.push('/'), 2400);
  }

  render() {
    return (      
      <div className="container alert alert-success logout">
        <p>You are now logged out</p>
      </div>
    )
  }
}