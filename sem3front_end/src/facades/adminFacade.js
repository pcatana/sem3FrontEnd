import fetchHelper, {errorChecker} from "./fetchHelpers"
import config from "../config.json"
const URL = config.serverURL

class AdminStore {
  constructor() {
    this._data = "";
    this._errorMessage = "";
  }

  getData = (cb) => {
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("GET", true);
    fetch(URL + "api/demoadmin", options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        if (cb) {
          cb(null, data.message)
        }
      }).catch(err => {
        if (cb) {
          cb({ err: fetchHelper.addJustErrorMessage(err) })
        }
      })
  }

  getUsers = (cb) => {
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("GET", true);
    fetch(URL + "api/demoadmin/users", options)
      .then((res) => {
        resFromFirstPromise = res; 
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        if (cb) {
          cb(null, data.users)
        }
      }).catch(err => {
        if (cb) {
          cb({ err: fetchHelper.addJustErrorMessage(err) })
        }
      })
  }

  editUser = (cb,user) => {
    console.log(user.USER_ROLE)
    let data = user.USER_ROLE.map( (role) => { return {roleName:role} } )

    console.log(data);
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("PUT", true, data);
    fetch(URL + "api/users/" + user.USER_NAME + "/roles" , options)
      .then((res) => {
        resFromFirstPromise = res; 
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        if (cb) {
          cb(null, data.users)
        }
      }).catch(err => {
        if (cb) {
          cb({ err: fetchHelper.addJustErrorMessage(err) })
        }
      })
  }

  deleteUser = (cb, username) => {
    this._errorMessage = "";
    this._messageFromServer = "";
    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server
    const options = fetchHelper.makeOptions("DELETE", true);
    fetch(URL + "api/users/" + username, options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        cb(null)
      }).catch(err => {
        cb({ err: fetchHelper.addJustErrorMessage(err) })
      })
  }

}

let adminStore = new AdminStore();

//Only for debugging
//window.userStore = userStore;
export default adminStore;