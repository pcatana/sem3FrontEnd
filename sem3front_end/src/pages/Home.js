import React, { Component } from 'react'
import auth from '../authorization/auth'
import { observer } from "mobx-react";

const Home = observer(class Home extends Component {

  render() {
    return (
      <div>
        <h3>Welcome to this demo project, meant as a frontend-seed for third semester at:<br />
          <a href="https://www.cphbusiness.dk/english/study-programmes/ap-degree/computer-science/">cphbusiness.dk - ComputerScience</a>
        </h3>
        <h4>This project assumes it's' corresponding backend is running</h4>
        <h4>This project assumes it's corresponding backend is running on port 8084 (can be changed in package.json)</h4>
        <h3>You are currently <b> {!auth.loggedIn && 'not'} logged in.</b></h3>
        <p>Try and navigate (without being logged-in) to the menus:</p>
        <ul>
          <li>Page for Users (try to login with: username= <b>user</b>, password = <b>test</b>)</li>
          <li>Page form Admins (try to login with: username= <b>admin</b>, password = <b>test</b>)</li>
        </ul>
        <br/>
        <p>Log-in with the credintials given above to see "authentication in action"</p>
    </div>
    )
  }
})

export default Home;


