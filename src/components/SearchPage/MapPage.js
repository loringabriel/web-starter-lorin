import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';


class MapContainer extends React.Component {
  componentDidMount() {
    console.log("Mount complete")
    this.setState({

        zoomToMarkers: map => {
            //console.log("Zoom to markers");
            const bounds = new window.google.maps.LatLngBounds();
            map.props.children.forEach((child) => {
                if (child.type === Marker) {
                    bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
                }
            })
            map.fitBounds(bounds);
        }
    })
}

  render() {
    console.log("KEy", process.env.REACT_APP_GOOGLE_API_KEY);
    const style = {
      width: '100%',
      height: '100%'
    }

    const bounds = new window.google.maps.LatLngBounds();
    for (var coord of this.props.coordsArray) {
      console.log(coord);
      bounds.extend(coord);
    }

    return (
        <Map style={style}
          ref='map'
          google={this.props.google} zoom={14} bounds={bounds}>
          {this.props.coordsArray.map((coord, index) =>
            <Marker key={index} position={coord}>
            </Marker>
          )}
        </Map>
    );
  };
}

export const MapPage = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
