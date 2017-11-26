import React from 'react';
import auth from '../authorization/auth';

export default class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn, userName: auth.userName, isUser: auth.isUser, isAdmin: auth.isAdmin
        }
    }

    render() {
        const isOrNot = this.state;
        if (isOrNot.isAdmin || isOrNot.isUser) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Book Your Holiday</div>
                    <div className="panel-body">
                        <p className="line">Choose your time frame: </p>
                        <input id="date" type="date" />
                        <input className="btn btn-success btn-block theLine book" type="button" name="Book" value="Book" />
                    </div>
                </div>
            )
        }
        else {
            return "";
        }
    }
}