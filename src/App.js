import React, {useState} from 'react';
import { Button, Select, FormControl, Paper, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      width: 500,
      height: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: "#eee",
  },
  form: {
    width: '100%',
  },
  textField: {
      backgroundColor: "#fff"
  },
  button: {
      backgroundColor: "green",
      marginLeft: 20
  }
}));

function ConvertForm() {
  const classes = useStyles();

  const [amount, setAmount] = useState(0);
  const [nativeCurrency, setNativeCurrency] = useState('');
  const [foreignCurrency, setForeignCurrency] = useState('');

  const convertAmount = () => {
    console.log({amount})
    console.log({nativeCurrency})
    console.log({foreignCurrency})

    if(!amount || !nativeCurrency || !foreignCurrency) return
  }


  return (
    <div className={classes.root}>
      <div className="currency_form">
        <Paper className={classes.paper}>
          <form>
            <TextField
              margin="normal"
              name='amount'
              required
              fullWidth
              label="Amount to Convert"
              type="number"
              onChange={e => setAmount(e.target.value)}
              value={amount}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="nativeCurrency">Native Currency</InputLabel>
              <Select
                required
                fullWidth
                name='nativeCurrency'
                labelId="nativeCurrency"
                type="text"
                onChange={e => setNativeCurrency(e.target.value)}
                value={nativeCurrency}
              >
                <MenuItem value={"GDP"}>GDP</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="foreignCurrency">Foreign Currency</InputLabel>
              <Select
                name='foreignCurrency'
                labelId="foreignCurrency"
                type="text"
                onChange={e => setForeignCurrency(e.target.value)}
                value={foreignCurrency}
              >
                <MenuItem value={"GDP"}>GDP</MenuItem>
              </Select>
            </FormControl>
            <Button 
              fullWidth 
              margin="normal"
              onClick={convertAmount} 
              color="primary" 
              variant="contained">
              Convert
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ConvertForm/>
    </div>
  );
}

export default App;
