import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RestTile = (props) => {
    return (
        <div style={{ padding: '30px' }}>
            <Grid container spacing={24} style={{ background: 'white', boxShadow: '1px 1px 0 0 #ccc', borderRadius: '12px' }}>
                <Grid item xs={9}>
                    <div style={{ padding: '10px', paddingBottom: '3px' }}><FontAwesomeIcon style={{ color: '#558BF7' }} icon="map-marker-alt" />
                        <Link style={{ textDecoration: 'none' }} to={`/rest/${props.rest.id}`}>
                            <span style={{ fontSize: '18px', fontWeight: '500', color: 'black' }}> {props.rest.title}</span>
                        </Link>
                    </div>

                    <div style={{ padding: '10px', paddingTop: '0px', color: '#558BF7', fontWeight: '400' }}>{props.rest.cuisine}</div>
                    {
                        props.rest.references && props.rest.references.length > 0 ?
                            <div style={{ padding: '10px' }}>
                                <FontAwesomeIcon icon="star" />  Featured in {props.rest.references[0].site_name}
                                {props.rest.references.length > 1 ?
                                    <span>.. +{props.rest.references.length - 1}</span>
                                    : ''
                                }
                            </div> : ''
                    }
                </Grid>
                {props.rest.images && props.rest.images.length > 0 ?
                    <Grid item xs={3} style={{ padding: '0px' }}>
                        <img style={{ height: '100%', width: '100%', float: 'right', borderRadius: '0 12px 12px 0' }} src={props.rest.images[0]} />
                    </Grid>
                    : ''
                }
            </Grid>
            <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                <Grid item xs={8} style={{ color: '#558BF7', lineHeight: '20px' }}>
                    <span>{props.rest.open_closed}</span>
                    <FontAwesomeIcon style={{ fontSize: '4px', padding: '4px 12px 4px 12px' }} icon="circle" />
                    <span>3.3 miles away</span>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ display: 'inline-block' }}>

                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}><FontAwesomeIcon style={{ color: '#558BF7' }} icon="walking" /> 12</span>
                        <span style={{ fontSize: '14px' }}>min</span>
                    </div>
                    <div style={{ display: 'inline-block', float: "right" }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '20px' }}><FontAwesomeIcon style={{ color: '#558BF7' }} icon="star" /> {props.rest.rating}</span>
                        <span style={{ fontSize: '14px', lineHeight: '20px' }}>/5</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );

} 