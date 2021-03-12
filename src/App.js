import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { unstable_createMuiStrictModeTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';
import axios from 'axios';

import './App.css';

const darkTheme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark'
  }
});

const textBoxRows = 20;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [inputText, setInputText] = React.useState('');
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const [outputText, setOutputText] = React.useState('');

  const submit = async () => {
    axios.post('http://127.0.0.1:5000/summarize', { inputText }).then(res => {
      if (res.status === 200 && res.data)
        setOutputText(res.data);
      else
        setOutputText('Unable to produce a summary.');
    });
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          Text summarizer app
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
              value={inputText}
              onChange={handleChange}
            />
          </Grid>
          <Grid container item xs={6} justify="space-between">
            <Grid item>
              <Typography variant="h5" gutterBottom>
                TLDR
            </Typography>
            </Grid>
            <Grid item>
              <Tooltip aria-label="copy" title="Copy to clipboard">
                <Button onClick={copyToClipboard} >
                  <AssignmentOutlinedIcon />
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
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className="btn-submit">
          <Button disabled={!inputText} variant="outlined" color="secondary" onClick={submit}>Summarize</Button>
        </Grid>
      </Container>
      <Container className="footer">
        <Typography gutterBottom>
          <Link href="#" onClick={handleClickOpen} color="inherit">
            About
          </Link>
        </Typography>
        <Dialog
          open={isModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Sažimanje teksta pomoću pokazivač-generator neuronskih mreža"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              TODO: Opis sustava
          </DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
