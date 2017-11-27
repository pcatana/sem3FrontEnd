import React from 'react';
import auth from '../authorization/auth';

export default class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn, userName: auth.userName, isUser: auth.isUser, isAdmin: auth.isAdmin,
            week: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log("week:", this.state.week);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("week after submit:", this.state.week);
    }

    render() {
        const isOrNot = this.state;
        if (isOrNot.isAdmin || isOrNot.isUser) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Book Your Holiday</div>
                    <div className="panel-body">
                        <p className="line">Choose your time frame: </p>
                        <form onSubmit={this.handleSubmit}>
                            <input id="date" type="week" name="week" onChange={this.handleChange}/>
                            <input className="btn btn-success btn-block theLine book" type="submit" />
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return "";
        }
    }
}