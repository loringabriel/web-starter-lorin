import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { Button } from '@material-ui/core';

export class MyLocation extends React.Component {
    constructor(props) {
        super(props);

        this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                // this.setState({
                //     currentLocation: {
                //         lat: coords.latitude,
                //         lng: coords.longitude
                //     }
                // })
                this.props.receivedLocation({
                    lat: coords.latitude,
                    lng: coords.longitude
                });
            })
        }
    }

    render() {
        return <Button onClick={this.getLocation}>Use my location</Button>
    }
}