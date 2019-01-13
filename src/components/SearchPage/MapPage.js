import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';


class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div style={style}>
        <Map
          google={this.props.google} zoom={14}>
          {this.props.coordsArray.map((coord, index) =>
            <Marker key={index} position={coord}>
            </Marker>
          )}
        </Map>
      </div>
    );
  };
}

export const MapPage = GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer)
