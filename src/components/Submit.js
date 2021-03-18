import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = theme => ({
    buttonMargin: {
        marginTop: '20px'
    }
});

class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { inputText } = this.props;
        let outputText;
        axios.post(process.env.REACT_APP_API_ROUTE + '/summarize', { inputText }).then(res => {
            if (res.status === 200 && res.data) {
                outputText = res.data;
            } else {
                outputText = 'Unable to produce a summary.';
            }
            this.props.handleOutput(outputText);
        });
    }

    render() {
        const { inputText, classes } = this.props;
        return (
            <Button disabled={!inputText} onClick={this.handleSubmit} variant="outlined" color="secondary" className={classes.buttonMargin}>Summarize</Button>
        );
    }
}

Submit.propTypes = {
    inputText: PropTypes.string.isRequired,
    handleOutput: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(Submit);