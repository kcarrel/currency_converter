import React from 'react';
import { Button, Select, FormControl, Paper, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function ConvertForm(props) {
  const classes = useStyles();
  const currencyAbb = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", 
  "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", 
  "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];

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
              onChange={e => props.setAmount(e.target.value)}
              value={props.amount}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="nativeCurrency">Native Currency</InputLabel>
              <Select
                required
                fullWidth
                name='nativeCurrency'
                labelId="nativeCurrency"
                type="text"
                onChange={e => props.setNativeCurrency(e.target.value)}
                value={props.nativeCurrency}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="foreignCurrency">Foreign Currency</InputLabel>
              <Select
                name='foreignCurrency'
                labelId="foreignCurrency"
                type="text"
                onChange={e => props.setForeignCurrency(e.target.value)}
                value={props.foreignCurrency}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
            </FormControl>
            <Button 
              fullWidth 
              margin="normal"
              onClick={props.convertAmount} 
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

export default ConvertForm;