import './App.css';
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

let inputText = "";
let summary = "Generated summary";

const textBoxRows = 20;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1>Text summarizer app</h1>
        <Grid container>
          <Grid item xs={6}>
            <h3>Input text</h3>
            <TextField
              id="input-text"
              label="Long text"
              multiline
              rows={textBoxRows}
              variant="outlined"
              fullWidth="true"
              required="true"
              value={inputText}
            />
          </Grid>
          <Grid item xs={6}>
            <h3>TLDR</h3>
            <TextField
              id="output-text"
              multiline
              rows={textBoxRows}
              variant="outlined"
              fullWidth="true"
              disabled="true"
              value={summary}
            />
          </Grid>
        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default App;
