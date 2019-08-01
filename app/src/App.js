import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  {makeStyles}  from '@material-ui/core/styles';

// import  {Button, Container} from '@material-ui/core/';

import  Button from '@material-ui/core/Button';
import  Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),

    padding: '1px', 
    color: 'error.main',
    border: '1px solid hotpink',
    fontSize: '10px',
  },
  input: {
    display: 'none',
  },
  container: {
    border: '1px solid purple',
    margin: '1px',
    display: 'flex',
  },
  containerCol: {
    border: '1px solid blue',
    margin: '1px',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const useStyles2 = makeStyles({
  button: {
    margin: '1px',
    padding: '1px', 
    color: 'dodgerblue',
    border: '1px solid hotpink',
    fontSize: '10px',
  },
  input: {
    display: 'none',
  },
  container: {
    border: '1px solid purple',
    margin: '1px',
    display: 'flex',
  },
  containerCol: {
    border: '1px solid blue',
    margin: '1px',
    display: 'flex',
    flexDirection: 'column'
  }
});


function App() {

 const classes = useStyles();
 const classes2 = useStyles2();

  return (
    <React.Fragment>

      <Box
        /*color = 'text.primary' */
        /* bgcolor="secondary.main"  */
        bgcolor = 'lightskyblue'
        fontFamily="h6.fontFamily"
        fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
        p={{ xs: 2, sm: 3, md: 4 }}  
        margin = '10px' 
      >
        <Container maxwidth = 'sm' className = {classes.container} bgcolor="primary.main">
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
          <Button variant="contained">
            Default without className
          </Button>
          <Button className={classes.button} >
            Default without variant
          </Button>
          <Button> bare </Button>
      </Container>
      
      <Container maxwidth = 'sm' className = {classes.containerCol}>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained">
          Default without className
        </Button>
        <Button className={classes.button} >
          Default without variant
        </Button>
        <Button> bare </Button>
      </Container>
    </Box>

    <Box
      bgcolor = 'oldlace'
      margin = '20px'
    >
      <Container maxwidth = 'sm' className = {classes2.container}>
        <Button variant="contained" className={classes2.button}>
          Default
        </Button>
        <Button variant="contained">
          Default without className
        </Button>
        <Button className={classes2.button} >
          Default without variant
        </Button>
        <Button> bare </Button>
      </Container>

    <Container maxwidth = 'sm' className = {classes2.containerCol}>
      <Button variant="contained" className={classes2.button}>
        Default
      </Button>
      <Button variant="contained">
        Default without className
      </Button>
      <Button className={classes2.button} >
        Default without variant
      </Button>
      <Button> bare </Button>
    </Container>
  </Box>

    </React.Fragment>

  );
}

export default App;
