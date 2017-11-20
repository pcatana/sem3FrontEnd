import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import auth from "../authorization/auth";

class Register extends Component {
    constructor() {
        super();
        this.state = { err: "", status: '', user: { username: "", password: "" } }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.state.user.username;
        const pass = this.state.user.password;
        auth.register(user, pass, (err) => {
            if (err) {
                return this.setState({ err: err.errorMessage });
                
            }
            else {
                setTimeout(() => this.props.history.push('/login'), 3000);
                return this.setState({ status: 'Successful registration, please log in' });
            }            
            
        });        
    }

    onChange = (e) => {
        const propertyName = e.target.id;
        const value = e.target.value;
        let user = this.state.user;
        user[propertyName] = value;
        this.setState({ user });
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Sign Up</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="text" value={this.state.user.username} onChange={this.onChange} className="form-control" id="username" placeholder="User Name" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" value={this.state.user.password} onChange={this.onChange} id="password" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-success btn-block" type="submit">Register</button>
                    <br />
                </form>
                {this.state.err && (
                    <div className="alert alert-danger errmsg" role="alert">
                        {this.state.err}
                    </div>
                )}
                {this.state.status && (
                    <div className="alert alert-success" role="alert">
                        {this.state.status}
                    </div>
                )}
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default Register;
