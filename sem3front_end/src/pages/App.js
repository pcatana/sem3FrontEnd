import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";
import Register from './Register';
import Places from './Places';


function App() {
  return (
    <div className="container">
      <TopMenu />
      <Switch>
        <Route path="/places" component={Places}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;