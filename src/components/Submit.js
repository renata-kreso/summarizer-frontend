import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        // TODO: fetch summary from the backend
        const outputText = 'Summary of ' + inputText;
        this.props.handleOutput(outputText);
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