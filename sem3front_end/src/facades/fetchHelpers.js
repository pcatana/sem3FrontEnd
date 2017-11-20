
export default {
  /**
   * @param {*} method POST,GET,DELETE, etc.
   * @param {*} authenticate pass in true, if the authentication heades must be attached
   * @param {*} data , if any, for POST or PUT
   */
  makeOptions: function(method, authenticate, data) {
    let headers = {
      "Content-type": "Application/json"
    };
    if (authenticate) {
      headers.Authorization = `Bearer ${sessionStorage.token}`;
    }
    let options = {
      method,
      headers
    }
    if (data !== undefined) {
      options.body = JSON.stringify(data);
    }
    return options;
  },
  /**
   * Provide a better error message, that the one supplied by fetch
   * @param {*} err 
   */
  addJustErrorMessage(err){
    return  (err.message) === "Failed to fetch" ? `Failed to connect to the server (is the server running?)`: err.message;
  }
}

function makeErrorMsg(data,fallBackMessage){
  return data.code && data.message ? data.message : fallBackMessage;
}

/**
  * Checks fetch response for errors and throws matching exception if error found
  * @param {*} method POST,GET,DELETE, etc.
*/
export const errorChecker = function(res,data){
  if(res.status === 200 && res.ok){
    return;
  }
  if (res.status === 400) {
    throw new Error(makeErrorMsg(data,"Server could not handle the Request"));
  }
  if (res.status === 401 || res.status === 403) {
    const msg = makeErrorMsg(data,"Sorry, you could not be authenticated");
    throw new Error(msg);
  }
  if (res.status === 403) {
    
  }
  if (res.status > 200 || !res.ok) {
    throw new Error(makeErrorMsg(data,"Sorry, you could not be authenticated"));
  }
}