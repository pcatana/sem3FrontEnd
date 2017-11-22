import fetchHelper, {errorChecker} from "./fetchHelpers"
import config from "../config.json"
const URL = config.serverURL

class UserStore {
  constructor() {
    this._data = "";
    this._errorMessage = "";
  }

  getData = (callback) => {
    this._errorMessage = "";
    this._messageFromServer = "";

    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server

    const options = fetchHelper.makeOptions("GET", true);

    fetch(URL + "api/demouser", options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);
        callback(null, data.message)
      }).catch(err => {
        console.log(JSON.stringify(err))
          callback({ err: fetchHelper.addJustErrorMessage(err) })
      })
  }

  getRandomNumber = (callback) => {
    this._errorMessage = "";
    this._messageFromServer = "";

    let resFromFirstPromise=null;  //Pass on response the "second" promise so we can read errors from server

    const options = fetchHelper.makeOptions("GET", true);

    fetch(URL + "api/demouser/random", options)
      .then((res) => {
        resFromFirstPromise = res;
        return res.json();
      }).then((data) => {
        errorChecker(resFromFirstPromise,data);        
        callback(null, data)
      }).catch(err => {
        console.log(JSON.stringify(err))
          callback({ err: fetchHelper.addJustErrorMessage(err) })
      })
  }
}

let userStore = new UserStore();

//Only for debugging
//window.userStore = userStore;
export default userStore;
