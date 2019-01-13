import React, { Component, View } from 'react';

import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import { MapPage } from './MapPage';
import { RestTile } from './RestTile';
import Grid from '@material-ui/core/Grid';

class SearchPage extends Component {
  render() {
    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={{
          address: 'Chicago'
        }}
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
              <Grid container>
                <Grid item xs={4} style={{height: '100vh', overflow: 'scroll'}}>
                {data.search_restaurants.results.map((r) => {
                return <RestTile key={r.id} rest={r}></RestTile>
              })}
                
                </Grid>
                <Grid item xs={8}>
                <MapPage coordsArray={coordsArray}></MapPage>
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
