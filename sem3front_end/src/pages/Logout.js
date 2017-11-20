import React, {Component} from "react";
import auth from "../authorization/auth";

export default class Logout extends Component{
  
  componentDidMount() {
    auth.logout();
  }

  render() {
    return <p>You are now logged out</p>
  }
}