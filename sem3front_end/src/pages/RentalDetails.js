import React from 'react';
import { serverURL } from '../config.json';
import auth from '../authorization/auth';
import Booking from './Booking';

export default class RentalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {},
            loggedIn: auth.loggedIn, userName: auth.userName, isUser: auth.isUser, isAdmin: auth.isAdmin
        }
    }
    componentDidMount() {
        let rentalId = this.props.match.params.id;
        fetch(serverURL + "api/rentals/" + rentalId)
            .then(res => {
                return res.json();
            })
            .then(places => {
                this.setState({
                    place: places,
                });
                console.log("place:,", places)

            })
    }

    render() {
        const place = this.state.place;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="thumbnail">
                            <img src={place.imageUrl} alt=""/>
                            <div className="caption">
                                <h1>{place.title}</h1>
                                <h3>{place.city}</h3>
                                <p>Description: {place.description} </p>
                                <p>Address: {place.address} </p>
                                <p>Zip: {place.zip} </p>
                                <p>Rating: {place.rating} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <Booking />
                    </div>
                </div>
                <div>
                    <div className="page-header">
                        <h1>Places near by </h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <img src={place.imageUrl} alt="..." />
                                <div className="caption">
                                    <h3>Thumbnail label</h3>
                                    <p>...</p>
                                    <p><a  className="btn btn-primary" role="button">Button</a> <a  className="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

