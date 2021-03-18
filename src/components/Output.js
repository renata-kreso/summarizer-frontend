import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(value) {
        navigator.clipboard.writeText(value);
    }

    render() {
        const { textBoxRows, outputText } = this.props;

        return (
            <div>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Typography variant="h5" gutterBottom>TLDR</Typography>
                    <Tooltip aria-label="copy" title="Copy to clipboard">
                        <Button>
                            <AssignmentOutlinedIcon onClick={() => this.copyToClipboard(outputText)} />
                        </Button>
                    </Tooltip>
                </Grid>
                <TextField
                    id="output-text"
                    label="Summary"
                    multiline
                    rows={textBoxRows}
                    variant="outlined"
                    fullWidth={true}
                    disabled={true}
                    value={outputText}
                />
            </div>
        );
    }
}

Output.propTypes = {
    outputText: PropTypes.string.isRequired,
    textBoxRows: PropTypes.number
};

Output.defaultProps = {
    textBoxRows: 18
};

export default Output;
