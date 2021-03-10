import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import './App.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const textBoxRows = 20;

function App() {
  const [inputText, setInputText] = React.useState('');
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const [outputText, setOutputText] = React.useState('');

  const submit = () => {
    // TODO: get summary from backend
    setOutputText('Generated summary');
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  }

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
              fullWidth="true"
              required="true"
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
              fullWidth="true"
              disabled="true"
              value={outputText}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className="btn-submit">
          <Button disabled={!inputText} variant="outlined" color="secondary" onClick={submit}>Summarize</Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
