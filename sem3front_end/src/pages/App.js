import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";
import Register from './Register';
import Places from './Places';
import RentalDetails from "./RentalDetails";


function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
        <Route path="/RentalDetails/:id" component={RentalDetails} />
        <Route path="/places" component={Places} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;