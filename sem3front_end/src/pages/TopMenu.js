import React, { Component } from 'react'
import { Link } from "react-router-dom";
import auth from '../authorization/auth'

class TopMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const logInStatus = auth.isloggedIn ? "Logged in as: " + auth.userName : "";
    //console.log("RENDERING - REMOVE ME",JSON.stringify(this.state));
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top" >
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li className=""><Link className="navbar-brand" to="/home">Holiday Rentals</Link></li>
              </ul>
            </div>
            <div >
              <ul className="nav navbar-nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/places">Rentals</Link></li>
                {auth.isAdmin && (<li><Link to="/admin">Page for Admins</Link></li>)}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="navbar-text" style={{ color: "white" }}>{logInStatus}</li>
                <li>
                  {auth.isloggedIn ?
                    (
                      <Link to="/logout"><span className="glyphicon glyphicon-log-in"></span> Logout</Link>
                    ) :
                    (
                      <Link to="/login">
                        <span className="glyphicon glyphicon-log-out"></span> Login </Link>
                    )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}


export default TopMenu;