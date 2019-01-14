import React, { Component, View } from 'react';

import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import { MapPage } from './MapPage';
import { RestTile } from './RestTile';
import { LocationSearch } from './LocationSearch';
import { MyLocation } from './MyLocation';
import Grid from '@material-ui/core/Grid';

class SearchPage extends Component {
  constructor() {
    super();
    
    this.updateLocation = this.updateLocation.bind(this);
    this.receivedLocation = this.receivedLocation.bind(this);
    this.state = {
      address: 'Chicago',
      lat: null,
      lon: null
    }
  }

  updateLocation(value) {
    console.log("Update location called");
    console.log(value);

    this.setState({
      lat: null,
      lon: null,
      address: value
    });
  }

  receivedLocation(value) {
    console.log("Location received");
    console.log(value);

    this.setState({
      address: '',
      lat: value.lat,
      lon: value.lng
    })
  }

  render() {
    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={this.state}
      >
        {({ loading, error, data = {} }) => {
          if (loading) {
            return <CircularProgress />;
          }

          console.log('DO SOMETHING SMART WITH THIS DATA');
          console.log('data', data);
          console.log('error', error);

          const coordsArray = data.search_restaurants.results.map(x => {
            return {
              lat: x.lat,
              lng: x.lon
            }
          });

          // Make sure we have data
          if (
            data.search_restaurants
            && data.search_restaurants.results
            && data.search_restaurants.results.length > 0
          ) {
            return (
              <Grid container style={{backgroundColor: '#E9F0F9'}}>
                <Grid item xs={12} style={{ height: '100px'}}>
                  <LocationSearch value={this.state.address} callback={this.updateLocation}></LocationSearch>
                  <MyLocation receivedLocation={this.receivedLocation}></MyLocation>
                </Grid>

                <Grid item xs={4} style={{height: 'calc(100vh - 100px)', overflowY: 'scroll'}}>
                {data.search_restaurants.results.map((r) => {
                return <RestTile key={r.id} rest={r}></RestTile>
              })}
                
                </Grid>
                <Grid item xs={8}  style={{height: 'calc(100vh - 100px)'}}>
                <div style={{position: 'relative',width: '100%', height: '100%'}}>
                <MapPage coordsArray={coordsArray}></MapPage>
                </div>
                </Grid>

              </Grid>
            );
          }

          // No Data Return
          return <div>No Results</div>;
        }}
      </Query>
    );
  }
}

export default SearchPage;
