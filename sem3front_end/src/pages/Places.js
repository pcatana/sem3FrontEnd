import React from 'react';
import { Link, Route } from 'react-router-dom'
import { serverURL } from '../config.json'
import auth from '../authorization/auth'

export default class Places extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            initialPlaces: []
        }
    }


    filterList =  (event) => {
        var updatedList = this.state.initialPlaces;
        var value = event.target.value.toLowerCase();
        updatedList = updatedList.filter(function (place) {
            return place.city.toLowerCase().search(value) !== -1
        });
        this.setState({ places: updatedList })
    }


    componentDidMount() {
        fetch(serverURL + "api/rentals")
            .then(res => {
                return res.json();
            })
            .then(places => {
                this.setState({
                    places: places,
                    initialPlaces: places
                });

            })

    }

    filterList = (event) => {
        var updatedList = this.state.initialPlaces;
        var value = event.target.value.toLowerCase();
        updatedList = updatedList.filter(function (place) {
            return place.city.toLowerCase().search(value) !== -1 ||
                place.description.toLowerCase().search(value) !== -1
        });
        this.setState({ places: updatedList });
    }

    pushToList = (place) => {
        let allPlaces = this.state.initialPlaces;
        allPlaces.push(place);
        this.setState({
            places: allPlaces,
            initialPlaces: allPlaces
        })
        this.props.history.push("/places");
    }

    shortenDescription = (description) => {
        if(description.length > 150 ) {
            return description = description.substring(0, 149)+"...";
        }
        else {
            return description;
        }
    }

    render() {
        const places = this.state.places;
        console.log("places: ", places);
        return (
            <div className="container">
                <div className="line">
                    <input className="theLine input" type="text" placeholder="search" onChange={this.filterList} />
                    <AddPlace className="theLine" isOrNot={this.state} />
                </div>
                <div>
                    <Route path="/places/add" render={() => { return <Add onAddPlace={this.pushToList} /> }} />
                </div>

                <div className="row">
                    {
                        places.map((place) => {
                            return (
                                <div key={place.id} className="col-sm-6 col-md-4" style={{ width: 254 }}>
                                    <div className="thumbnail">
                                        <img src={place.imageUrl} style={{ width: 214, height: 142 }} alt=""/>
                                        <div className="caption" style={{height: 417}}>
                                            <h4>{place.title}</h4>
                                            <p>{place.city}</p>
                                            <p style={{height: 120}}>{this.shortenDescription(place.description)}</p>
                                            <p>ZIP: {place.zip}</p>
                                            <p>Rating: {place.rating}</p>
                                            <p><Link className="btn btn-info btn-sm" to={`RentalDetails/${place.id}`}>Learn more</Link></p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }
}

const AddPlace = (props) => {
    let isOrNot = props.isOrNot;
    if ( isOrNot.isAdmin) {
        return <Link className="btn btn-primary add" to="/places/add">Add Place</Link>
    } else {
        return ""
    }
}

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            city: "",
            address: "",
            zip: "",
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

        fetch(serverURL + "api/rentals", { method: "POST", body: formData })
            .then(res => {
                return res.json();
            })
            .then(place => {
                this.props.onAddPlace(place);
            })

    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">Add a new rental</div>
                        <div className="panel-body">
                            <form className="line" onSubmit={this.handleSubmit}>
                                <input className="add-input" type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                                <input className="add-input" type="text" name="city" placeholder="City" onChange={this.handleChange} />
                                <input className="add-input" type="text" name="address" placeholder="Address" onChange={this.handleChange} />
                                <input className="add-input" type="text" name="zip" placeholder="Zip" onChange={this.handleChange} />
                                <input className="add-input" type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                                <input className="add-input" type="number" step="any" min="0" name="latitude" placeholder="Latitude" onChange={this.handleChange} />
                                <input className="add-input" type="number" step="any" min="0" name="longitude" placeholder="Longitude" onChange={this.handleChange} />
                                <input className="inputfile inputfile.has-focus inputfile-1 inputfile-1.has-focus " style={{}} type="file" name="file" id="file" onChange={this.handleChange} />
                                <label className="" for="file">Choose a file</label>
                                <button className="btn btn-success register" type="submit" >Submit</button>
                            </form>
                            <Link className="btn btn-danger register cancel-btn" to="/places">Cancel </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}