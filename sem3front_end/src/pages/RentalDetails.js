import React from 'react';
import { serverURL } from '../config.json';
import auth from '../authorization/auth';
import Booking from './Booking';
import StarRatings from 'react-star-ratings';
import { NavLink, Route } from 'react-router-dom';


export default class RentalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {},
            locations: [],
            initialLocations: [],
            loggedIn: auth.loggedIn, userName: auth.userName, isUser: auth.isUser, isAdmin: auth.isAdmin,
            rating: 2.5
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
            })
        fetch(serverURL + "api/rentals/" + rentalId + "/near-locations/")
            .then(res => {
                return res.json();
            })
            .then(locations => {
                this.setState({
                    locations: locations,
                    initialLocations: locations
                });
            })

    }

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        });

    }

    pushToList = (location) => {
        let allLocations = this.state.initialLocations;
        allLocations.push(location);
        this.setState({
            locations: allLocations,
            initialLocations: allLocations
        })
        this.props.history.push(`${this.props.history.pop}`);
    }

    render() {
        const place = this.state.place;
        const isOrNot = this.state;
        const locations = this.state.locations;
        console.log("locations", this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="thumbnail">
                            <img src={place.imageUrl} alt="" />
                            <div className="caption">
                                <h1>{place.title}</h1>
                                <h3>{place.city}</h3>
                                <p>Description: {place.description} </p>
                                <p>Address: {place.address} </p>
                                <p>Zip: {place.zip} </p>
                                <p>Rating: {place.rating} </p>
                                <p>Latitude: {place.latitude} </p>
                                <p>Longitude: {place.longitude} </p>
                                <StarRatings
                                    rating={this.state.rating}
                                    isSelectable={isOrNot.isAdmin || isOrNot.isUser}
                                    isAggregateRating={true}
                                    changeRating={this.changeRating}
                                    numOfStars={5}
                                    starRatedColor={`rgb(255, 219, 0)`}
                                    starWidthAndHeight={`35px`}
                                    starSpacing={`5px`}
                                    starSelectingHoverColor={`rgb(1, 186, 14)`}
                                />
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
                        {
                            isOrNot.isUser ?
                                (
                                    <NavLink className="btn btn-primary add" to={`${this.props.match.url}/add`} >Add Location</NavLink>
                                ) :
                                (
                                    <div> </div>
                                )
                        }
                    </div>
                    <div>
                        <Route path={`${this.props.match.url}/add`}  render={(props) => {return <Add {...props} onAddLocation={this.pushToList}/>}} />
                    </div>
                    <div className="row">
                        {
                            locations.map((place) => {
                                return (
                                    <div key={place.id} className="col-sm-6 col-md-4" style={{ width: 254 }}>
                                        <div className="thumbnail">
                                            <img src={place.imageUrl} style={{ width: 250 }} alt="Great Place Picture" />
                                            <div className="caption">
                                                <h4>{place.title}</h4>
                                                <p>{place.description}</p>
                                                <p>Latitude: {place.latitude}</p>
                                                <p>Longitude: {place.longitude}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Add extends React.Component {
    constructor(props) {
        super(props);
        const ImportedProps = this.props;
        console.log("importedProps", ImportedProps);
        this.state = {
            title: "",
            description: "",
            latitude: "",
            longitude: "",
            file: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (var key in this.state) {
            formData.append(key, this.state[key]);
        }

        fetch(serverURL + "api/locations", { method: "POST", body: formData })
            .then(res => {
                return res.json();
            })
            .then(location => {
                this.props.onAddLocation(location);
            })

    }
    render() {        
        console.log("theProps", this.props);
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">Add a new location</div>
                        <div className="panel-body">
                            <form className="line" onSubmit={this.handleSubmit}>
                                <input className="add-input" type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                                <input className="add-input" type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                                <input className="add-input" type="number" step="any" min="0" name="latitude" placeholder="Latitude" onChange={this.handleChange} />
                                <input className="add-input" type="number" step="any" min="0" name="longitude" placeholder="Longitude" onChange={this.handleChange} />
                                <input className="inputfile inputfile.has-focus inputfile-1 inputfile-1.has-focus " style={{}} type="file" name="file" id="file" onChange={this.handleChange} />
                                <label className="" for="file">Choose a file</label>
                                <button className="btn btn-success register" type="submit" >Submit</button>
                            </form>
                            <NavLink className="btn btn-danger register cancel-btn" to={`${this.props.history.pop}`}>Cancel </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}