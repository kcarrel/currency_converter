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
  const [native_currency, setNativeCurrency] = useState('');
  const [foreign_currency, setForeignCurrency] = useState('');

  const convertAmount = () => {
    
    if(!amount || !native_currency || !foreign_currency) return
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
              <InputLabel id="native_currency">Native Currency</InputLabel>
              <Select
                required
                fullWidth
                name='native_currency'
                labelId="native_currency"
                type="text"
                onChange={e => setNativeCurrency(e.target.value)}
                value={native_currency}
              >
                <MenuItem >GDP</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="foreign_currency">Foreign Currency</InputLabel>
              <Select
                name='foreign_currency'
                labelId="foreign_currency"
                type="text"
                onChange={e => setForeignCurrency(e.target.value)}
                value={foreign_currency}
              >
                <MenuItem >GDP</MenuItem>
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
