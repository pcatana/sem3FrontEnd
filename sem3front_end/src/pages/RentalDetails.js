import React from 'react';
import { serverURL } from '../config.json';



export default class RentalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {}
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
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={place.imageUrl} />
                            <div className="caption">
                                <h1>{place.city}</h1>
                                <p>Description: {place.description} </p>
                                <p>Address: {place.address} </p>
                                <p>Zip: {place.zip} </p>
                                <p>Rating: {place.rating} </p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

        )
    }
}