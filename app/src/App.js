import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

// import  {Button, Container} from '@material-ui/core/';

import  Button from '@material-ui/core/Button';
import  Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'dodgerblue',
    border: '1px solid hotpink',
  },
  input: {
    display: 'none',
  },
}));

function App() {

 const classes = useStyles();

  return (
    <Container maxwidth = 'sm'>
        <Button variant="contained" className={classes.button}>
          Default
      </Button>
      <Button variant="contained">
        Default without className
      </Button>
      <Button className={classes.button} >
      Default without variant
    </Button>

    </Container>
  );
}

export default App;
