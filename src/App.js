import React from 'react';
import Grid from '@material-ui/core/Grid';
import { unstable_createMuiStrictModeTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './components/Header.js';
import Input from './components/Input.js';
import Output from './components/Output.js';
import Submit from './components/Submit.js';
import About from './components/About.js'

const darkTheme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark'
  }
});

const textBoxRows = 18;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      outputText: ''
    }
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleOutputValue = this.handleOutputValue.bind(this);
  }

  handleInputValue(value) {
    this.setState({ inputText: value });
  }

  handleOutputValue(value) {
    this.setState({ outputText: value });
  }
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Input textBoxRows={textBoxRows} handleInput={this.handleInputValue} />
            </Grid>
            <Grid item xs={6}>
              <Output textBoxRows={textBoxRows} outputText={this.state.outputText} />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center" className="btn-submit">
            <Submit inputText={this.state.inputText} handleOutput={this.handleOutputValue} />
          </Grid>
        </Container>
        <About />
      </ThemeProvider>
    );
  }
}

export default App;
