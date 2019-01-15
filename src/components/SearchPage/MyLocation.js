import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class MyLocation extends React.Component {
    constructor(props) {
        super(props);

        this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.props.receivedLocation({
                    lat: coords.latitude,
                    lng: coords.longitude
                });
            })
        }
    }

    render() {
        return <Button style={{ 'background': 'linear-gradient(to left,#D98248, #EBBE71)', padding: '6px 36px', borderRadius: '20px', height: '40px', textTransform: 'none', color: 'white'}} onClick={this.getLocation}>
                  <FontAwesomeIcon style={{ padding: '4px' }} icon="map-marker-alt" /> Use my location</Button>
    }
}