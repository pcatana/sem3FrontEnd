import React from 'react';
import auth from '../authorization/auth';
import { serverURL } from '../config.json';

export default class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: auth.loggedIn, userName: auth.userName, isUser: auth.isUser, isAdmin: auth.isAdmin, token: auth.getToken,
            week: "",
            bookings: [],
            btnStyle: "btn btn-info btn-block theLine book"
        }
        this.getBookings()
    }

    handleChange = (event) => {
        event.preventDefault()
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })

        const component = this

        component.setState({
            btnStyle: "btn btn-info btn-block theLine book"
        })

        this.state.bookings.forEach(
            function(elm) {
                if(elm.week == value)
                    component.setState({
                        btnStyle: "btn btn-info disabled btn-block theLine book"
                    })                    
            })
    }

    getBookings = () => {

        let rentalId = this.props.rentalId

        const options = {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "bearer "+this.state.token
            }
        }

        fetch(serverURL + "api/rentals/" + rentalId + "/booking", options)
        .then(res => {
            return res.json()
        })
        .then(bookings => {
            this.setState({
                bookings: bookings
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.btnStyle == "btn btn-info btn-block theLine book")
        {
            let week = {
                "week": this.state.week
            }

            let rentalId = this.props.rentalId;

            const options = {
                method: 'post',
                body: JSON.stringify(week),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + this.state.token
                }
            }

            //console.log(options.body)

            fetch(serverURL+"api/rentals/" + rentalId + "/booking", options)
            .then(res => {
                return res.json();
            })
            .then(newRating => {
                this.getBookings()
            })
        }
    }

    renderBookingsTable() {

        let result = []
        if(!this.state.bookings.isEmpty)
            this.state.bookings.forEach(booking =>{
                result.push(<tr>
                            <td>{booking.week}</td>
                            <td>{booking.userName}</td>
                        </tr>)
            })
        return result
    }

    render() {
        const isOrNot = this.state;

        if (isOrNot.isAdmin || isOrNot.isUser) {
            return (
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Book Your Holiday</div>
                        <div className="panel-body">
                            <p className="line">Choose your time frame: </p>
                            <form onSubmit={this.handleSubmit}>
                                <input id="date" type="week" name="week" onChange={this.handleChange}/>
                                <input className={this.state.btnStyle} type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="panel panel-info">
                        <div className="panel-heading">Current Bookings</div>
                        <div className="panel-body">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">Week</th>
                                  <th scope="col">Username</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.renderBookingsTable()}
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return "";
        }
    }
}