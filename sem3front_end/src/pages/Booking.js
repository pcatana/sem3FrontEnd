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
            bookingError: "",
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
            bookingError: "",
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
            method: 'GET',
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

    deleteBooking = (weekToDelete) => {
        let week = {
            "week": weekToDelete
        }

        console.log(week)

        let rentalId = this.props.rentalId;

        const options = {
            method: 'DELETE',
            body: JSON.stringify(week),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + this.state.token
            }
        }

        //console.log(options.body)

        fetch(serverURL+"api/rentals/" + rentalId + "/booking", options)
        .then(() => {
            this.getBookings()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            bookingError: "It's already booked, are you blind?"
        })
        if(this.state.btnStyle == "btn btn-info btn-block theLine book")
        {
            this.setState({
                bookingError: "",
            })
            let week = {
                "week": this.state.week
            }

            let rentalId = this.props.rentalId;

            const options = {
                method: 'POST',
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
        console.log(this.state.bookings)
        if(!this.state.bookings.isEmpty)
            this.state.bookings.forEach(booking =>{
                if(booking.userName == this.state.userName)
                    result.push(<tr>
                                <td>{booking.week}</td>
                                <td>{booking.userName}</td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteBooking(booking.week)}>Delete</button></td>
                            </tr>)
                else
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
                                <input className={this.state.btnStyle} value="Book" type="submit" />
                            </form>
                            {
                            this.state.bookingError ?
                                (   <div>
                                        <br/>
                                        <p>{this.state.bookingError}</p>
                                    </div>
                                ) :
                                (<div> </div>)
                            }
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
                                  <th scope="col">Delete</th>
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