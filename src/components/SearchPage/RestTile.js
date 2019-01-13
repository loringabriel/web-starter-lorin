import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export const RestTile = (props) => {
    console.log(props);
    return (
        <div style={{ padding: '30px' }}>
            <Row style={{ background: 'white', border: '1px solid grey', borderRadius: '6px' }}>
                <Col xs={11}>
                    <div style={{ padding: '10px' }}>{props.rest.title}</div>
                    <div style={{ padding: '10px' }}>{props.rest.cuisine}</div>
                </Col>
                <Col xs={1} style={{padding: '0px'}}>
                    <img style={{ width: '100%', float: 'right' }} src={props.rest.images ? props.rest.images[0] : ''} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>{props.rest.open_closed}</div>
                </Col>
                <Col>
                    <div>{props.rest.rating}</div>
                </Col>
            </Row>
        </div>
    );

} 