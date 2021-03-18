import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = theme => ({
    footer: {
        position: 'absolute',
        bottom: '0px',
        textAlign: 'center',
        opacity: '50%'
    },
    aboutCentered: {
        textAlign: 'center'
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpen() {
        this.setState({ isModalOpen: true });
    }

    handleClose() {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.footer} maxWidth={false}>
                <Typography gutterBottom>
                    <Link href="#" onClick={this.handleOpen} color="inherit">
                        About
                    </Link>
                </Typography>
                <Dialog
                    open={this.state.isModalOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" className={classes.aboutCentered}>Naslov</DialogTitle>
                    <DialogContent dividers={true}>
                        <DialogContentText id="alert-dialog-slide-description">
                            Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis Opis
                        </DialogContentText>
                        <DialogActions>
                            <Typography>Renata Krešo</Typography>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </Container>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(About);