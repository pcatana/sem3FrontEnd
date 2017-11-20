import React, { Component } from 'react'
import adminData from "../facades/adminFacade";

class AdminPage extends Component {

  constructor() {
    super();
    this.state = {
      data: "",
      users: [],
      errData: "",
      errUsers: ""
    }
  }

  onEdit = (user) => {
    adminData.editUser((e) => {
      if (e) {
        return this.setState({ errData: e.err })
      }
      this.setState({ errData: ""});
    },user);
  }

  onDelete = (username) => {
    adminData.deleteUser((e) => {
      if (e) {
        return this.setState({ errData: e.err })
      }
      let users = this.state.users.filter((user) => user.USER_NAME !== username)
      this.setState({ errData: "", users });
    },username);
  }

  onChange = (e, index) => {
    const propertyName = e.target.name;
    let value;
    if(propertyName !== "USER_ROLE")
      value = e.target.value;
    else
      value = e.target.value.split(",");
    const finalValue = value;
    let users = this.state.users;
    users[index][propertyName] = value;
    this.setState({ users });
  }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    adminData.getData((e, data) => {
      if (e) {
        return this.setState({ errData: e.err })
      }
      this.setState({ errData: "", data });
    });

    adminData.getUsers((e, users) => {
      if (e) {
        return this.setState({ errUsers: e.err })
      }
      this.setState({ errUsers: '', users });
    });

  }

  render() {
    return (
      <div>
        <h2>Admins</h2>
        <p>This message is fetched from the server if you were properly logged in</p>
        <div className="msgFromServer">
          {this.state.data}
        </div>
        <div className="">
          <h3>Current Users</h3>
          {
            <table className="table">
              <tbody>
                <tr>
                  <th> User</th>
                  <th> Roles</th>
                  <th> Edit</th>
                  <th> Delete</th>
                </tr>
                {this.state.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td >
                      {user.USER_NAME}
                      </td>
                      <td >
                      <input name="USER_ROLE" value={user.USER_ROLE} onChange={(e) => this.onChange(e, index)} className="form-control"  placeholder={user.USER_ROLE} />
                      </td>
                      <td ><button className="btn btn-lg btn-black btn-block" onClick={() => this.onEdit(user)}>EDIT</button> </td>
                      <td ><button className="btn btn-lg btn-black btn-block" onClick={() => this.onDelete(user.USER_NAME)}>DELETE</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          }

        </div>
        {this.state.err && (
          <div className="alert alert-danger errmsg-left" role="alert">
            {this.state.errData}
          </div>
        )}
      </div>
    )
  }
}

export default AdminPage;