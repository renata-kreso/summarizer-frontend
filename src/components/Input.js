import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            inputText: value
        });
        this.props.handleInput(value);
    }

    render() {
        const { textBoxRows } = this.props;

        return (
            <div>
                <Typography variant="h5" gutterBottom>
                    Input text
                </Typography>
                <TextField
                    id="input-text"
                    label="Long text"
                    multiline
                    rows={textBoxRows}
                    variant="outlined"
                    fullWidth={true}
                    required={true}
                    color="secondary"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

Input.propTypes = {
    textBoxRows: PropTypes.number,
    handleInput: PropTypes.func.isRequired
}

Input.defaultProps = {
    textBoxRows: 18
};

export default Input;
