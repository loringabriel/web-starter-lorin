import React from 'react';
import { TextField } from '@material-ui/core';

export class LocationSearch extends React.Component {

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
                <TextField
                    id="outlined-uncontrolled"
                    label="Search"
                    margin="normal"
                    variant="outlined"
                    value={this.state.value} onChange={this.handleChange}
                />

                <input type="submit" value="Submit" />
            </form>
        )
    }
} 