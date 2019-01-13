import React from 'react';
import { Row, Col } from 'react-grid-system';
import { BrowserRouter as Link } from "react-router-dom";


export const RestTile = (props) => {
    console.log(props);
    return (
        <div style={{ padding: '30px' }}>
            <Row style={{ background: 'white', border: '1px solid grey', borderRadius: '6px' }}>
                <Col xs={11}>
                    <div style={{ padding: '10px' }}><Link to={`/rest/${props.rest.id}`}>{props.rest.title}</Link></div>
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