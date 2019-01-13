import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


export const RestTile = (props) => {
    return (
        <div style={{ padding: '30px' }}>
            <Grid container spacing={24}>
                <Grid item xs={11} style={{ background: 'white', border: '1px solid grey', borderRadius: '6px' }}>
                    <div style={{ padding: '10px' }}><Link to={`/rest/${props.rest.id}`}>{props.rest.title}</Link></div>
                    <div style={{ padding: '10px' }}>{props.rest.cuisine}</div>
                </Grid>
                <Grid item xs={1} style={{ padding: '0px' }}>
                    <img style={{ width: '100%', float: 'right' }} src={props.rest.images ? props.rest.images[0] : ''} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <div>{props.rest.open_closed}</div>
                </Grid>
                <Grid item xs={6}>
                    <div>{props.rest.rating}</div>
                </Grid>
            </Grid>
        </div>
    );

} 