import React from 'react';
import { TextField } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

export class LocationSearch extends React.Component {
    styles() {
        return {
            root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                height: '40px',
                borderRadius: '20px',
                marginLeft: '20px'
            },
            input: {
                marginLeft: 8,
                flex: 1,
            },
            iconButton: {
                padding: 10,
            },
            divider: {
                width: 1,
                height: 28,
                margin: 4,
            },
        }
    }
    constructor(props) {
        super(props);

        this.state = { value: props.value };
        this.searchCallback = this.searchCallback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    searchCallback(e) {
        console.log("Callback");
        this.props.callback(this.state.value);
        e.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {
        return (
            <form onSubmit={this.searchCallback}>
                <Paper className='root' elevation={1}>
                    <IconButton className='iconButton' aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase className='input' placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                    <IconButton className='iconButton' type='submit' aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

            </form>
        )
    }
} 